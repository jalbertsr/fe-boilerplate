import React from 'react';
import css from 'styled-jsx/css';

const style = css`
  h1 {
    color: red;
  }
`;

const App = () => (
  <>
    <h1>FE Boilerplate</h1>
    <style jsx>{style}</style>
  </>;

export default App;
