import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

const Login = () => {
  const [user,setUser] = useState({
    userName: "",
    password: "",
  })

  const setUserName = (value) => {
    return setUser({
      ...user,
      userName: value,
    });
  }
  const setPassword = (value) => {
    return setUser({
      ...user,
      password: value,
    });
  }

  const handleLogin = (e) => {
    console.log(user);
  }

  return (
    <form action={handleLogin} id='login'>
        <Input setValue = {setUserName} label="Tên đăng nhập" type="text"/>
        <Input setValue = {setPassword} label="Mật khẩu" type="password"/>
        <span>
          Bạn quên mật khẩu? 
          <button type="button">Quên mật khẩu</button>
        </span>
        <Button handle={handleLogin} label="Login"></Button>
    </form>
  )
}

export default Login