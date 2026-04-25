/**
 * Generates a JSON manifest of products by scanning the product folders.
 * Run this script before build or dev to keep the manifest up to date.
 *
 * Usage: node scripts/generate-product-manifest.js
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const PRODUCT_DIR = path.join(ROOT, 'public', 'assets', 'product')
const OUTPUT = path.join(ROOT, 'public', 'product-manifest.json')

function parseProductDesc(mdContent) {
  const lines = mdContent.split('\n')
  // Product name from first # heading (single #, not ##)
  const nameMatch = lines.find(l => /^#\s+[^#]/.test(l))
  const name = nameMatch ? nameMatch.replace(/^#\s+/, '').trim() : ''

  // Description from ## Deskripsi section
  let descLines = []
  let inDesc = false
  for (const line of lines) {
    if (/^##\s+Deskripsi/i.test(line)) {
      inDesc = true
      continue
    }
    if (inDesc && /^##\s+/.test(line)) break
    if (inDesc) {
      const trimmed = line.trim()
      if (trimmed) {
        descLines.push(trimmed.replace(/^["\u201C\u201D"]+|["\u201C\u201D"]+$/g, ''))
      }
    }
  }
  // Take first 2 meaningful lines for a short description
  const description = descLines.slice(0, 3).join(' ')

  // Keunggulan / features - collect bullet points from Keunggulan section
  const features = []
  let inFeatures = false
  for (const line of lines) {
    if (/^##\s+(Keunggulan|Fitur)/i.test(line)) {
      inFeatures = true
      continue
    }
    if (inFeatures && /^##\s+/.test(line)) break
    if (inFeatures) {
      const trimmed = line.trim()
      const bullet = trimmed.replace(/^[-•·*]\s*/, '')
      if (bullet && !bullet.startsWith('#') && !bullet.startsWith('###')) features.push(bullet)
    }
  }

  return { name, description, features: features.slice(0, 5) }
}

function scanBrand(brandDir, brandSlug) {
  if (!fs.existsSync(brandDir)) return []

  const entries = fs.readdirSync(brandDir, { withFileTypes: true })
  const products = []

  for (const entry of entries) {
    if (!entry.isDirectory()) continue

    const productDir = path.join(brandDir, entry.name)
    const files = fs.readdirSync(productDir)

    // Find product_desc.md
    const descFile = files.find(f => f.toLowerCase() === 'product_desc.md')
    // Find image (first image file that isn't the md)
    const imageFile = files.find(f => /\.(jpg|jpeg|png|webp)$/i.test(f))

    let productData = { name: entry.name, description: '', features: [] }

    if (descFile) {
      const mdContent = fs.readFileSync(path.join(productDir, descFile), 'utf-8')
      productData = parseProductDesc(mdContent)
      if (!productData.name) productData.name = entry.name
    }

    const imagePath = imageFile
      ? `/assets/product/${brandSlug}/${encodeURIComponent(entry.name)}/${encodeURIComponent(imageFile)}`
      : null

    products.push({
      id: `${brandSlug}-${entry.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      name: productData.name,
      description: productData.description,
      features: productData.features,
      image: imagePath,
      folder: entry.name,
      brand: brandSlug,
    })
  }

  return products
}

// Scan both brands
const cocoveen = scanBrand(path.join(PRODUCT_DIR, 'cocoveen'), 'cocoveen')
const garam = scanBrand(path.join(PRODUCT_DIR, 'garam'), 'garam')

const manifest = {
  generatedAt: new Date().toISOString(),
  brands: {
    cocoveen: {
      name: 'Cocoveen',
      tagline: 'Produk Ramah Lingkungan Berbasis Kelapa',
      products: cocoveen,
    },
    garam: {
      name: 'Ocealya',
      tagline: 'Garam Alami Perawatan Tubuh',
      products: garam,
    },
  },
}

fs.writeFileSync(OUTPUT, JSON.stringify(manifest, null, 2), 'utf-8')
console.log(`✅ Product manifest generated: ${OUTPUT}`)
console.log(`   Cocoveen: ${cocoveen.length} products`)
console.log(`   Ocealya/Garam: ${garam.length} products`)
