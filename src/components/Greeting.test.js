import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"
import userEvent from "@testing-library/user-event"

describe("Greeting component", ()=>{
    test("Renders Hello world", ()=>{
        // Arrange
        render(<Greeting />)

        // Act
        // ... nothing

        // Assert
        const elem = screen.getByText("Hello World")
        expect(elem).toBeInTheDocument()
    })

    test(`Renders "It's good to see you" if button was not pressed`,()=>{
        render(<Greeting />)

        const elem = screen.getByText("It's good to see you", {exact:false})
        expect(elem).toBeInTheDocument()
    })

    test("Renders 'changed!' if button was pressed", async()=>{
        // Arrange
        render(<Greeting />)

        // Act
        const btnElem = screen.getByRole("button")
        await userEvent.click(btnElem)

        // Assert
        const elem = screen.getByText("Changed!", {exact:false})
        expect(elem).toBeInTheDocument()
    })

    test("Original text doesn't exist after the button is pressed", async() =>{
        // Arrange
        render(<Greeting />)

        // Act
        const btnElem = screen.getByRole("button")
        await userEvent.click(btnElem)

        // Assert
        const elem = screen.queryByText("It's good to see you", {exact:false})
        //expect(elem).not.toBeInTheDocument() tai
        expect(elem).toBeNull()
    })
})
