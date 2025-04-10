import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

test("Renders Hello world", ()=>{
    // Arrange
    render(<Greeting />)

    // Act
    // ... nothing

    // Assert
    const elem = screen.getByText("Hello World")
    expect(elem).toBeInTheDocument()
})
