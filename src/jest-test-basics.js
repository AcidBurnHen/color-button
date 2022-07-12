import { render, screen } from '@testing-library/react';
import App from './App';

// Test name that indentifies the test 
test('renders learn react link', () => {
  // Renders the component to the virtual DOM for testing
  render(<App />);
  // I can access elements from the DOM by using the screen method
  const linkElement = screen.getByRole("link", {name: /learn react/i});
  // Assertion - they start with expect(argument) and are followed by a matcher that runs tests against expected argument
  expect(linkElement).toBeInTheDocument();
});

// As long as there are no errors the test can pass
test("empty", () => {
  // I can fail the test by throwing a new error with "throw new Error("test failed")""
  // but we usually need to run jest assertions 
})
