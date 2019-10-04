import React from 'react';
import ReactDOM from 'react-dom';
import useInput from './useInput';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('initial value not empty', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});