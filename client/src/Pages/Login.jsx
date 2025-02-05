import React from 'react'
import signupImage from "../assets/signupPoster.png"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import loginSchema from '../validations/loginSchema'
import { toast, ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'

const Login = () => {

  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: zodResolver(loginSchema)
  })

  const handleForm = (data) => {
    console.log(data);
    toast.success('Login Successful', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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

      <div className='flex items-center justify-center gap-7 h-screen '>

        <div className='w-1/2 flex justify-center items-center flex-col'>

          <form className='flex flex-col gap-2 w-[350px]' onSubmit={handleSubmit(handleForm)}>
            <h1 className='text-4xl font-bold'>Login</h1>




            <input  {...register("email")} type="email" name='email' placeholder='email' className='rounded-sm border-1 border-neutral-500 px-3 py-1 outline-none' required />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}


            <input  {...register("password")} type="password" name='password' className='outline-none px-3 py-1 rounded-sm border-1 border-neutral-500' placeholder='password' required />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}



            <input className='bg-green-500 px-3 py-1 text-xl rounded-sm text-white hover:bg-green-600 cursor-pointer duration-<0.5> ease-in-out transition-all' type="submit" value="Login" />
          </form>
          <p>don't have an account? <span><Link to='/signup'>Signup</Link></span></p>
        </div>
        <div className='w-1/2 flex justify-center items-center'>
          <img className='h-[400px]' src={signupImage} alt="" />
        </div>
      </div>

    </>
  )
}

export default Login
