import React, { useState } from 'react';
import ReactFlow, { removeElements, addEdge, Controls, MiniMap, Background } from 'react-flow-renderer';
import styled from 'styled-components'

const initialElements: any[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
  },
  {
    id: '2',
    type: 'default',
    target: '3',
    data: { label: 'Input Node' },
    position: { x: 10, y: 25 },
  },
  {
    id: '3',
    data: { label: 'Another Node' },
    position: { x: 100, y: 125 },
  },
];

const WorkBench = () => {

  const [elms, setElements] = useState(initialElements);
  const [elemName, setName] = useState("")

  const onElementsRemove = (elementsToRemove: any) => {
    const elm = (els: any[]) => removeElements(elementsToRemove, els)
    setElements(elm);
  }

  const addNodes = () => {
    const newElem = ((e: any[]) => [...e, {
      id: (e.length + 1).toString(),
      data: { label: elemName },
      type: 'output',
      position: { x: 10, y: 30 }
    }])
    setElements(newElem)
  }

  const onConnect = (params: any) => setElements((els: any) => addEdge(params, els));
  const onLoad = (reactFlowInstance: any) => reactFlowInstance.fitView();

  return (
    <StyleComponent>

      <input
        type="text"
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => addNodes()} >Add Node</button>

      <ReactFlow
        elements={elms}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        onLoad={onLoad}
        deleteKeyCode={46} /* 'delete'-key */
      >
        <Background
          color='#222'
          gap={16}
        />
        <MiniMap
          nodeColor={(n: any) => {
            if (n.type == 'input') return 'blue';
            return '#fff'
          }}
        />
        <Controls />
      </ReactFlow>
    </StyleComponent>
  );

}

const StyleComponent = styled.div`
  height:500px;
  border:1px solid #c7c0c0;
`

export default WorkBench