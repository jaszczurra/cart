import React from 'react'
import { Formik } from 'formik'
import isEmpty from 'lodash/isEmpty'
import PropTypes from 'prop-types'

import { CartSummaryView } from './CartSummaryView'

const CartSummaryContainer = ({ products, loading, error }) => {

  if (loading) return <div>Pobieranie danych</div>
  if (error) return <div>Ups! Coś poszło nie tak :(</div>
  if (isEmpty(products)) return <div>Brak produktów</div>

  const initialProducts = products
    ? products.map(({ pid, price, min, ...rest } = {}) => ({ pid, price, quantity: min }))
    : []

  return (
    <Formik
      name='cartSummaryForm'
      initialValues={{ products: initialProducts }}
      enableReinitialize
    >
      {({ values, setFieldValue }) => <CartSummaryView
        products={products}
        values={values}
        setFieldValue={setFieldValue}
      />}
    </Formik>
  )
}

CartSummaryContainer.propTypes = {
  products: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.object,
}

export { CartSummaryContainer }
