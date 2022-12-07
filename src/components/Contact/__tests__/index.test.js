import { render, cleanup, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ContactForm from "..";

afterEach(cleanup);

describe("ContactForm is rendering", () => {
  it("renders", () => {
    render(<ContactForm />);
  });

  it("renders fragments", () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("h1 text is visible", () => {
  it("inserts text into the h1", () => {
    const { getByTestId } = render(<ContactForm />);
    expect(getByTestId("contact")).toHaveTextContent("Contact me");
  });
});

describe("submit button text is visible", () => {
  it("inserts text into the button", () => {
    const { getByTestId } = render(<ContactForm />);
    expect(getByTestId("submit")).toHaveTextContent("Submit");
  });
});
