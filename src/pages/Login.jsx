import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;

  justify-content: center;
  background: linear-gradient(-45deg, #4ade80, #22c55e,rgb(9, 152, 135),rgb(6, 115, 110));
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;

  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const LoginCard = styled.div`
  background: white;
  padding: 1.2rem;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 72%;
  max-width: 720px;
  display: flex;
  min-height: 400px;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    min-height: auto;
  }
`;

const LoginForm = styled.div`
  flex: 1;
  padding: 0.8rem 1.2rem;

  @media (max-width: 768px) {
    padding: 0.6rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
  color: #064e3b;
  font-weight: bold;
`;

const Title = styled.h1`
  font-size: 1.4rem;
  color: #064e3b;
  margin-bottom: 0.4rem;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Subtitle = styled.p`
  color: #64748b;
  margin-bottom: 1.2rem;
  font-size: 0.72rem;
`;

const InputGroup = styled.div`
  margin-bottom: 0.8rem;
`;

const Label = styled.label`
  display: block;
  color: #64748b;
  font-size: 0.72rem;
  margin-bottom: 0.4rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  outline: none;
  &:focus {
    border-color: #4ade80;
  }
`;

const RememberContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #64748b;
  font-size: 0.72rem;
`;

const ForgotPassword = styled.a`
  color: #4ade80;
  text-decoration: none;
  font-size: 0.72rem;
  &:hover {
    text-decoration: underline;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  background: #4ade80;
  color: white;
  padding: 0.6rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  margin-bottom: 0.8rem;
  cursor: pointer;
  &:hover {
    background: #22c55e;
  }
`;


const SignUpButton = styled(LoginButton)`
  background: white;
  border: 1px solid #4ade80;
  color: #4ade80;
  &:hover {
    background: #f0fdf4;
  }
`;

// Remove these duplicate declarations (around line 165)
const SocialLogin = styled.div`
  margin-top: 2rem;
  text-align: center;
  p {
    color: #64748b;
    margin-bottom: 1rem;
  }
  div {
    display: flex;
    gap: 1rem;
    justify-content: center;
    
    @media (max-width: 480px) {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;

const SocialButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  color: #64748b;
  cursor: pointer;
  &:hover {
    background: #f8fafc;
  }
`;

const IllustrationContainer = styled.div`
  flex: 1;
  background: url('/src/assets/images/fondo1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0 12px 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -1.2rem;
  margin-left: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = () => {
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({
    username: 'admin',
    password: '1234'
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      login();
      navigate('/');
    }
  };
  return (
    <Container>
      <LoginCard>
        <LoginForm>
          <Logo>🌱 GreenShare</Logo>
          <Title>Inicio de Sesión</Title>
          <Subtitle>Welcome Back. Please login to your account</Subtitle>
          
          <form onSubmit={handleSubmit}>
            <InputGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="username"
                placeholder="Enter your email"
                value={credentials.username}
                onChange={handleChange}
              />
            </InputGroup>
            
            <InputGroup>
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={credentials.password}
                onChange={handleChange}
              />
            </InputGroup>

            <RememberContainer>
              <CheckboxLabel>
                <input type="checkbox" /> Remember me
              </CheckboxLabel>
              <ForgotPassword href="#">Forgot password?</ForgotPassword>
            </RememberContainer>

            <LoginButton type="submit">Login</LoginButton>
            <SignUpButton type="button">Sign Up</SignUpButton>
          </form>
        </LoginForm>
        <IllustrationContainer />
      </LoginCard>
    </Container>
  );
};

export default Login;