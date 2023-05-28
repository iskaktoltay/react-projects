/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const Popover = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState({width: 0, height: 0});

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const setTriggerSize = (width, height) => {
    setSize({width: width, height: height});
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (child.type === Trigger) {
          return React.cloneElement(
            child,
            { onMouseEnter: handleToggle,
              onMouseLeave: handleToggle,
              size: size,
              setSize: setTriggerSize
            }
          );
        }
        if (child.type === Content && isOpen) {
          return React.cloneElement(child, { size: size });
        }
        return null;
      })}
    </div>
  );
};

const Trigger = ({ children, ...rest }) => {
  const triggerRef = useRef(null);
  const {size, setSize} = rest

  useEffect(() => {
    const childNode = triggerRef.current.children[0];
    if (childNode) {
      const { width, height } = childNode.getBoundingClientRect();
      setSize(width, height)
    }
  }, [size]);

  return (
    <TriggerDiv
      ref={triggerRef}
      width={size.width}
      height={size.height}
      {...rest}
    >
      {children}
    </TriggerDiv>
  );
};

const Content = ({ children, ...rest }) => {
  const {size} = rest;
  return (
    <ContentDiv width={size.width} height={size.height}>
      <PopoverArrow />
      {children}
    </ContentDiv>
  );
};

Popover.Trigger = Trigger;
Popover.Content = Content;

const TriggerDiv = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

const ContentDiv = styled.div`
  width: 500px;
  height: 100%;
  position: relative;
  top: 12px;
  left: ${({ width }) => width/2}px;
  transform: translateX(-50%);
  background-color: white;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const PopoverArrow = styled.div`
  position: absolute;
  top: -7px;
  left: 49%;
  transform: translateX(-50%);
  width: 12px;
  height: 12px;
  background-color: white;
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
  transform: rotate(45deg);
`;

export default Popover;