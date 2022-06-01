/**
 *
 * CategoryCard Test
 * @format
 *
 */

import { composeStories } from "@storybook/testing-react";
import * as Stories from "../Spinner.stories";
import { render } from "@testing-library/react";

const { BaseSpinner } = composeStories(Stories);

describe("Spinner", () => {
    test("renders Spinner correctly", () => {
        const view = render(<BaseSpinner />);
        expect(view).toMatchSnapshot();
    });
});
