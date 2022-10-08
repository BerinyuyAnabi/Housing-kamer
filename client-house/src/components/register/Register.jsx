import React,{Component} from "react"
import './register.css'
import { Link } from "react-router-dom"

import axios from 'axios'

class Register extends Component {
  constructor(props) {
    super(props);
      this.state =
      {
        email: "",
        confirmEmail: '',
        password: '',
        confirmPassword: '',
        data: [],
      }
    }
    handleInputChaange = e => {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }
    handleSubmit = e => {
      e.preventDefault();
      const { email,confirmEmail, password, confirmPassword } = this.state
      const user = {
        email,
        confirmEmail,
        password,
        confirmPassword
      }
      axios.post('http://localhost:8000/create', user)
        .then(() =>
          console.log('book created'),
          this.callAPI()
        )
        .catch(err => {
          console.error(err)
        })
    }
    callAPI(){
      axios.get("http://localhost:8000/home")
      .then(response=>{
        this.setState({data:response.data})
      })
    }
  
// const Register = () => {
  render(){ 
  return (
<> 
     {/* Login Page */}
     <div className="form-container">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-content">
            <h3 className="form-title">Register</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                name="email"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group mt-3">
              <label> Confirm Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                name="confirmEmail"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                name="password"
                onChange={this.handleInputChange}

              />
            </div>
            <div className="form-group mt-3">
              <label> Confirm Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                name="confirmPassword"
                onChange={this.handleInputChange}

              />
            </div>
            <div className="d-grid gap-2 mt-3 flex button">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <Link to='/login'>
                <button className="btn btn-primary">Login</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
      </>
      )
  }
}

      export default Register