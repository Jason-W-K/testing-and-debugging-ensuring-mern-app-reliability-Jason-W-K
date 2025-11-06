import React from 'react';
import { render, screen } from '@testing-library/react';
import BugCard from '../../components/BugCard';

describe('BugCard', () => {
  it('renders the bug title and status', () => {
    render(<BugCard title="Login Issue" status="Open" />);

    const card = screen.getByTestId('bug-card');
    expect(card).toBeInTheDocument();

    expect(screen.getByText('Login Issue')).toBeInTheDocument();
    expect(screen.getByText(/Status: Open/i)).toBeInTheDocument();
  });
});