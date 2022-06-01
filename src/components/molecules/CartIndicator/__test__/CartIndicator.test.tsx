/**
 *
 * CategoryCard Test
 * @format
 *
 */

import { composeStories } from "@storybook/testing-react";
import * as Stories from "../CartIndicator.stories";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

const { BaseCartIndicator } = composeStories(Stories);

describe("CartIndicator", () => {
    test("renders CartIndicator correctly", () => {
        const view = render(<BaseCartIndicator />);
        const increaseButton = screen.getAllByRole('button')[1]
        userEvent.click(increaseButton)
        const value = screen.getByText('1')
        expect(value).toBeInTheDocument();
        const decreaseButton = screen.getAllByRole('button')[0]
        userEvent.click(decreaseButton)
        const valueAfterClick = screen.getByText('0')
        expect(valueAfterClick).toBeInTheDocument();
        expect(view).toMatchSnapshot();
    });
});
