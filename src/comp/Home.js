import React from 'react'
import styled from 'styled-components'
import home from '/Users/hritul/DeveloperTools/WebDev/ecell/src/asset/home.png';

const Section= styled.section`
background: url(${home}) no-repeat center;
  min-height: 100vh;
  background-size: cover;
  position: relative;
  
  
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          .h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    
        }
`;

function Home() {
  return (
    <Section>
        
      <Content>
          <Title>
            <Change >Entrepreneurship Cell
            </Change>
            <Change >
                LNMIIT
             </Change>
          </Title>  
          </Content>
         
    </Section>
  )
}

const Content= styled.div`
    display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; 
      width: 90%;
      color: #ceefff;
      
      margin-left:auto;
      margin-right:auto;
      padding-left: 3rem;
`;

const Change= styled.h1`
font-size: 5.8rem;
line-height: 6rem;
margin: 1rem;
text-shadow: 3px 3px 6px #000000;

`;

const Title= styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
      align-items: center;
      justify-content: center; 
    margin-top: 13rem;

`;

export default Home
