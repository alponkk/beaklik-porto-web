export const souvenirProducts = Array.from({ length: 9 }, (_, i) => `/assets/product/product${i + 1}.jpg`)

export const cocoveenProducts = Array.from({ length: 25 }, (_, i) => ({
  image: `/assets/product/cocoveen/produk_${i + 1}.jpg`,
  category: 'COOVEEN',
}))

export const garamProducts = Array.from({ length: 7 }, (_, i) => ({
  image: `/assets/product/garam/produk_garam${i + 1}.jpg`,
  category: 'OCEALYA',
}))

export const allProducts = [...cocoveenProducts, ...garamProducts]
