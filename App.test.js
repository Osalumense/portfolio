import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Counter App 😃 title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Counter App 😃/);
    expect(titleElement).toBeInTheDocument();
});
