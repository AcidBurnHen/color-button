import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color and text', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /Change to blue/i });

  // expect the bg to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  // click button
  fireEvent.click(colorButton);

  // expect the bg to be blue after click
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // expect the text to change after click
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);

  // check that the button starts out enabled
  const button = screen.getByRole('button', { name: /Change to blue/i });
  expect(button).toBeEnabled();

  // check that the checkbox starts unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Checkbox disables button on first click and enables on second click', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox');
  const button = screen.getByRole('button');

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
})
