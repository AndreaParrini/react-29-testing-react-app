import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async component', () => {
    test('renders posts if request success', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'first post'}]
        })
        render(<Async />);

        // si usa find qui perche c'è una richiesta http e in questo caso gli elementi del list item non sono subito disponibili
        // in questo modo si crea una promessa e si aspetta che venga risolta
        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    })
})
