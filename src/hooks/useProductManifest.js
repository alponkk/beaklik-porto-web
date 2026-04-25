import { useState, useEffect } from 'react'

/**
 * Fetches the product manifest JSON generated from the folder structure.
 * Returns { brands, loading, error }
 */
export default function useProductManifest() {
  const [data, setData] = useState({ brands: null, loading: true, error: null })

  useEffect(() => {
    fetch('/product-manifest.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load product manifest')
        return res.json()
      })
      .then(manifest => {
        setData({ brands: manifest.brands, loading: false, error: null })
      })
      .catch(err => {
        setData({ brands: null, loading: false, error: err.message })
      })
  }, [])

  return data
}
