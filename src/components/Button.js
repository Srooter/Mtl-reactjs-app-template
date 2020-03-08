import React from 'react'
import classNames from 'classnames'
import './Button.css'

import Loading from './Loading'

const Button = props => {
  const classes = classNames(
    'btn',
    { [`btn-${props.btnType}`]: true },
    { [`${props.className}`]: props.className },
    'flex flex-justify-center flex-items-center'
  )
  return (
    <button className={classes} type={props.type} onClick={props.onClick} disabled={props.disabled}>
      {
        <>
          {props.disabled && <Loading type="small" />}
          {props.children}
        </>
      }
    </button>
  )
}

export default React.memo(Button)
