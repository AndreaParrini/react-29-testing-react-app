import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Greeting from "./Greeting"

describe('Greeting Component', ()=>{
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
    });

    test('renders good to see you if the button was NOT clicked', ()=>{
        render(<Greeting />);

        const paragraphElement = screen.getByText("good to see you", {exact: false});
        expect(paragraphElement).toBeInTheDocument();
    });

    test('renders Changed! if the button was clicked', ()=>{
        // Arrange
        render(<Greeting />);

        // Act
        // se si usa la versione 14+ della libreria user-event si deve usare async nella funzione di test e poi await quando si usa userEvent.click()
        const buttonElement= screen.getByRole('button');
        userEvent.click(buttonElement);

        // Assert
        const paragraphElement = screen.getByText("Changed!");
        expect(paragraphElement).toBeInTheDocument();
    });

    test('no renders "good to see you" if the button was clicked', ()=>{
        // Arrange
        render(<Greeting />);

        // Act
        // se si usa la versione 14+ della libreria user-event si deve usare async nella funzione di test e poi await quando si usa userEvent.click()
        const buttonElement= screen.getByRole('button');
        userEvent.click(buttonElement);

        // Assert
        // con queryByText, se non trova l'elemente restituisce nulla e cosi poi dopo posso controllare se è nulla.
        const paragraphElement = screen.queryByText("good to see you", {exact: false});
        expect(paragraphElement).toBeNull();
    })
})

