import { describe, expect, it } from 'vitest'
import { findKitProduct, KIT_PRODUCTS } from '../server/utils/kitProducts'

describe('findKitProduct', () => {
  it('finds an existing product by kit slug', () => {
    const product = findKitProduct('crm')
    expect(product?.label).toBe('CRM 客戶管理系統')
  })

  it('returns undefined for an unknown kit slug', () => {
    expect(findKitProduct('does-not-exist')).toBeUndefined()
  })

  it('returns undefined for empty/nullish input', () => {
    expect(findKitProduct(undefined)).toBeUndefined()
    expect(findKitProduct(null)).toBeUndefined()
    expect(findKitProduct('')).toBeUndefined()
  })

  it('every registered product has a unique kit slug', () => {
    const slugs = KIT_PRODUCTS.map((p) => p.kit)
    expect(new Set(slugs).size).toBe(slugs.length)
  })
})
