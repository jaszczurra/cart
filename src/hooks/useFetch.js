import { useState, useEffect } from 'react'

export const useFetch = () => {
  const [params, setParams] = useState({ url: '' })
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleParams = ({ url, payload }) => {
    setParams({ url, body: payload })
  }

  useEffect(async () => {
    if (params && params.url) {
      const { url, body } = params

      setLoading(true)
      setError(null)

      try {
        const res = await fetch(url, {
          method: body ? 'POST' : 'GET',
          body: body && JSON.stringify(body)
        })
        const json = await res.json()
        json && setData(json)
      } catch (err) {
        setError(err)
        console.log('Fetching data error', err)
      }

      setLoading(false)
    }
  }, [params])

  return {
    data,
    loading,
    error,
    callFetch: handleParams,
  }
}
