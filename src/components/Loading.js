import React, { memo } from 'react'
import classNames from 'classnames'
import './Loading.css'

const Loading = props => {
  const classes = classNames({ [`loading-${props.type}`]: true }, { [`${props.className}`]: props.className })
  return <div className={`loading ${classes}`}></div>
}

export default memo(Loading)
