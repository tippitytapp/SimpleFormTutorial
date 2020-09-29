import React, { useState } from "react";
import "./styles.css";
import Card from "./components/Card";
import { people } from "./data/people";
import styled from "styled-components";
import AddForm from "./components/AddForm";

export default function App() {
  const [names, setNames] = useState(people);

  const AppDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;
  return (
    <>
      <AddForm names={names} setNames={setNames} />
      <AppDiv className="App">
        {names.map((name) => {
          return <Card key={Math.random()} person={name} />;
        })}
      </AppDiv>
    </>
  );
}
