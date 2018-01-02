import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../shared/Navigation'
import CloseForm from '../shared/CloseForm'
import TextInputLabeled from '../shared/TextInputLabeled'
import GreenButton from '../shared/GreenButton'
import axios from 'axios'

const localhostUrl = 'http://localhost:2999/api/users'
class Login extends Component {
  constructor (){
    super()
    this.state={
      email: '',
      password:'',
      isError: false
    }
    this.handleSignin = this.handleSignin.bind(this)
  }

  handleEmail = (e) => {
    this.setState({email:e.target.value})
  }

  handlePassword = (e) => {
    this.setState({password:e.target.value})
  }

  async handleSignin(e) {
    e.preventDefault()

    const { email, password } = this.state
    try {
      const response = await axios.post(`${localhostUrl}/login`, {email, password})
      let { token } = response.data
      localStorage.setItem('token', token)
      window.location.href = '/'
    }
    catch(error){
      console.log( 'errors', error);
      this.setState({isError:true})
    }
  }

  render() {
    const successFlag = window.localStorage.getItem('signupsuccess')
    window.localStorage.removeItem('signupsuccess')

    return (
      <div className="outermost-container">
        <CloseForm title="Log In"/>
        { successFlag ? <div className='signup-success'>Signup successful! Please log in.</div> : ''}
        <form onSubmit={ this.handleSignin }>
        <TextInputLabeled label="e-mail" onChange={ this.handleEmail }/>
        <TextInputLabeled role="password" label="password" onChange={ this.handlePassword }/>
        <div className="buttons-container">
          <GreenButton text="log in"/>
          { this.state.isError ? <div style={{color:'red'}}>Invalid email or password</div>: false }
        </div>
      </form>
      </div>
    )
  }
}

export default Login;
