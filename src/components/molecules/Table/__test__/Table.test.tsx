/**
 *
 * CategoryCard Test
 * @format
 *
 */

import { composeStories } from "@storybook/testing-react";
import * as Stories from "../Table.stories";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

const { BaseTable } = composeStories(Stories);

describe("Table", () => {
    test("renders BaseTable correctly", () => {
        const view = render(<BaseTable />);
        expect(view).toMatchSnapshot();
        const increaseQuantity = screen.getAllByRole('button')[1]
        const decreaseQuantity = screen.getAllByRole('button')[0]
        userEvent.click(increaseQuantity)
        const price = screen.getByText('200,000 VND')
        expect(price).toBeInTheDocument()
        userEvent.click(decreaseQuantity)
        const current_price = screen.getByText('100,000 VND')
        expect(current_price).toBeInTheDocument()
    });
});
