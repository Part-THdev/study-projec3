import { useState } from "react";
import styled from "styled-components";

const Warpper = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;
const Title = styled.h1``;

function App() {
  return (
    <Warpper>
      <Title>Hello</Title>
    </Warpper>
  );
}

export default App;
