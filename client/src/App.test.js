import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('welcome text loaded', () => {
    const github = tools.queryByTestId('github-players');
      expect(tools.queryByText(/github/)).toBeInTheDocument();
      expect(tools.queryByText(/fan/)).toBeInTheDocument();
      expect(tools.queryByText(/click/))not.toBeInTheDocument();
  });

})


