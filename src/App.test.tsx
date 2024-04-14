import { render, screen } from "@testing-library/react";

import { test, expect } from "vitest";
import App from "./App";

test("jomiloju", () => {
  render(<App />);

  const textEl = screen.getByText("App");

  expect(textEl).toBeDefined();
});
