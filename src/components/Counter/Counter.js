import React from 'react'
import bemCx from 'bem-modifiers'
import PropTypes from 'prop-types'

const Counter = ({ min, max, value, isBlocked, handleChange }) => {

  const handleIncrease = () => {
    value < max && !isBlocked && handleChange(value + 1)
  }

  const handleDecrease = () => {
    value > min && !isBlocked && handleChange(value - 1)
  }

  return (
    <div className={bemCx('counter', { 'disabled': isBlocked } )}>
      <div className='counter__button' onClick={handleDecrease}>-</div>
      <div className='counter__text'>{`Obecnie masz ${value} sztuk produktu`}</div>
      <div className='counter__button' onClick={handleIncrease}>+</div>
    </div>
  )
}

Counter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number.isRequired,
  isBlocked: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
}

Counter.defaultProps = {
  min: 0,
  max: 999,
}

export { Counter }
