import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

test('renders Hello World as a text', ()=>{
    // Arrange
    render(<Greeting />);

    //Act
    //... nothing

    // Assert
    // in questo caso se non aggiumao il ! fallirebbe il test, possiamo o aggiungere il ! 
    // oppure aggiungere un parametro in più dopo la stringa {exact: false}, di default è sempre true.
    const helloWorldElement= screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
})