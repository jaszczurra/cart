import React from 'react'
import { Form, FieldArray } from 'formik'
import PropTypes from 'prop-types'

import { ProductData as Product } from '../Product/ProductData'
import { PriceSummary } from '../PriceSummary/PriceSummary'

const CartSummaryView = ({ products, values, setFieldValue }) => (
  <>
    <Form className='products-list'>
      <h3>Lista produktów</h3>
      <FieldArray
        name='products'
        render={() => products.map((product, i) =>
          <Product
            key={product.pid}
            id={i}
            product={product}
            values={values}
            setFieldValue={setFieldValue}
          />
        )}
      />
    </Form>
    <PriceSummary values={values} />
  </>
)

CartSummaryView.propTypes = {
  products: PropTypes.array.isRequired,
  values: PropTypes.object,
  setFieldValue: PropTypes.func,
}

export { CartSummaryView }
