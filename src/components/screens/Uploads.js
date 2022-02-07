import React from 'react'
import Navbar from './Navbar';
import styled from 'styled-components';
import Upload from '../assets/images/Upload.png'

export default function Uploads() {
    return (
        <>
        <div>
            <Navbar/>
        </div>
        <Heading>Any uploads must comply with the upload guidelines or face deletion.</Heading>
        <UploadContainer>
            <Uploadtxt>No File Selected</Uploadtxt>
            <UploadBox>
                <UploadIcon src={Upload} alt='LOgo'/>
                <Uploadpara>Drag here your file or Click Here to upload</Uploadpara>
            </UploadBox>
            <DownHeader>Upload a.jpg or .png Cat Image</DownHeader>
        </UploadContainer>
        </>
    );
}
const Heading =styled.h3`
    font-size:15px;
    text-align:center;
`;
const UploadContainer = styled.div`
    width:80%;
    margin:auto;
    align-items:center;
`;
const Uploadtxt = styled.p`
    font-size:18px;
    text-align:center;
`;
const UploadBox =styled.div`
    width:50%;
    padding:200px;
    margin:auto;
    border:2px dotted #000;
`;
const UploadIcon = styled.img`
    width:100%;
    margin:0 auto;
`;
const Uploadpara = styled.p`
    text-align:center;
`;
const DownHeader= styled.h2`
    font-size:30px;
    font-weight:500;
    text-align:center;
`;
