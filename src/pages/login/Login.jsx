import React, { Fragment, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import request from '../../config/request'
import loginImage from '../../assets/images/login-hero.png'

const Login = () => {
  let navigate = useNavigate()
  const [username, setUsername] = React.useState('mor_2314');
  const [password, setPassword] = React.useState('83r5^_');

  const handaleLogin = (e) => {
    e.preventDefault();
    const user = {
      username, password
    }
    request.post('/auth/login', user)
      .then(res => {
        console.log(res.data.token);
        localStorage.setItem('x-auth-token', res.data.token);
        navigate('/admin')
      })
      .catch((err) => { console.log(err), toast.error('Username or password is incorrent') })
  }

  return (
    <Fragment>
      <div className='mx-auto my-20 flex justify-start gap-52 items-center'>
        <div className="w-[650px]"> <img src={loginImage} alt="" /> </div>
        <div className="flex flex-col items-start justify-center gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl">Log in to Exclusive</h1>
            <p className="text-xl">Enter your details below</p>
          </div>
          <form onClick={handaleLogin} className="w-[400px] h-[200px] py-4 flex flex-col items-center gap-3">
            <input value={username} onChange={(e) => setUsername(e.target.value)} className="input input-secondary w-full bg-white" type="text" placeholder="User Name" required />
            <input value={password} onChange={(e) => setPassword(e.target.value)} className="input input-secondary w-full bg-white" type="password" placeholder="Password" required />
            <div className="w-[100%] mt-4 flex items-center justify-between font-semibold">
              <button className="text-orange-500">Forget Password?</button>
              <button className="px-6 py-1.5 rounded-md text-white bg-orange-500" type="submit">Log in</button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <button onClick={() => navigate("/")}>Go Home</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </Fragment>
  )
}

export default memo(Login)