/**
 *
 * CategoryCard Test
 * @format
 *
 */

import { composeStories } from "@storybook/testing-react";
import * as Stories from "../ProductDesc.stories";
import { render } from "@testing-library/react";

const { BaseProductDesc } = composeStories(Stories);

describe("ProductDesc", () => {
    test("renders BaseProductDesc correctly", () => {
        const view = render(<BaseProductDesc />);
        expect(view).toMatchSnapshot();
    });
});
