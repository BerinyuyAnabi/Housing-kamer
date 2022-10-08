// eslint-disable-next-line
import React from "react"
import './login.css'
import { Link } from "react-router-dom"


const Login = () => {
  return (
    <>
      {/* Login Page */}
      <div className="form-container">
        <form className="form">
          <div className="form-content">
            <h3 className="form-title">Log In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3 flex button">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <Link to='/register'>
                <button className="btn btn-primary"> Register</button>
              </Link>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="google.com">password?</a>
              

            </p>
          </div>
        </form>
      </div>

    </>
  )
}

export default Login
