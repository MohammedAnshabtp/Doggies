import React, {useState,useEffect} from 'react'
import Navbar from './Navbar';
import styled from 'styled-components';
import Axios from 'axios';
import { Zoom } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import Like from '../assets/images/likee.jpg';
import Dislike from '../assets/images/dilike.png';
import Fav from '../assets/images/fav.png';
import {Helmet} from "react-helmet";


export default function Gallery() {
const [breds,setBreds]=useState([]);
const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
  };

useEffect(() => {
    var URL = `https://api.thedogapi.com/v1/breeds`;
    Axios.get(URL)
        .then((res) => {
            console.log(res.data);
           setBreds(res.data);
           console.log(breds);
        })
        .catch(function(error){
            console.log(error);
        });
},);
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {breds.map((each, index) => (
            <img key={index} style={{ width: "100%", height:"600px" }} src={each.image.url}  alt=''/>
          ))}
        </Zoom>
      </div>
    );
  };



    return (
        <>
        <Helmet>
            <title>Doggies | Gallery</title>
            <meta name="Doggies" content="Gallery" />
        </Helmet>
            <div>
                <Navbar/>          
            </div>
            <GalleryContaineer>  
                <GalleryImageItem>             
                    <Slideshow/>  
                </GalleryImageItem>
            </GalleryContaineer>
            <BotttomContainer>
                <LeftBox>
                    <LikeBox>
                        <LikeBtn src={Like}/>
                    </LikeBox>
                    <DislikeBox>
                        <DislikeBtn src={Dislike}/>
                    </DislikeBox>
                </LeftBox>
               <SideBox>
               <FavBox>
                    <FavBtn src={Fav}/>
                </FavBox>
               </SideBox>
                
            </BotttomContainer>
        </>
    );
}
const GalleryContaineer=styled.div`
    width:70%;
    height:40%;
    padding:80px;
    margin:40px auto;
    border:2px solid #000;
    box-shadow:10px 10px 10px 10px rgba(0,0,0,0.3);
`;
const GalleryImageItem=styled.div`
        width:100%;
`;
const BotttomContainer=styled.div`
    width:65%;
    margin:auto;
    display:flex;
    justify-content:space-between;
`;
const LikeBox=styled.div`
  
    width:100px;
    height:50px;
    margin-right:50px;
    &:hover{
        cursor:pointer;
        opacity:0.8;
    }
   
`;
const LeftBox=styled.div`
    display:flex;
`;
const LikeBtn=styled.img`
    width:120%;

`;
const DislikeBox=styled.div`
  
    width:100px;
    height:50px;
    &:hover{
        cursor:pointer;
        opacity:0.8;
    }
`;
const DislikeBtn=styled.img`
    width:130%;
`;
const SideBox=styled.div`
    width:80px;
    height:50px;
    &:hover{
        cursor:pointer;
        opacity:0.8;
    }
  
`;
const FavBtn=styled.img`
    width:120%;
`;
const FavBox=styled.div`
    margin-left:50%;
   

`;
