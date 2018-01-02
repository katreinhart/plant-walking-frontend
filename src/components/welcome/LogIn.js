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
      password:''
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
    console.log('yayaya');
    const { email, password } = this.state
    const response = await axios.post(`${localhostUrl}/login`, {email, password})
    if(response){
      let token= JSON.stringify(response.data.token)
      localStorage.setItem('token', token)
      window.location.href = '/'
    }
  }

  render() {
    const successFlag = window.localStorage.getItem('signupsuccess')
    window.localStorage.removeItem('signupsuccess')

    return (
      <div className="outermost-container">
        <CloseForm title="Log In"/>
        { successFlag ? <div className='signup-success'>Signup successful! Please log in.</div> : ''}
        <form onSubmit={this.handleSignin}>
        <TextInputLabeled label="e-mail" onChange={ this.handleEmail }/>
        <TextInputLabeled role="password" label="password" onChange={ this.handlePassword }/>
        <div className="buttons-container">
          <GreenButton text="log in"/>
        </div>
      </form>
      </div>
    )
  }
}

export default Login;
