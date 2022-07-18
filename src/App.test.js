import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from "./App";

test('button has correct initial color and text', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: "Change to Midnight Blue" });

  // expect the bg to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  // click button
  fireEvent.click(colorButton);

  // expect the bg to be blue after click
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  // expect the text to change after click
  expect(colorButton.textContent).toBe('Change to Medium Violet Red');
});

test('initial conditions', () => {
  render(<App />);

  // check that the button starts out enabled
  const button = screen.getByRole('button', { name: "Change to Midnight Blue" });
  expect(button).toBeEnabled();

  // check that the checkbox starts unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Checkbox disables button on first click and enables on second click', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: /Disable button/i });
  const button = screen.getByRole('button', { name: "Change to Midnight Blue" });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test('Disabled button has gray background and reverts to red', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: /Disable button/i });
  const button = screen.getByRole('button', { name: "Change to Midnight Blue" });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle('background-color: gray');

  fireEvent.click(checkbox);
  expect(button).toHaveStyle('background-color: MediumVioletRed');
});

test('Clicked disabled button has gray background and reverts to blue', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  const button = screen.getByRole('button', {name: 'Change to Midnight Blue'});

  fireEvent.click(button);

  fireEvent.click(checkbox);
  expect(button).toHaveStyle('background-color: gray')

  fireEvent.click(checkbox);
  expect(button).toHaveStyle('background-color: MidnightBlue')
})

describe('Spaces before camel case capital letters', () => {
  test('works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
})