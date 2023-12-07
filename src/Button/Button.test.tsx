import { render, screen } from '@testing-library/react';
import Button from './index';

describe('Button Component', () => {
  it('renders button text correctly', () => {
    const { getByText } = render(<Button>Click me</Button>);
    const buttonElement = getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('applies font-size correctly', () => {
    render(<Button fs="50">Styled Button</Button>);
    const buttonElement = screen.getByText(/Styled Button/i);
    expect(buttonElement).toHaveStyle('font-size:50px');
    expect(buttonElement).not.toHaveStyle('font-size:51px');
  });

  it('renders with margin correcty', () => {
    render(<Button mg="medium">Default Button</Button>);
    const buttonElement = screen.getByText(/Default Button/i);
    expect(buttonElement).toHaveStyle('margin: 16px');
    expect(buttonElement).not.toHaveStyle('margin: 17px');
  });

  it('renders with padding correcty', () => {
    render(<Button pd="medium">Default Button</Button>);
    const buttonElement = screen.getByText(/Default Button/i);
    expect(buttonElement).toHaveStyle('padding: 16px');
    expect(buttonElement).not.toHaveStyle('padding: 14px');
  });

  it('renders with padding correcty', () => {
    render(
      <Button
        pd="medium"
        fStyle="italic"
        fw="larger"
        height="30"
        tAlign="center"
        width="150"
      >
        Default Button
      </Button>,
    );
    const buttonElement = screen.getByText(/Default Button/i);
    expect(buttonElement).toHaveStyle('padding: 16px');
    expect(buttonElement).not.toHaveStyle('padding: 14px');
    expect(buttonElement).toHaveStyle('font-style: italic');
    expect(buttonElement).not.toHaveStyle('font-style: normal');
    expect(buttonElement).toHaveStyle('font-weight: bold');
    expect(buttonElement).not.toHaveStyle('font-weight: 200');
    expect(buttonElement).toHaveStyle('height: 30px');
    expect(buttonElement).not.toHaveStyle('height: 32px');
    expect(buttonElement).toHaveStyle('text-align: center');
    expect(buttonElement).not.toHaveStyle('text-align: end');
    expect(buttonElement).toHaveStyle('width: 150px');
    expect(buttonElement).not.toHaveStyle('width: 155px');
  });

  it('match snapshot', () => {
    render(<Button pd="medium">Default Button</Button>);
    const buttonElement = screen.getByText(/Default Button/i);
    expect(buttonElement).toMatchSnapshot();
  });
});
