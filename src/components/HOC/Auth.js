import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import ajax from '../../lib/axios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { goLogin } from '../../actions'

export function requireAuthentication(Component) {
  function Auth(props) {
    async function loginStateApi() {
      await ajax.get('/api/user/loginState').then(res => {
        const dataMsg = res.data.msg
        if (dataMsg) {
          alert(dataMsg)
          props.history.push('/')
        } else {
          goLogin(res.data)
          if (props.match.path !== '/main') {
            props.history.push('/main')
          }
        }
      })
    }

    useEffect(() => {
      loginStateApi()
    })

    const { isLogin, isAuth } = props.param

    return (
      <>
        {Cookies.get('user') || isLogin || isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )}
      </>
    )
  }
  const mapStateToProps = state => {
    return {
      param: state.loginRds,
    }
  }
  return connect(mapStateToProps)(Auth)
}
