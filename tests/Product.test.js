import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import { mount } from 'enzyme'

import { ProductContainer } from '../src/components/Product/ProductContainer'
import { ProductView } from '../src/components/Product/ProductView'

const mockedProduct = {
  pid: '8e5e1248-c799-4937-9acc-2b3ab0e034ff',
  name: 'Patelnia',
  max: 10,
  min: 1,
  price: '89.99',
}

describe('Product', () => {

  it('Renders nothing if no product', () => {
    const component = mount(<ProductContainer id={0} />)
    expect(component.children().length).toBe(0)
  })

  it('Snapshot', () => {
    const renderer = new ShallowRenderer()
    const snapshot = renderer.render(<ProductView
      id={0}
      product={mockedProduct}
    />)

    expect(snapshot).toMatchSnapshot()
  })
})
