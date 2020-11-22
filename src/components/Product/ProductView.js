import React from 'react'
import { Field } from 'formik'
import PropTypes from 'prop-types'

import { CounterField } from '../Counter/CounterField'

import { convertPrice } from '../../utils/helpers'

const ProductView = ({ id, product }) => {
  const { name, price, min, max, isBlocked } = product
  const convertedPrice = convertPrice(price)

  return (
    <li className='row'>
      <span>{`${name}, cena: ${convertedPrice}zł`}</span>
      <Field
        name={`products[${id}].quantity`}
        component={CounterField}
        min={min}
        max={max}
        isBlocked={isBlocked}
      />
    </li>
  )
}

ProductView.propTypes = {
  id: PropTypes.number.isRequired,
  product: PropTypes.object.isRequired,
}

export { ProductView }
