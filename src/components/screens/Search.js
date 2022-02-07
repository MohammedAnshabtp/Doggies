import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Axios from "axios";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from'react-bootstrap/Dropdown';
import {Helmet} from "react-helmet";
function Search() {
    const [breed, setBreed] = useState([]);
    useEffect(() => {
        var URL = "https://api.thedogapi.com/v1/breeds";
        Axios.get(URL)
            .then((res) => {
                setBreed(res.data);
                console.log(breed);
            })
            .catch(function(error){
                console.log("error");
            });
    },);
    return (
        <>
         <Helmet>
            <title>Doggies | Search</title>
            <meta name="Doggies" content="Search" />
        </Helmet>
            <Navbar />
            <Spotlight>
                <LeftColumn>

                <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    Order
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="#/action-2">Random</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Desc</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Asc</Dropdown.Item>
                    </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    Type
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="#/action-2">All</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Static</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Animated</Dropdown.Item>
                    </Dropdown.Menu>
            </Dropdown>         
             <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    Category
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="#/action-1" active>
                      None
                    </Dropdown.Item>
                  
                    </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                   Breed
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="#/action-1" active>
                       Breed
                    </Dropdown.Item>
                    {breed.map(Items=>(<Dropdown.Item href="#/action-2">{Items.name}</Dropdown.Item>))}
                    </Dropdown.Menu>
            </Dropdown>
        </LeftColumn>
                </Spotlight>

                <PhotoBox>
                    {breed.map((bred) =>(
                        <ImageBox>
                            <ImageTag src={bred.image.url} alt="sfd"/>
                        </ImageBox>
                    ))}
                </PhotoBox>
        </>
    );
}
export default Search;

const Spotlight=styled.div`
    width:80%;
    display:flex;
    margin:0 auto;
`;
const LeftColumn=styled.div`
   width:100%;
   display:flex;
    margin-top:15px;
   justify-content:space-between;
 
`;
const PhotoBox=styled.div`
  display: grid;
  grid-gap: 40px 5px;
  grid-column-gap:5px;
  grid-template-columns: auto auto auto auto;
  background-color: #fff;
  padding: 30px 60px;
  margin:0 auto;
`;
const ImageBox= styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  /* padding: 100px; */
  font-size: 30px;
  text-align: center;
  width:50%;
  align-items:center;
  margin:auto;
`;
const ImageTag = styled.img`
    display: block;
    width: 100%;
    margin: 0 auto;
`;