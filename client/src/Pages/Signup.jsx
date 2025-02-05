import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import signupImage from "../assets/signupPoster.png"
import signupSchema from '../validations/signupschema';




const Signup = () => {




    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: zodResolver(signupSchema), // Connect Zod schema
    });

    const navigate = useNavigate()
    const notify = () => {
        return toast.success('Account Created', {
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

    const handleForm = (data) => {
        console.log("Form Submitted:", data);
        // notify()

        navigate("/login")
    };





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
                        <h1 className='text-4xl font-bold'>Signup</h1>

                        <input  {...register("userName")} type="text" name='userName' placeholder='username' className='rounded-sm border-1 border-neutral-500 px-3 py-1 outline-none' required />
                        {errors.userName && <p className="text-red-500 text-sm">{errors.userName.message}</p>}


                        <input  {...register("email")} type="email" name='email' placeholder='email' className='rounded-sm border-1 border-neutral-500 px-3 py-1 outline-none' required />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}


                        <input  {...register("password")} type="password" name='password' className='outline-none px-3 py-1 rounded-sm border-1 border-neutral-500' placeholder='password' required />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                        <input  {...register("confirmPassword")} type="password" name='confirmPassword' className='outline-none px-3 py-1 rounded-sm border-1 border-neutral-500' placeholder='confirm password' required />
                        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}


                        <input className='bg-green-500 px-3 py-1 text-xl rounded-sm text-white hover:bg-green-600 cursor-pointer duration-<0.5> ease-in-out transition-all' type="submit" value="Create Account" />
                    </form>
                    <p>already have an account? <span><Link to='/login'>Login</Link></span></p>
                </div>
                <div className='w-1/2 flex justify-center items-center'>
                    <img className='h-[400px]' src={signupImage} alt="" />
                </div>
            </div>
        </>
    )
}

export default Signup
