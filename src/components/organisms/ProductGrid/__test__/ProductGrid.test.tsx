/**
 *
 * CategoryCard Test
 * @format
 *
 */

import { composeStories } from "@storybook/testing-react";
import * as Stories from "../ProductGrid.stories";
import { render } from "@testing-library/react";

const { ProductGridError, ProductGridLoading, ProductGridSuccess } = composeStories(Stories);

describe("ProductGrid", () => {
    test("renders ProductGridError correctly", () => {
        const view = render(<ProductGridError />);
        expect(view).toMatchSnapshot();
    });

    test("renders ProductGridLoading correctly", () => {
        const view = render(<ProductGridLoading />);
        expect(view).toMatchSnapshot();
    });

    test("renders ProductGridSuccess correctly", () => {
        const view = render(<ProductGridSuccess />);
        expect(view).toMatchSnapshot();
    });
});
