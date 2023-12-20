import { act, fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// Mock do useEffect para evitar problemas com a execução de efeitos colaterais
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn(),
}));

describe('App Component', () => {
  it('renders App component', () => {
    render(<App />);
    const appElement = screen.queryByText(/Formulario enviado com sucesso/i);
    expect(appElement).not.toBeInTheDocument();
  });

  it('handles form submission and shows success message', async () => {
    render(<App />);
    const selectElement = screen.getByTitle('select');
    const button = screen.getByText(/Enviar/i);

    await act(async () => {
      fireEvent.change(screen.getByTitle('nome'), {
        target: { value: 'John' },
      });

      fireEvent.change(screen.getByLabelText(/Sobrenome/i), {
        target: { value: 'Doe' },
      });

      fireEvent.change(screen.getByLabelText(/Endereço/i), {
        target: { value: '123 Main St' },
      });

      fireEvent.change(screen.getByLabelText(/Telefone/i), {
        target: { value: '555-1234' },
      });

      fireEvent.change(selectElement, { target: { value: 'opcao2' } });
      fireEvent.click(button);
    });

    expect(screen.getByTitle('nome')).toHaveValue('John');
    expect(screen.getByLabelText(/Sobrenome/i)).toHaveValue('Doe');
    expect(screen.getByLabelText(/Endereço/i)).toHaveValue('123 Main St');
    expect(screen.getByLabelText(/Telefone/i)).toHaveValue('555-1234');

    const message = await screen.findByRole('message');
    expect(message).toBeInTheDocument();
  });
});
