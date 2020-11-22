import React, { useEffect } from 'react'

import { useFetch } from '../../hooks/useFetch'

import { CartSummaryContainer } from './CartSummaryContainer'

const CartSummaryData = () => {
  const { data, loading, error, callFetch } = useFetch()

  useEffect(() => {
    callFetch({ url: 'api/cart' })
  }, [])

  return (
    <CartSummaryContainer
      products={data}
      loading={loading}
      error={error}
    />
  )
}

export { CartSummaryData }
