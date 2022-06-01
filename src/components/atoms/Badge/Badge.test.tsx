import React from "react";
import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom/client";
import {unmountComponentAtNode} from "react-dom";

import Badge from "./Badge";

// In your test setup file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

let container: HTMLElement;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    //container = null;
});

it("renders with or without value", () => {
    const root = ReactDOM.createRoot(container);
    act(() => {
        root.render(<Badge/>);
    });
    expect(container?.textContent).toBe("0");
    act(() => {
        root.render(<Badge value={12}/>);
    });
    expect(container?.textContent).toBe("12");
});