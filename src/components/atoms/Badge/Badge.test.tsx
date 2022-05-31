import React from "react";
import { act } from "react-dom/test-utils";

import Badge from "./Badge";
import ReactDOM from "react-dom/client";

// In your test setup file
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

let container: HTMLElement;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

it("renders with or without a name", () => {
    act(() => {
        ReactDOM.createRoot(container).render(<Badge/>);
    });
    expect(container?.textContent).toBe("0");
});