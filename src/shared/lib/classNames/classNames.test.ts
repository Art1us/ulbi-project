import { classNames } from "./classNames"

describe("classNames", () => {
    test("only 1st arg", () => {
        expect(classNames("someClass")).toBe("someClass")
    })

    test("with additional args", () => {
        const expected = "someClass class1 class2"
        expect(classNames("someClass", {}, ["class1", "class2"])).toBe(expected)
    })

    test("with additional and mods", () => {
        const expected = "someClass class1 class2 hovered centered"
        expect(
            classNames("someClass", { hovered: true, centered: true }, [
                "class1",
                "class2",
            ])
        ).toBe(expected)
    })

    test("with additional, one mode false", () => {
        const expected = "someClass class1 class2 hovered"
        expect(
            classNames("someClass", { hovered: true, centered: false }, [
                "class1",
                "class2",
            ])
        ).toBe(expected)
    })

    test("with additional, one mode undefined", () => {
        const expected = "someClass class1 class2 hovered"
        expect(
            classNames("someClass", { hovered: true, centered: undefined }, [
                "class1",
                "class2",
            ])
        ).toBe(expected)
    })
})
