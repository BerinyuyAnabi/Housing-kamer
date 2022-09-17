import React from "react"
import './register.css'
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <>
     {/* Login Page */}
     <div className="form-container">
        <form className="form">
          <div className="form-content">
            <h3 className="form-title">Register</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label> Confirm Email address</label>
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
            <div className="form-group mt-3">
              <label> Confirm Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3 flex">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <Link to='/login'>
                <button className="but">Login</button>
              </Link>
            </div>
          </div>
        </form>
      </div>

      </>
      )
}
      export default Register