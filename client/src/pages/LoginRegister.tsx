import Login from "../components/Login"
import Register from "../components/Register"
import { useState } from "react"
const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true)
  const toggleLoginRegister = () => setIsLogin(!isLogin)
  return (
    <>
        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold  text-primary-content dark:text-dark-primary-content">Welcome to Recrut.ai</h1>
            <p className="text-gray-600 dark:text-gray-400">Sign in to your account or create a new one</p>
        </div>
        <div className="">
            {isLogin ? <Login  /> : <Register />}
            <div className="flex justify-center">
            <p>{isLogin ? "If you don't have an account," : " You already have an account,"}</p> 
            <button onClick={toggleLoginRegister} className="text-blue-600 hover:underline dark:text-blue-400 ml-2">{isLogin ? "Register" : "Login"}</button>
                
            </div>
        </div>
    </>
  )
}

export default LoginRegister