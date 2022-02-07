import React from 'react';
import Navbar from './Navbar';
import styled from "styled-components";
import Silder from './Silder';



export default function Dogs() {
    return (
        <>
            <HeaderBox>
                <Navbar/>
            </HeaderBox>
            <Main>
                <Spotlight>
                        <Silder />
                </Spotlight>
                <br/>
                <ContentArea>
                    <HeadArea>What you really knows about Dogs....?</HeadArea><br/>
                    <Paragraph>You ever wonder what your dog is thinking? What he or she wants to say? We’d all love it if our dogs could talk — some of the time, at least. (If nothing else we’d be guaranteed some good dog quotes!) In line of that, we have some quotes about dogs, by the humans who love them.
                        They’re like family to us, and why not celebrate it? Here are great quotes about man’s best friend.</Paragraph>
                </ContentArea>
                </Main>
        </>
    );
}
const HeaderBox =styled.div`
    width:100%;
    margin:0 auto;
    height:100%;
    background:#000;
`;
const Main =styled.div`
    background:#ff3333;
    padding:3px;
    margin:0px;
`;
 const Spotlight = styled.div`
    position:relative;
    margin: 0 auto;
    padding:0px 0px ;
    z-index:2;
    width:1264px;
    height:585px;
    background-color:#000;
`;
const ContentArea =styled.div`
    padding:50px 30px;
    color:#fff;
`;
const HeadArea = styled.div`
    font-size:55px;
    font-weight:600;
`;
const Paragraph =styled.p`
    font-size:20px;
    line-height:1.6rem;
    text-align:left;
`;