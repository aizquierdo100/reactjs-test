/**
 *
 * CategoryCard Test
 * @format
 *
 */

import { composeStories } from "@storybook/testing-react";
import * as Stories from "../Navigation.stories";
import { render, screen } from "@testing-library/react";

const { BaseNavigation } = composeStories(Stories);

describe("Navigation", () => {
    test("renders BaseNavigation correctly", () => {
        const view = render(<BaseNavigation />);
        const home = screen.getByText('Home')
        expect(home).toHaveAttribute('href', '/')
        const cart = screen.getByText('Cart')
        expect(cart).toHaveAttribute('href', '/cart')
        expect(view).toMatchSnapshot();
    });
});
