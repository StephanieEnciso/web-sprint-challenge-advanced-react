import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    const header = screen.findByText(/checkout form/i);
    expect(header).toMatchObject(/checkout form/i);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const state = screen.getByLabelText(/state/i);
    const zip = screen.getByLabelText(/zip/i);
    const button = screen.getByRole('button');

    act(() => {

        userEvent.type(firstName, 'Stephanie');
        userEvent.type(lastName, 'Enciso');
        userEvent.type(address, '17742 E 106th St N');
        userEvent.type(city, 'Owasso');
        userEvent.type(state, 'OK');
        userEvent.type(zip, '74055');

        
        userEvent.click(button);
    });

    const newOrder =  screen.findByText(/Stephanie/i);
    expect(newOrder).toMatchObject(/Stephanie/i);
});
