import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import CloseForm from '../shared/CloseForm'
import TextInputLabeled from '../shared/TextInputLabeled'
import GreenButton from '../shared/GreenButton'

const localhostUrl = 'http://localhost:2999/api/users'

class Login extends Component {
  constructor (){
    super()
    this.state={
      email: '',
      password:'',
      isError: false,
      success: false
    }
    this.handleSignin = this.handleSignin.bind(this)
  }

  componentDidMount() {
    const successFlag = window.localStorage.getItem('signupsuccess')
    if(successFlag) this.setState({success: true })
    window.localStorage.removeItem('signupsuccess')
  }

  handleEmail = (e) => {
    this.setState({email: e.target.value})
  }

  handlePassword = (e) => {
    this.setState({password: e.target.value})
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

    return (
      <div className="outermost-container">
        <CloseForm title="Log In"/>
        { this.state.success ? <div className='signup-success'>Signup successful! Please log in.</div> : ''}
        <form onSubmit={ this.handleSignin }>
          <TextInputLabeled label="e-mail" onChange={ this.handleEmail }/>
          <TextInputLabeled role="password" label="password" onChange={ this.handlePassword }/>
          <div className="buttons-container">
            <GreenButton text="log in"/>
            { this.state.isError ? <div style={{color:'red'}}>Invalid email or password</div>: false }
          </div>
        </form>
        <Link to='/signup'>Need to register? Click here!</Link>
      </div>
    )
  }
}

export default Login;
