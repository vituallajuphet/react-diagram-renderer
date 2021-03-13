import React from 'react';
import WorkBench from './pages/Workbench/'
import WorkBench2 from './pages/WorkBench2'
import Header from './Components/Header'
import styled from 'styled-components'

function App() {
  return (
    <>
      <Header />
      <StyledAppContainer>
        <WorkBench2 />
      </StyledAppContainer>
    </>
  );
}

const StyledAppContainer = styled.div`

`

export default App;
