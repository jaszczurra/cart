import React from 'react'
import renderer from 'react-test-renderer'

import { Counter } from '../src/components/Counter/Counter'

describe('Counter', () => {

  it('Snapshot', () => {
    const component = renderer.create(<Counter value={5} handleChange={() => {}} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
