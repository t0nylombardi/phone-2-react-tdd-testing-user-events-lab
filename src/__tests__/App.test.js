import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import App from "../App";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "http://placebeard.it/1024");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/gotham city/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  render(<App />);

  expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
});

test("the form includes four checkboxes to select areas of interest", () => {
  render(<App />);

  expect(screen.getAllByRole("checkbox").length).toBe(4);
});

test("the checkboxes are initially unchecked", () => {
  const interests = [
    { name: "Eating", checked: false },
    { name: "Sleeping", checked: false },
    { name: "Coding", checked: false },
    { name: "Tacos", checked: false },
  ];

  render(<App />);

  interests.forEach((interest) => {
    expect(
      screen.getByRole("checkbox", { name: interest.name })
    ).not.toBeChecked();
  });
});

test("the form includes a Submit button", () => {
  render(<App />);

  expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  render(<App />);

  const fullName = screen.getByLabelText(/full name/i);
  const emailAddress = screen.getByLabelText(/email address/i);

  userEvent.type(fullName, "Fname Lname");
  userEvent.type(emailAddress, "fnamelname@email.com");

  expect(fullName).toHaveValue("Fname Lname");
  expect(emailAddress).toHaveValue("fnamelname@email.com");
});

test("checked status of checkboxes changes when user clicks them", () => {
  render(<App />);

  const interests = [
    { name: "Eating", checked: false },
    { name: "Sleeping", checked: false },
    { name: "Coding", checked: false },
    { name: "Tacos", checked: false },
  ];

  interests.forEach((interest) => {
    const checkbox = screen.getByRole("checkbox", { name: interest.name });

    userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });
});

test("a message is displayed when the user clicks the Submit button", () => {
  render(<App />);

  userEvent.type(screen.getByLabelText(/full name/i), "Fname Lname");
  userEvent.type(
    screen.getByLabelText(/email address/i),
    "fnamelname@email.com"
  );

  userEvent.click(screen.getByRole("checkbox", { name: /Eating/i }));
  userEvent.click(screen.getByRole("checkbox", { name: /Sleeping/i }));

  userEvent.click(screen.getByRole("button", { name: /submit/i }));

  expect(
    screen.getByText(
      "Thanks Fname Lname! You are signed up for these newsletters:"
    )
  ).toBeInTheDocument();
  expect(screen.getAllByRole("listitem").length).toBe(2);

  expect(screen.getByText(/eating/i)).toBeInTheDocument();
  expect(screen.getByText(/sleeping/i)).toBeInTheDocument();
});
