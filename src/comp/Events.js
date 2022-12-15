import React from 'react';
import styled from 'styled-components'
import IntroEvent from './IntroEvent';
import SingleEvent from './SingleEvent';

const prop={
    title:"Events",
    small:"\"If people haven\'t laughed at your dreams, then you aren\'t dreaming big enough, just keep pushing forward.\"  ~~",
    big:" E-Cell, LNMIIT is a group of enthusiastic and highly motivated students of LNMIIT, Jaipur, who are dedicated to instilling an entrepreneurial spirit in the next generation. As one of the most active E-Cells in Jaipur, we participate in Entrepreneurship activities both in and outside of Jaipur regularly."

}

const Events = () => {
    return (
        <Section>
        <IntroEvent {...prop}/>
        <TwoBox>
        <SingleEvent/><SingleEvent/></TwoBox>
        <TwoBox>
        <SingleEvent/>
        </TwoBox>
        <TwoBox>
        <SingleEvent/><SingleEvent/></TwoBox>
        <TwoBox>
        <SingleEvent/>
        </TwoBox>
        <TwoBox>
        <SingleEvent/><SingleEvent/></TwoBox>
        <TwoBox>
        <SingleEvent/>
        </TwoBox>
        
        </Section>
    )
  }

  const Section = styled. section`
background: #000;
position: relative; 
min-height: 90vh;
overflow: hidden;
width: 70vm;

dislay: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TwoBox= styled.div`
display:flex;
justify-content: center;
align-item: center;
`;

export default Events

