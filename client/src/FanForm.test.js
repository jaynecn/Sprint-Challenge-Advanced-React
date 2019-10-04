import React from 'react';
import ReactDOM from 'react-dom';
import FanForm from './FanForm';
import * as rtl from '@testing-library/react';

let tools;

beforeEach(() => {
  rtl.cleanup();
  tool = rtl.render(<FanForm />);
});


describe('Form component', () => {

  it('Submit button works', () => {
    const signupButton = tools.queryByTestId('signup');
    
    rtl.fireEvent.click(signupButton);
    expect(tools.queryByText(/signup/)).toBeInTheDocument();
    expect(tools.queryByText(/details/)).not.toBeInTheDocument();
  });

  it('Rejects number for name', () => {
    const FormInput = tools.queryByTestId('form-input');
    expect(FormInput(1, 1, 1)).toThrow();
  })

  it('Email has @ sign', () => {
    const emailInput = tools.queryByTestId('email-input');
    expect(emailInput).toContain('@');
  })

})




