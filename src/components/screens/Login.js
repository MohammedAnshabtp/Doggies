import React, { useState } from "react";
import styled from "styled-components";
import { Link , useHistory} from "react-router-dom";
import axios from 'axios';
import puppy from '../assets/images/puppy.png';
import { BASE_URL } from "../../axiosConfig";

export default function Login() {
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[message,setMessage]=useState("");

    const history = useHistory();

    const handleSubmit =(e) =>{
        setMessage("");
        e.preventDefault();
        axios
        .post(`${BASE_URL}/auth/token/`,{username,password})
        .then((response)=>{
            let data = response.data;
            console.log(data)
            localStorage.setItem("user_data",JSON.stringify(data));
            history.push("/dogs");
           
        })
        .catch((error)=>{
            console.error(error);
           
        })
       
    };
    return (       
        <Container>
            <LeftContainer>
                <HeaderContainer>
                    <Logo
                        src={puppy}
                        alt="Image"
                    />
                </HeaderContainer>
                <MainHeading>"Puppy Love"</MainHeading>
            </LeftContainer>
            <RightContainer>
                <LoginContainer>
                    <LoginHeading>Login to your Account</LoginHeading>
                    <LoginInfo>Enter email and password to login</LoginInfo>
                    <Form onSubmit={handleSubmit}>
                        <InputContainer>
                            <TextInput onChange={(e) => setUsername(e.target.value)}
                            value={username} 
                            type="email"
                            placeholder="Email"
                             />
                        </InputContainer>
                        <InputContainer>
                            <TextInput 
                            onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                type="password"
                                placeholder="Password" />
                        </InputContainer>
                        <LoginButton to="/signup">Signup Now</LoginButton>
                        {message && <ErrorMessage>{message}</ErrorMessage>}
                        <ButtonContainer>
                            <SubmitButton>Login</SubmitButton>
                        </ButtonContainer>
                    </Form>
                </LoginContainer>
            </RightContainer>
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    padding: 15px;
`;
const LeftContainer = styled.div`
    width: 55%;
    padding: 40px 70px 70px;
`;
const HeaderContainer = styled.div``;
const Logo = styled.img`
      width:15%;
`;
const MainHeading = styled.h1`
    font-size: 80px;
    color: #ff4d4d;
    margin-top: 300px;
    line-height: 1.4em;
`;
const RightContainer = styled.div`
    background:#404040;
    width: 45%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    border-radius: 20px;
    padding: 0 70px 70px;
`;
const LoginContainer = styled.div`
    padding-bottom: 70px;
    border-bottom: 1px solid#ff4d4d;
    width: 100%;
`;
const LoginHeading = styled.h3`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    color:#ff4d4d;
`;
const LoginInfo = styled.p`
    font-size: 18px;
    margin-bottom: 35px;
    color:#ff4d4d;
`;
const Form = styled.form`
    width: 100%;
    display: block;
`;
const InputContainer = styled.div`
    margin-bottom: 15px;
    position: relative;
    &:before {
    }
`;
const TextInput = styled.input`
    padding: 20px 25px 20px 30px;
    width: 100%;
    display: block;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    outline: none;
`;
const LoginButton = styled(Link)`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 25px;
    color:#ff4d4d;
    font-size: 20px;
`;
const SubmitButton = styled.button`
    background:#ff4d4d;
    border: 0;
    outline: 0;
    color: #fff;
    padding: 25px 40px;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;
const ErrorMessage = styled.p`
    font-size: 17px;
    color: red;
    margin-bottom: 25px;
    text-align: center;
`;
