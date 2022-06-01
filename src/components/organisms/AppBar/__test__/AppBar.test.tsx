/**
 *
 * CategoryCard Test
 * @format
 *
 */

import { composeStories } from "@storybook/testing-react";
import * as Stories from "../AppBar.stories";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

const { BaseAppBar } = composeStories(Stories);

describe("AppBar", () => {
    test("renders BaseTable correctly", () => {
        const view = render(<BaseAppBar />);
        expect(view).toMatchSnapshot();
        const home = screen.getByText('Home')
        userEvent.click(home)
        const homeAfterClick = screen.getByText('Home')
        expect(homeAfterClick).toHaveClass('active')

        const cart = screen.getByText('Cart')
        userEvent.click(cart)
        const cartAfterClick = screen.getByText('Cart')
        expect(cartAfterClick).toHaveClass('active')
        expect(homeAfterClick).not.toHaveClass('active')
    });
});
