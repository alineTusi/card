import styled from "@emotion/styled";

export const CardContainer = styled.div`
  display: flex;
  width: 750px;
  background-color: white;
  margin: auto;
  margin-top: 5em;
  border-radius: 1em;
`;

export const CardUserImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 40px;
  & img {
    border-top-left-radius: 1em;
    border-bottom-left-radius: 1em;
  }
`;

export const CardUserTextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 14em;
  text-align: justify;
  width: 60%;
`;

// export const CardUserContent = styled.div`
//   width: 100%;
//   margin-left: 10px;
//   margin-right: 10px;
// `;

// export const CardUserInfo = styled.div`
//   width: 60%;
//   display: flex;
//   justify-content: space-between;
//   justify-content: flex-start;
// `;

export const CardUserInfoContainer = styled.span`
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & ul {
    list-style-type: none;
  }
  & button {
    border: none;
    cursor: pointer;
    background-color: white;
  }
`;

export const CardUserInfoP = styled.div`
  display: flex;
  align-items: center;
  flex-direction:row;
`;

export const CardUserIcon = styled.img`
  border-radius: 50px;
  width: 30px;
 
  
`;

export const CardUserInfoName = styled.li`
  font-weight: bold;
  list-style-type: none;
`;

export const CardUserInfoDate = styled.li`
  list-style-type: none;
`;




