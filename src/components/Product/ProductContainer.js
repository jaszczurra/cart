import React, { useEffect } from 'react'
import isEmpty from 'lodash/isEmpty'
import PropTypes from 'prop-types'

import { ProductView } from './ProductView'

const ProductContainer = ({ id, product, validationData, setFieldValue }) => {

  useEffect(() => {
    validationData && validationData.isError && setFieldValue(`products[${id}].quantity`, product.min)
  }, [validationData])

  if (isEmpty(product)) return null
  return (
    <ProductView
      id={id}
      product={product}
    />
  )
}

ProductContainer.propTypes = {
  id: PropTypes.number.isRequired,
  product: PropTypes.object,
  validationData: PropTypes.object,
  setFieldValue: PropTypes.func,
}

export { ProductContainer }
