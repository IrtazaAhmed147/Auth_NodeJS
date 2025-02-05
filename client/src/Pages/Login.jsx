import React, { useContext } from 'react'
import signupImage from "../assets/signupPoster.png"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import loginSchema from '../validations/loginSchema'
import {  ToastContainer } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../api/api'
import { AppContext } from '../ContextApi/ContextApi'

const Login = () => {

  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: zodResolver(loginSchema)
  })

  const navigate = useNavigate()
   const {notify} = useContext(AppContext)

 

  const handleForm = async(data) => {
    try {
      const response = await loginUser(data) 
      if(response.status === "ok") {
        notify("success", response.message)
        console.log("token ==>>", response.token);
        localStorage.setItem("token", JSON.stringify(response.token))
        navigate("/")
      } else {
        notify("error", response.message)
      }
      
    } catch (error) {
      console.log(error);
      
    }
    
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className='flex items-center justify-center  h-screen bg-green-100'>

        <div className='w-1/2 flex justify-center items-center flex-col'>
          <div className='w-[300px] md:w-[350px]'>

            <h1 className='text-4xl font-bold mb-2'>Login</h1>
            <form className='flex flex-col gap-2' onSubmit={handleSubmit(handleForm)}>




              <input  {...register("email")} type="email" name='email' placeholder='email' className='rounded-sm border-1 border-neutral-500 px-3 py-1 outline-none bg-white' required />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}


              <input  {...register("password")} type="password" name='password' className='outline-none px-3 py-1 rounded-sm border-1 border-neutral-500 bg-white' placeholder='password' required />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}



              <input className='bg-green-500 px-3 py-1 text-xl rounded-sm text-white hover:bg-green-600 cursor-pointer duration-<0.5> ease-in-out transition-all' type="submit" value="Login" />
            </form>
            <p>Don't have an account? <span><Link to='/signup'>Signup</Link></span></p>
          </div>
        </div>
        <div className='w-1/2 hidden justify-center items-center sm:flex'>
          <img className='h-[350px] md:h-[400px]' src={signupImage} alt="" />
        </div>
      </div>

    </>
  )
}

export default Login
