/* eslint-env jest */

import React from 'react'
import { mount } from 'enzyme'
import { Formik, Field } from 'formik'

import { CounterField } from '../src/components/Counter/CounterField'

const mockedProps = {
  name: 'counter_test',
  component: CounterField,
}

const INITIAL_VALUE = 3

const FormikComponent = props => <Formik
  initialValues={{ 'counter_test': INITIAL_VALUE }}
>
  <Field {...mockedProps} {...props} />
</Formik>

describe('CounterField', () => {

  it('Starts with initial value', () => {
    const component = mount(<FormikComponent />)

    const text = component.find('.counter__text').text()
    const expectedText = `Obecnie masz ${INITIAL_VALUE} sztuk produktu`

    expect(text).toEqual(expectedText)
  })

  it('Increases correctly', () => {
    const component = mount(<FormikComponent />)

    const button = component.find('div[children="+"]')
    button.simulate('click')

    const text = component.find('.counter__text').text()
    const expectedText = `Obecnie masz ${INITIAL_VALUE + 1} sztuk produktu`

    expect(text).toEqual(expectedText)
  })

  it('Decreases correctly', () => {
    const component = mount(<FormikComponent />)

    const button = component.find('div[children="-"]')
    button.simulate('click')

    const text = component.find('.counter__text').text()
    const expectedText = `Obecnie masz ${INITIAL_VALUE - 1} sztuk produktu`

    expect(text).toEqual(expectedText)
  })

  it('Is disabled', () => {
    const component = mount(<FormikComponent isBlocked />)

    const minusButton = component.find('div[children="-"]')
    const plusButton = component.find('div[children="+"]')
    plusButton.simulate('click')
    plusButton.simulate('click')
    minusButton.simulate('click')

    const text = component.find('.counter__text').text()
    const expectedText = `Obecnie masz ${INITIAL_VALUE} sztuk produktu`

    expect(text).toEqual(expectedText)
  })

  it('Respects min value', () => {
    const MIN = 2
    const component = mount(<FormikComponent min={MIN} />)

    const button = component.find('div[children="-"]')
    button.simulate('click')
    button.simulate('click')

    const text = component.find('.counter__text').text()
    const expectedText = `Obecnie masz ${MIN} sztuk produktu`

    expect(text).toEqual(expectedText)
  })

  it('Respects max value', () => {
    const MAX = 4
    const component = mount(<FormikComponent max={MAX} />)

    const button = component.find('div[children="+"]')
    button.simulate('click')
    button.simulate('click')

    const text = component.find('.counter__text').text()
    const expectedText = `Obecnie masz ${MAX} sztuk produktu`

    expect(text).toEqual(expectedText)
  })
})
