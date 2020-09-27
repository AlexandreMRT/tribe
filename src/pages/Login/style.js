import styled from 'styled-components'
import loginBg from '../../assets/images/sign-in-background.png'

export const LoginContainer = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LogoContent = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0 50px;
    margin: 70px 0;
  }
`;

export const Footer = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
	  display: flex;
	  justify-content: center;
	  position: absolute;
	  bottom: 20px;
    width: 100%;
    
	  p,
	  a {
	  	color: #FFFFFF;
	  	font-size: 16px;
	  }
	  a {
	  	margin-left: 7px;
	  }
	}
`;

export const LoginBg = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 1024px) {
    background-image: url(${loginBg});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    height: 100%;
    width: 100%;
  }
`;
