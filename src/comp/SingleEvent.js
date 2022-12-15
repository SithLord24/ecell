import React from 'react'
import styled from 'styled-components'

function SingleEvent() {
  return (
    <div>
      <Box>
        <Image>

        </Image>
        <Data>
            <p>E-Summit is an annual flagship event of IIT Kanpur effectuated with the intention 
            entrepreneurial initiatives and activities in the campus to accomplish IIT Kanpur's mandate of nurturing India's future technopreneurs. Sharing of entrepreneurship endeavour and experience
            s, discussion of ideas and opportunities will be a profuse learning experience for the active leaders of entrepreneurship in the savant community who can then disperse these ideas further.
            </p>
        </Data>
      </Box>
    </div>
  )
}

const Box= styled.div`
    
height: 40rem;
width: 30rem;
border: 2px solid #C1A57B;
paddding: 2.7;

margin: 4rem;


display: flex;
flex-direction: column;

align-items: center;
      justify-content: center; 

`;

const Image= styled.div`
border: 2px solid #C1A57B;
margin-top: 6%;
margin-right: 2%;
margin-left: 2%;
margin-bottom: 2%;
height: 200px;
width: 200px;
`;

const Data= styled.div`
padding: 2%;
margin-bottom: 0%;
margin-right: 3%;
margin-left: 3%;
height: 30rem;
width: 25rem;
color: #C1A57B;
font-size: 1.5rem;
`;

export default SingleEvent
