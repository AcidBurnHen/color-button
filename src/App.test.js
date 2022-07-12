import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // Renders the component to the virtual DOM
  render(<App />);
  // I can access elements from the DOMww by using the screen method
  const linkElement = screen.getByText("Learn React");
  // Assertion - they start with expect(argument) and are followed by a matcher that runs tests against expected argument
  expect(linkElement).toBeInTheDocument();
});
