import React from "react";
import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom/client";
import {unmountComponentAtNode} from "react-dom";

import Button from "./Button";

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

it("enabled by default and disabled by props", () => {
    const root = ReactDOM.createRoot(container);
    act(() => {
        root.render(<Button>Test</Button>);
    });
    const button = document.querySelector("button");
    expect(button).not.toBeDisabled();
    act(() => {
        root.render(<Button disabled>Test</Button>);
    });
    expect(button).toBeDisabled();
});

it("call onClick callback when clicked", () => {
    const root = ReactDOM.createRoot(container);
    const onClick = jest.fn();
    act(() => {
        root.render(<Button onClick={onClick}>Test</Button>);
    });
    const button = document.querySelector("button");
    act(() => {
        button?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(onClick).toHaveBeenCalled();
});