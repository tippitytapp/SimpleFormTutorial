import React from "react";
import styled from "styled-components";

function Card(props) {
  let StyledDiv = styled.div`
    border: 1px solid black;
    width: 30%;
  `;
  const { person } = props;

  return (
    <StyledDiv className="card">
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
    </StyledDiv>
  );
}

export default Card;
