import React, { useEffect, useCallback } from 'react'
import debounce from 'lodash/debounce'
import isEmpty from 'lodash/isEmpty'
import get from 'lodash/get'
import PropTypes from 'prop-types'

import { useFetch } from '../../hooks/useFetch'

import { ProductContainer } from './ProductContainer'

const ProductData = ({ id, product, values, setFieldValue }) => {
  const { data: validationData, callFetch } = useFetch()

  const value = get(values, `products[${id}].quantity`)

  const validateProduct = useCallback(debounce((pid, quantity) => {
    callFetch({
      url: '/api/product/check',
      payload: {
        pid,
        quantity
      }
    })
  }, 300), [])

  useEffect(() => {
    !isEmpty(product) && value && validateProduct(product.pid, value)
  }, [value])

  return (
    <ProductContainer
      id={id}
      product={product}
      validationData={validationData}
      setFieldValue={setFieldValue}
    />
  )
}

ProductData.propTypes = {
  id: PropTypes.number.isRequired,
  product: PropTypes.object,
  value: PropTypes.object,
  setFieldValue: PropTypes.func,
}

export { ProductData }
