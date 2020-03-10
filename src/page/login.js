import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import ajax from '../lib/axios'
import { createForm } from 'rc-form'
import { connect } from 'react-redux'
import { goLogin } from '../actions'
import ErrorBoundary from '../components/HOC/ErrorBoundary'
import Layout from '../components/Layout'
import Button from '../components/Button'
import './login.css'

function Login(props) {
  const [count, setCount] = useState({
    sendCount: 60,
    sendCodeText: 'Get code',
  })
  const [sendFlag, setSendFlag] = useState(false)
  const [btnDisable, setBtnDisable] = useState(false)
  const [form, setForm] = useState({
    username: 'Sroot',
    password: 'sr33%1',
    mobile: '19999999999',
    verifyCode: '',
  })
  const handleChange = e => {
    // 参考：https://reactjs.org/docs/events.html
    // Reference：https://reactjs.org/docs/events.html
    e.persist()
    setForm(form => ({ ...form, [e.target.name]: e.target.value }))
  }
  function login(e) {
    e.preventDefault()
    props.form.validateFields((error, value) => {
      if (!error) {
        loginApi({
          username: form.username,
          password: form.password,
          mobile: form.mobile,
          verifyCode: form.verifyCode,
        })
        setBtnDisable(true)
      }
    })
  }
  async function loginApi(data) {
    await ajax.post('/api/user/login', data).then(res => {
      setBtnDisable(false)
      const dataMsg = res.data.msg
      if (dataMsg) {
        alert(dataMsg)
      } else {
        props.goLogin(res.data)
        props.history.push('/main')
      }
    })
  }
  function sendCode() {
    props.form.validateFields(['mobile'], (error, value) => {
      if (!error) {
        if (!sendFlag) {
          sendVerifyCodeApi({
            mobile: form.mobile,
          })
        }
        setSendFlag(true)
      }
    })
  }
  useEffect(() => {
    const timerID = setInterval(() => {
      if (sendFlag) {
        count.sendCount--
        setCount({ ...count, sendCodeText: count.sendCount + 's' })
        if (count.sendCount === 0) {
          setCount({
            ...count,
            sendCount: 60,
            sendCodeText: 'Get code',
          })
          setSendFlag(false)
        }
      }
    }, 1000)
    return function clearTick() {
      clearInterval(timerID)
    }
  }, [sendFlag, count])
  async function sendVerifyCodeApi(data) {
    await ajax.post('/api/user/loginMsgCode', data).then(res => {
      const dataMsg = res.data.msg
      if (dataMsg) {
        alert(dataMsg)
      } else {
        alert(res.data.msgCode)
      }
    })
  }
  const { getFieldProps, getFieldError } = props.form
  return (
    <>
      <Helmet title="Login Page" />
      <ErrorBoundary>
        <Layout className="App-header">
          <div className="form bg-white">
            <h2 className="form__title">Login</h2>
            <form onSubmit={login}>
              <div className={getFieldError('username') ? 'form-input input-error' : 'form-input'}>
                <input
                  type="text"
                  className="form-input__text"
                  placeholder="Username"
                  {...getFieldProps('username', {
                    validateTrigger: 'onClick',
                    rules: [{ required: true }],
                  })}
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                />
              </div>
              <div className={getFieldError('password') ? 'form-input input-error' : 'form-input'}>
                <input
                  type="password"
                  className="form-input__text"
                  placeholder="Password"
                  {...getFieldProps('password', {
                    validateTrigger: 'onClick',
                    rules: [{ required: true }],
                  })}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
              </div>
              <div className={getFieldError('mobile') ? 'form-input input-error' : 'form-input'}>
                <input
                  type="text"
                  className="form-input__text"
                  placeholder="Phone number"
                  {...getFieldProps('mobile', {
                    validateTrigger: 'onClick',
                    rules: [{ required: true }],
                  })}
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className={getFieldError('verifyCode') ? 'form-input input-error' : 'form-input'}>
                <div className="flex flex-items-center">
                  <input
                    type="text"
                    className="form-input__text flex-cell"
                    placeholder="SMS verification code"
                    {...getFieldProps('verifyCode', {
                      validateTrigger: 'onClick',
                      rules: [{ required: true }],
                    })}
                    name="verifyCode"
                    value={form.verifyCode}
                    onChange={handleChange}
                  />
                  <div className="form-input__code blue-text" onClick={sendCode}>
                    {count.sendCodeText}
                  </div>
                </div>
              </div>
              <Button className="login-btn" btnType="primary" type="Submit" disabled={btnDisable}>
                Login
              </Button>
            </form>
          </div>
        </Layout>
      </ErrorBoundary>
    </>
  )
}
const mapStateToProps = state => {
  return { param: state.loginRds }
}

export default connect(mapStateToProps, { goLogin })(createForm()(Login))
