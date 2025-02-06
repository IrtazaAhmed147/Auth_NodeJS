import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()


  useEffect(() => {

    const checkAuth = async () => {

      const token = JSON.parse(localStorage.getItem("token"))


      if (!token) {
        navigate("/login")
        return

      }


      try {
        const response = await fetch("http://localhost:5000/auth/verify", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` }
        })
        const res = await response.json()
        console.log(res);
        if (response.status === 200) {
          setLoading(false);
        }

      } catch (error) {
        navigate("/login")
      }
    }
    checkAuth()
  }, [navigate])

  if (loading) return <p>Loading...</p>;


  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
