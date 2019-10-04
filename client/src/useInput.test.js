import React from 'react';
import ReactDOM from 'react-dom';
import useInput from './useInput';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<useInput />);
});

it('initalValue has info', () => {
  initialValue.length > 0;
  })