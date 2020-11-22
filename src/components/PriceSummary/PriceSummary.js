import React from 'react'
import PropTypes from 'prop-types'

import { convertPrice } from '../../utils/helpers'

const PriceSummary = ({ values }) => {
  const { products } = values
  const sum = products.reduce((acc, curr) => acc + curr.quantity * +curr.price, 0)
  const convertedSum = convertPrice(sum)

  return (
    <div className='price-summary'>{`Suma: ${convertedSum}zł`}</div>
  )
}

PriceSummary.propTypes = {
  values: PropTypes.object.isRequired
}

PriceSummary.defaultProps = {
  values: {}
}

export { PriceSummary }
