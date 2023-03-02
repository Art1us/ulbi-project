import { fireEvent, screen } from "@testing-library/react"
import { componentRender } from "shared/lib/tests/componentRender/componentRender"
import { Counter } from "./Counter"

describe("Counter", () => {
    test("basic", () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        })
        expect(screen.getByTestId("value-title")).toHaveTextContent("10")
    })

    test("increment", () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        })
        fireEvent.click(screen.getByTestId("incr-btn"))
        expect(screen.getByTestId("value-title")).toHaveTextContent("11")
    })

    test("decrement", () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        })
        fireEvent.click(screen.getByTestId("decr-btn"))
        expect(screen.getByTestId("value-title")).toHaveTextContent("9")
    })

    test("should work with empty state", () => {
        componentRender(<Counter />, undefined)
        fireEvent.click(screen.getByTestId("decr-btn"))
        expect(screen.getByTestId("value-title")).toHaveTextContent("-1")
    })
})
