import React from 'react'

import { convertPrice } from '../src/utils/helpers'

describe('convertPrice', () => {

  it('Converts number properly', () => {
    const convertedPrice = convertPrice(23.12)
    expect(convertedPrice).toEqual('23,12')
  })

  it('Converts string properly', () => {
    const convertedPrice = convertPrice('23.12')
    expect(convertedPrice).toEqual('23,12')
  })

  it('Returns "NaN" if no price provided', () => {
    const convertedPrice = convertPrice()
    expect(convertedPrice).toEqual('NaN')
  })
})
