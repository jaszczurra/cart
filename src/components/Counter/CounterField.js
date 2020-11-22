import React from 'react'
import get from 'lodash/get'
import PropTypes from 'prop-types'

import { Counter } from './Counter'

const CounterField = ({ form, field, min, max, isBlocked, onChangeCallback }) => {

  const handleChange = value => {
    form.setFieldValue(field.name, value)
    onChangeCallback && onChangeCallback()
  }

  return (
    <Counter
      min={min}
      max={max}
      isBlocked={isBlocked}
      value={get(form.values, field.name)}
      handleChange={handleChange}
    />
  )
}

CounterField.propTypes = {
  form: PropTypes.object,
  field: PropTypes.object,
  min: PropTypes.number,
  max: PropTypes.number,
  isBlocked: PropTypes.bool,
  onChangeCallback: PropTypes.func,
}

export { CounterField }
