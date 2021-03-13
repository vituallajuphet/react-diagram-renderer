import React, { useState } from 'react';
import ReactFlow, { removeElements, addEdge } from 'react-flow-renderer';
import styled from 'styled-components'

const Header = () => {

  return (
    <StyledHeader className='header'>
      <div className="logo__link">
        <a href="#">DNA Visualizer - React Flow Renderer</a>
      </div>
    </StyledHeader>
  );

}

const StyledHeader = styled.header`
  display: flex;
  justify-content:flex-start;
  align-items:center;
  background-color:#65a8ff;
  padding:1rem;
  a{
    color:#fff;
    text-decoration:none;
  }
`

export default Header