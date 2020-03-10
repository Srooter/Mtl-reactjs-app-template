import React, { memo } from 'react'
import classNames from 'classnames'
import './Layout.css'

const Layout = props => {
  const classes = classNames('main', { scroll: props.type }, { [`${props.className}`]: props.className })
  // mock ErrorBoundary components
  // useEffect(() => {
  //   throw new Error('Layout component is error!')
  // })
  return <div className={classes}>{props.children}</div>
}

export default memo(Layout)
