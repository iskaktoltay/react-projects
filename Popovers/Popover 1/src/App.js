import React from 'react';
import Popover from './components/Popover';
import styled from 'styled-components';

const App = () => {
  return (
    <div style={{marginLeft: '45vw', marginTop: '45vh'}}>
      <Popover>
        <Popover.Trigger>
          <Button>Toggle Popover</Button>
        </Popover.Trigger>
        <Popover.Content>
          <h3 style={{marginTop: '-2px'}}>Popover Content</h3>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </Popover.Content>
      </Popover>
    </div>
  );
};

const Button = styled.button`
  background-color: #202020;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  width: 300px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    background-color: #737373;
  }
`;

export default App;