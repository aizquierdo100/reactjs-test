/**
 *
 * CategoryCard Test
 * @format
 *
 */

import { composeStories } from "@storybook/testing-react";
import * as Stories from "../SmallCartBox.stories";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

const { BaseSmallCartBox } = composeStories(Stories);

describe("SmallCartBox", () => {
    test("renders BaseSmallCartBox correctly", () => {
        const increaseHandler = jest.fn()
        const decreaseHandler = jest.fn()
        const addToCartHandler = jest.fn()
        const view = render(<BaseSmallCartBox increaseHandler={increaseHandler} decreaseHandler={decreaseHandler} addToCartHandler={addToCartHandler} />);
        const decreaseButton = screen.getAllByRole('button')[0]
        const increasButton = screen.getAllByRole('button')[1]
        const addToCartButton = screen.getAllByRole('button')[2]
        userEvent.click(decreaseButton)
        expect(decreaseHandler).toHaveBeenCalledTimes(1)
        userEvent.click(increasButton)
        expect(increaseHandler).toHaveBeenCalledTimes(1)
        userEvent.click(addToCartButton)
        expect(addToCartHandler).toHaveBeenCalledTimes(1)
        expect(view).toMatchSnapshot();
    });
});
