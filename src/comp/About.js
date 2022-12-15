import React from 'react'
 import styled from 'styled-components'

const Section = styled. section`
background: #FAF8F1;
position: relative; 
min-height: 70vh;
overflow: hidden;
width: 70vm;

dislay: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title= styled.h1`

    font-size: 4em;
    font-weight: 600;
    color: #000;
    opacity: 80%;
    margin-left:auto,
    

    position: absolute;
    top: 0rem;
    left: 5%; 
    z-index: 5;
`;
const Content= styled.div`
margin-left: auto;
margin-right: auto;
margin-top: auto;
margin-bottom:auto;
    width: 90%;
`;
const Small= styled.div`
color: #000;

    font-size: 1.3em;

`;

const Big=styled.div`

color: #000;
 font-size: 2em;

`;


const About = () => { return (
<Section>
    <Content>
   
<Title >
About Us
</Title>
<Small>
    <p>"If people haven't laughed at your dreams, then you aren't dreaming big enough, just keep pushing forward."  ~~
</p>
</Small>
<Big>
<p>
E-Cell, LNMIIT is a group of enthusiastic and highly motivated students of LNMIIT, Jaipur, who are dedicated to instilling an entrepreneurial spirit in the next generation. As one of the most active E-Cells in Jaipur, we participate in Entrepreneurship activities both in and outside of Jaipur regularly.

</p>
<hr/>
</Big>

</Content>  
</Section>
)}
export default About