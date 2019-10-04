import React from 'react';
import ReactDOM from 'react-dom';
import FanForm from './FanForm';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<FanForm/>);
});

describe('Form component', () => {

  it('Submit button works', () => {
    const signupButton = tools.queryByTestId('signup');
    
    rtl.fireEvent.click(submit);
    expect(tools.queryByText(/alert/).toBeInTheDocument();
  });

  it('Form reject number for name', () => {
    const FormInput = tools.queryByTestId('form-input');

    expect(rtl.FormInput(1, 1, 1)).toThrow();
  })

})




