/**
 *
 * CategoryCard Test
 * @format
 *
 */

import { composeStories } from "@storybook/testing-react";
import * as Stories from "../LargeCartBox.stories";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

const { BaseLargeCartBox } = composeStories(Stories);

describe("LargeCartBox", () => {
    test("renders BaseLargeCartBox correctly", () => {
        const increaseHandler = jest.fn()
        const decreaseHandler = jest.fn()
        const view = render(<BaseLargeCartBox increaseHandler={increaseHandler} decreaseHandler={decreaseHandler} />);
        const decreaseButton = screen.getAllByRole('button')[0]
        const increasButton = screen.getAllByRole('button')[1]
        userEvent.click(decreaseButton)
        expect(decreaseHandler).toHaveBeenCalledTimes(1)
        userEvent.click(increasButton)
        expect(increaseHandler).toHaveBeenCalledTimes(1)
        expect(view).toMatchSnapshot();
    });
});
