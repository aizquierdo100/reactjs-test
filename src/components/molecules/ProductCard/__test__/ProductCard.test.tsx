/**
 *
 * CategoryCard Test
 * @format
 *
 */

import { composeStories } from "@storybook/testing-react";
import * as Stories from "../ProductCard.stories";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

const { BaseProductCard } = composeStories(Stories);

describe("ProductCard", () => {
    test("renders BaseProductCard correctly", () => {
        const moreInfoHandler = jest.fn()
        const addCartHandler = jest.fn()
        const view = render(<BaseProductCard moreInfoHandler={moreInfoHandler} addCartHandler={addCartHandler} />);
        expect(view).toMatchSnapshot();
        const addMoreInfoButton = screen.getByText('More info')
        userEvent.click(addMoreInfoButton)
        expect(moreInfoHandler).toHaveBeenCalledTimes(1)
        const addToCart = screen.getByText('Add to cart')
        userEvent.click(addToCart)
        expect(addCartHandler).toHaveBeenCalledTimes(1)
    });
});
