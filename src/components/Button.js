import React from 'react'
import classNames from 'classnames'
import './Button.css'

import Loading from './Loading'

const Button = props => {
  const classes = classNames(
    'btn',
    { [`btn-${props.type}`]: true },
    { [`${props.className}`]: props.className },
    'flex flex-justify-center flex-items-center'
  )
  return (
    <button className={classes} onClick={props.onClick} disabled={props.disable}>
      {
        <>
          {props.disable && <Loading type="small" />}
          {props.children}
        </>
      }
    </button>
  )
}

export default Button
