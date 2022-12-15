import React, { useState } from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';


import a from '/Users/hritul/DeveloperTools/WebDev/ecell/src/asset/oldPic/1.jpg';
import b from '/Users/hritul/DeveloperTools/WebDev/ecell/src/asset/oldPic/2.jpg';
import c from '/Users/hritul/DeveloperTools/WebDev/ecell/src/asset/oldPic/3.jpg';
import d from '/Users/hritul/DeveloperTools/WebDev/ecell/src/asset/oldPic/4.jpg';
import e from '/Users/hritul/DeveloperTools/WebDev/ecell/src/asset/oldPic/5.jpg';
import f from '/Users/hritul/DeveloperTools/WebDev/ecell/src/asset/oldPic/6.jpg';
import g from '/Users/hritul/DeveloperTools/WebDev/ecell/src/asset/oldPic/7.jpg';
import h from '/Users/hritul/DeveloperTools/WebDev/ecell/src/asset/oldPic/8.jpg';
import i from '/Users/hritul/DeveloperTools/WebDev/ecell/src/asset/oldPic/9.jpg';
import j from '/Users/hritul/DeveloperTools/WebDev/ecell/src/asset/oldPic/10.jpg';
import k from '/Users/hritul/DeveloperTools/WebDev/ecell/src/asset/oldPic/11.jpg';
import l from '/Users/hritul/DeveloperTools/WebDev/ecell/src/asset/oldPic/12.jpg';
import styled from 'styled-components';

const images=[a,b,c,d,e,f,g,h,i,j,k,l];
function GalleryBox() {

    const [data,setData]= useState({img:'', i:0});

    const viewImage = (img,i)=>{
            setData({img,i});
    }
    const imgAction = (action) =>{
        let i = data.i;
        if(action === 'next-img' ){
            setData({img: images[i+1],i:(i+1)%images.length})
        }
        if (action === 'previous-img'){
                setData({img: images[i - 1], i: (i-1)%images.length})};
        
        if(!action){
            setData({img:'',i:0});
        } }

        const gal={
            title:"Gallery",
            small:"",
            big:""
        }
    


  return (
  <>

            {data.img &&
                <div style={{
                    width:'100%',
                    height:'100vh',
                    background: 'black',
                    position: 'fixed',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                    

                }}>
                    <button onClick={()=>imgAction()} style={{position: "absolute", top: 30, right:30}}><CloseIcon variant="outline"/></button>
                    
                    <button onClick={()=>imgAction('previous-img')}><ArrowBackIosIcon variant="outline"/></button>
                    <img src={data.img} style={{width:'auto', maxWidth:'90%', maxHeight:'90%'}}/>
                    <button onClick={()=>imgAction('next-img')}><ArrowForwardIosIcon variant="outline"/></button>


                </div>


            }
             
    <Cake>
    <Title >
    Gallery
    </Title>
   
        <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter='10px'>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block", cursor:"pointer", border: "6px solid transparent",
                            padding: "3px",
                            margin: "2px",
                            borderColor: "#C1A57B", 
                            maxWidth: "400px",
                            maxHeight: "400px;"
                        }}
                            
                            alt=""
                            onClick={()=> viewImage (image, i)}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
      
    </Cake>

    </>
  )
}
const Title= styled.h1`

    font-size: 4em;
    font-weight: 600;
    color: #C1A57B;
    opacity: 80%;
    margin-left:auto,
    

    position: absolute;
    top: 0rem;
    left: 5%; 
    z-index: 5;
`;

const Cake= styled.section`
padding:10px;
margin-left: auto;
margin-right:auto;
background: black;
width: 95%;

`


export default GalleryBox
