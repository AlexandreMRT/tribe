import styled from 'styled-components'
import loginBg from '../../assets/images/sign-in-background.png'

export const SignInButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E57728;
  color: #FFFFFF;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  font-size: 14px;
  font-family: 'Montserrat-Bold';
  text-transform: uppercase;
  letter-spacing: 3px;
  border-radius: 8px;
  border: none;
  padding: 15px 0;
`;

export const InputContent = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    display: block;
    margin-bottom: 20px;
    margin: auto 0 20px;
  }
`;

export const InputLabel = styled.label`
  color: #FFFFFF;
  text-transform: uppercase;
  margin-bottom: 8px;
  display: block;
  font-family: 'Montserrat-Bold';
`;

export const Input = styled.input`
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    color: #FFFFFF;
    background: #47484C;
    border: none;
    border-radius: 8px;
    height: 45px;
    width: 100%;
    border-bottom: solid #E57728 2px;
    font-size: 12px; 
  }
`;