import React, { useState } from 'react';
import RightPannel from './Rightpannel';
import LeftPannel from './LeftPannel';
import SplitPane from 'react-split-pane';


function App(props: { text: string }) {
  return (
    <SplitPane split="vertical" minSize={0} maxSize={'260px'} defaultSize={'260px'}>
      <LeftPannel />
      <RightPannel />
    </SplitPane>
  );
};

export default App;
