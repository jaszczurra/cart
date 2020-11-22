import React from 'react'
import renderer from 'react-test-renderer'

import { PriceSummary } from '../src/components/PriceSummary/PriceSummary'

const mockedProps = {
  values: {
    products: [
      { price: 1, quantity: 3 },
      { price: 4.50, quantity: 1 },
      { price: 9.00, quantity: 2 },
    ]
  }
}

describe('PriceSummary', () => {

  it('Snapshot', () => {
    const component = renderer.create(<PriceSummary {...mockedProps} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
