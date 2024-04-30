import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


// test('button rendering', async() => {
//   render(<App />);
//   const buttonList = await screen.getByTestId('Button', {name: /SignUp/i});
//   console.log(buttonList);

//   expect(buttonList).toHaveLength(1);
// });


test("First Name Rendering", () => {
  render(<App />);
  const firstNameTest = screen.getByLabelText(/First Name/i);
  expect(firstNameTest).toBeInTheDocument();
});

test("Last Name Rendering Testing", () => {
  render(<App />);
  const lastNameTest = screen.getByLabelText(/Last Name/i);
  expect(lastNameTest).toBeInTheDocument();
});

test("Email Rendering", () => {
  render(<App />);
  const emailTest = screen.getByLabelText(/Email Address/i);
  expect(emailTest).toBeInTheDocument();
});

test("Password Rendering", () => {
  render(<App />);
  const passwordTest = screen.getByLabelText(/Password/i);
  expect(passwordTest).toBeInTheDocument();
});

test("SignUP button rendering", () => {
  render(<App />);
  const signUpButtonTest = screen.getByRole("button", { name: /Sign Up/i });
  expect(signUpButtonTest).toBeInTheDocument();
});



test ("already account label testing",()=>{
  render(<App/>);
  const linkTesting= screen.getByText(/Already have an Account/i);
  expect(linkTesting).toBeInTheDocument();
})



export {};