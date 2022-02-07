import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Zoom } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import  Navbar from'./Navbar.js';


export default function Breeds() {
 const [breeds, setBreeds] = useState([]);
 const [beds,setBeds]=useState([]);
 const [isOpen, setIsOpen] = useState(false);
 const [selectedOption, setSelectedOption] = useState("");
 const [breedData,setBreedData]=useState({});
 const [oneto,setOneto]=useState([]);
 const ZoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true,
  };

 const toggling = () => setIsOpen(!isOpen);

console.log(breedData);
console.log(selectedOption)
    useEffect(() =>{
        axios.get("https://api.thedogapi.com/v1/breeds")
            .then((response)=>{
                setBeds(response.data);
                setBreeds(response.data,".......");
                console.log(response.data)
              
            })
            .catch(function (error) {
                console.log(error);
            });
          
        },[] );
        console.log(selectedOption);
        const Slide = () => {
            return (
              <div className="slide-container">
                <Zoom {...ZoomOutProperties}>
                  {beds.map((each, index) => (
                    <img key={index} style={{ width: "100%", height:"600px" }} src={each.image.url}  alt=''/>
                  ))}
                </Zoom>

              </div>
            );
          };
          useEffect(()=>{
            axios.get(`https://api.TheDogAPI.com/v1/images/search?breed_ids=${selectedOption}`)
            .then(function(response){
                setBreedData(response.data);
                console.log(setBreedData);
                breedData.map((item)=>(
                setOneto(item.breeds)
            ))
            });
          },[selectedOption]);
          console.log(oneto);
          console.log(breedData);
          const getSelected = ()=>{
            return oneto.map((item)=>(
              <BreedDetails>
                  <BreedName>{item.name}</BreedName>
                  <BreedIndex>{item.id}</BreedIndex>  
                  <BreedBehave>{item.temperament}</BreedBehave>
                  <BreedPLace>{item.origin}</BreedPLace>
                  <BreedWeight>kg</BreedWeight>
                  <BreedMetric>cm at the withers</BreedMetric>
                  <BreedLifeSpan>{item.life_span} years average life span</BreedLifeSpan> 
              </BreedDetails>
            ));
          };
    return (
        <>
        <div>
            <Navbar/>
        </div>
                <Hed>Find the Breeds here....</Hed>
                <DropDownContainer>
                    <DropDownHeader onClick={toggling}>
                      Breeds
                      </DropDownHeader>
                    {isOpen && (
                    <DropDownListContainer>
                        <DropDownList>
                            
                            {breeds.map((breed)=>(
                              <ListItem onClick={()=>
                                {setSelectedOption(breed.id);
                              }}
                              >
                                {breed.name}
                              </ListItem>
                            ))}
                        </DropDownList>
                    </DropDownListContainer>
                    )}
                </DropDownContainer>
                <ImageContainer>
                    <ImageSilders>
                        <Slide/>
                    </ImageSilders>
                    {getSelected()}
                    </ImageContainer>              
                </>
          );
}
const Hed =styled.h1`
    text-align:center;
    font-weight:500;
    margin-bottom:15px;
    margin-top:15px;
`;
const DropDownContainer = styled.div`
    width:10.5em;
    margin:0 auto;
`;
const DropDownHeader = styled.div`
    margin-bottom:0.8em;
    padding: 0.4em 18em 0.4em 5em;
    box-shadow:15px 5px 15px rgba(0,0,0,0.3);
    font-weight:500;
    font-size:1.3rem;
    color:#3faffa;
    background:#fff;
    margin-left:-100%;
    cursor: pointer;
`;
const DropDownListContainer = styled.div`

`;
const DropDownList =styled.ul`
    margin-left:-100%;
    padding:0.4em 22em 0.4em 5em;
    height:200px;
    text-align:center;
    padding-left:1em;
    background:#fff;
    border:2px solid #e5e5e5;
    box-sizing:border-box;
    color: #3f3f3f;
    font-size:1.3rem;
    font-weight:500;
    overflow-y:scroll;
    overflow-x:hidden;
    list-style:none;
    &:first-child{
        padding-top:0.8em;
    }
    
`;
const ListItem = styled.li`
    list-style:none;
    margin-bottom:0.8em;
    cursor : pointer;
    &:hover{
      
    }
`;
const ImageContainer=styled.div`
    border:2px solid #fff;
    align-items:center;
    margin:auto;
    padding:30px 50px;
    width:55%;
    box-shadow: 20px 15px 20px 15px rgba(0, 0, 0, 0.4);
    background-color:#fff;
`;
const ImageSilders = styled.div`
    width:100%;
    margin:0 auto;
    padding:10px;
`;
const BreedDetails =styled.ul`
    box-shadow: -2px -2px 18px 0 rgba(0, 0, 0, 0.4);   
    margin:0 auto;
    text-align: center;
    font-family: arial;
`;
const BreedName=styled.h2`
    font-weight:bold;
    font-size:45px;
`;
const BreedIndex= styled.h3``;
const BreedBehave= styled.p`
  color: grey;
  font-size: 22px;
`;
const BreedPLace= styled.p`
  color: grey;
  font-size: 22px;
`;
const BreedWeight= styled.p`
  color: grey;
  font-size: 22px;
`;
const BreedMetric= styled.p`
  color: grey;
  font-size: 22px;
`;
const BreedLifeSpan= styled.p`
  color: grey;
  font-size: 22px;
`;