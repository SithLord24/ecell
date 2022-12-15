import React from 'react';
import styled from 'styled-components'


function IntroEvent(a) {
  return (
    <Section>
        <Content>
       
    <Title >
    {a.title}
    </Title>
    <Small>
        <p>{a.small}</p>
    </Small>
    <Big>
    <p>
    {a.big}
    </p>
    </Big>

    </Content>  
    
    </Section>
  )
}

const Section = styled. section`
margin-bottom: 10%;
`;

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
const Content= styled.div`
margin-left: auto;
margin-right: auto;
    width: 90%;
`;
const Small= styled.div`
color: #C1A57B;

    font-size: 1.1em;

`;

const Big=styled.div`

color: #C1A57B;
 font-size: 2em;

`;

export default IntroEvent
