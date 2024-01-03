/* eslint-disable testing-library/no-unnecessary-act */
import { render, fireEvent, screen, act } from "@testing-library/react";
import BookingsPage from "./BookingsPage";
import dayjs from "dayjs";
import userEvent from "@testing-library/user-event";

describe("BookingsPage", () => {
  test("Renders the BookingsPage heading", () => {
    render(<BookingsPage />);
    const headingElement = screen.getByText("RESERVE YOUR TABLE");
    expect(headingElement).toBeInTheDocument();
  });

  test("updates available times when a future date is selected", async () => {
    render(<BookingsPage />);

    // Test Date Input
    const expectedTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    const tomorrow = dayjs().add(1, "day").format("MM/DD/YYYY");

    const dateInput = screen.getAllByRole("textbox")[0];
    await act(async () => {
      fireEvent.change(dateInput, {
        target: {
          value: tomorrow,
        },
      });
    });

    expect(dateInput.value).toBe(tomorrow);

    // Test Time Input
    const [timeInput, guestsInput] = screen.getAllByRole("combobox");

    await act(async () => {
      userEvent.click(timeInput);
    });

    screen.getAllByRole("option").forEach((option, index) => {
      expect(option.textContent).toBe(expectedTimes[index]);
    });

    // Test Guests Input
    await act(async () => {
      userEvent.click(guestsInput);
    });

    screen.getAllByRole("option").forEach((option, index) => {
      expect(option.textContent).toBe(`${index + 1}`);
    });
  });

  // Other tests...
});
