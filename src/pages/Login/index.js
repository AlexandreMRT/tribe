import React from 'react';
import { LoginContainer, LogoContent, Footer, LoginBg } from './style'
import { SignInButton, InputContent, InputLabel, Input } from './signInStyle'
import logo from '../../assets/images/tribe-logo.png'

const SignInForm = () => (
  <>
    <InputContent>
      <InputLabel>
        Email
      </InputLabel>
      <Input/>

      <InputLabel>
        Senha
      </InputLabel>
      <Input/>
    </InputContent>

    <SignInButton>
      Login
    </SignInButton>
  </>
)

const Login = () => (
  <>
    <LoginBg>
      <LoginContainer>
        <LogoContent>
          <img src={logo} alt="tribe_logo"/>
        </LogoContent>
        <SignInForm />
        <Footer>
          Ainda não possui sua conta?
          <a href='#'>
            Cadastre-se
          </a>
        </Footer>
      </LoginContainer>
    </LoginBg>
  </>
);

export default Login;