/**
 *
 * CategoryCard Test
 * @format
 *
 */

import { composeStories } from "@storybook/testing-react";
import * as Stories from "../Label.stories";
import { render, screen } from "@testing-library/react";

const { BaseLabel } = composeStories(Stories);

describe("Label", () => {
    test("renders Label correctly", () => {
        const view = render(<BaseLabel />);
        const labelText = screen.getByText(`Hi I'm Label`)
        expect(view).toMatchSnapshot();
        expect(labelText).toBeInTheDocument();
    });
});
