/**
 *
 * CategoryCard Test
 * @format
 *
 */

import { composeStories } from "@storybook/testing-react";
import * as Stories from "../Link.stories";
import { render } from "@testing-library/react";

const { BaseLink } = composeStories(Stories);

describe("Link", () => {
    test("renders BaseLink correctly", () => {
        const view = render(<BaseLink />);
        expect(view).toMatchSnapshot();
    });
});
