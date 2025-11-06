import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../../components/BugForm';

describe('BugForm', () => {
  it('shows error if fields are empty', () => {
    render(<BugForm onSubmit={jest.fn()} />);
    fireEvent.click(screen.getByText(/submit bug/i));
    expect(screen.getByRole('alert')).toHaveTextContent('All fields are required');
  });

  it('calls onSubmit with valid input', () => {
    const mockSubmit = jest.fn();
    render(<BugForm onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByPlaceholderText(/title/i), {
      target: { value: 'Bug A' }
    });
    fireEvent.change(screen.getByPlaceholderText(/description/i), {
      target: { value: 'Something broke' }
    });
    fireEvent.click(screen.getByText(/submit bug/i));

    expect(mockSubmit).toHaveBeenCalledWith({
      title: 'Bug A',
      description: 'Something broke'
    });
  });
});