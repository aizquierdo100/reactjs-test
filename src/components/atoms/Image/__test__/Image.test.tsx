/**
 *
 * CategoryCard Test
 * @format
 *
 */

import { composeStories } from "@storybook/testing-react";
import * as Stories from "../Image.stories";
import { render, screen } from "@testing-library/react";

const { BaseImage, BaseImageWithAlt } = composeStories(Stories);

describe("Image", () => {
    test("renders Image correctly", () => {
        const view = render(<BaseImage />);
        expect(view).toMatchSnapshot();
    });

    test("renders ImageWithAlt correctly", () => {
        const view = render(<BaseImageWithAlt />);
        expect(view).toMatchSnapshot();
        const alt = screen.getByAltText("product");
        expect(alt).toBeInTheDocument();
    });
});
