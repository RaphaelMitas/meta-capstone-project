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

    /*
     * TEST BOOKING INFORMATION
     */
    // Test Date Input
    const expectedTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    const tomorrow = dayjs().add(1, "day");

    const dateInput = screen.getAllByRole("textbox")[0];
    await act(async () => {
      fireEvent.change(dateInput, {
        target: {
          value: tomorrow.format("MM/DD/YYYY"),
        },
      });
    });

    expect(dateInput.value).toBe(tomorrow.format("MM/DD/YYYY"));

    // Test Time Input
    const [timeInput, guestsInput] = screen.getAllByRole("combobox");

    await act(async () => {
      userEvent.click(timeInput);
    });

    const timeOptions = screen.getAllByRole("option").map((option, index) => {
      expect(option.textContent).toBe(expectedTimes[index]);
      return option;
    });

    const selectedTime = timeOptions[0].textContent;
    await act(async () => {
      userEvent.click(timeOptions[0]);
    });

    // Test Guests Input
    await act(async () => {
      userEvent.click(guestsInput);
    });

    const guestsOptions = screen.getAllByRole("option").map((option, index) => {
      expect(option.textContent).toBe(`${index + 1}`);
      return option;
    });

    const selectedGuests = guestsOptions[0].textContent;
    await act(async () => {
      userEvent.click(guestsOptions[0]);
    });

    // Test Next Button
    const nextButton = screen.getByRole("button", { name: "Next" });
    expect(nextButton).toBeInTheDocument();

    await act(async () => {
      userEvent.click(nextButton);
    });

    /*
     * TEST CONTACT INFORMATION
     */

    const [firstNameInput, lastNameInput, emailInput, phoneInput] =
      screen.getAllByRole("textbox");

    expect(firstNameInput.id).toBe("firstName");
    expect(lastNameInput.id).toBe("lastName");
    expect(emailInput.id).toBe("email");
    expect(phoneInput.id).toBe("phone");

    // Test Inputs
    await act(async () => {
      fireEvent.change(firstNameInput, {
        target: {
          value: "John",
        },
      });
      fireEvent.change(lastNameInput, {
        target: {
          value: "Doe",
        },
      });
      fireEvent.change(emailInput, {
        target: {
          value: "john.doe@email.com",
        },
      });
      fireEvent.change(phoneInput, {
        target: {
          value: "1234567890",
        },
      });
    });

    expect(firstNameInput.value).toBe("John");
    expect(lastNameInput.value).toBe("Doe");
    expect(emailInput.value).toBe("john.doe@email.com");
    expect(phoneInput.value).toBe("1234567890");

    // Test Next Button
    await act(async () => {
      userEvent.click(nextButton);
    });

    /*
     * TEST RESERVATION SUMMARY
     */
    const reservationSummary = screen.getByText("Reservation Summary");
    expect(reservationSummary).toBeInTheDocument();

    expect(
      screen.getByText(
        `Date and Time: ${tomorrow.format("MMMM D, YYYY")} at ${selectedTime}`
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Number of Guests: ${selectedGuests}`)
    ).toBeInTheDocument();
    expect(screen.getByText("Name: John Doe")).toBeInTheDocument();
    expect(screen.getByText("Email: john.doe@email.com")).toBeInTheDocument();
    expect(screen.getByText("Phone: 1234567890")).toBeInTheDocument();

    const confirmButton = screen.getByRole("button", { name: "Confirm" });
    // Test Submit Button
    await act(async () => {
      userEvent.click(confirmButton);
    });
  });

  // Other tests...
});
