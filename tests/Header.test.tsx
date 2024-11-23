import { render, screen } from '@testing-library/react';
import Header from "@/components/header/Header";
import { describe } from 'node:test';
import '@testing-library/jest-dom';


describe('Header Component', () => {
  it('deve renderizar o logo corretamente', () => {
    render(<Header />);
    const xablau = screen.getByTestId('logo_lacrei_header');
    
    expect(xablau).toBeInTheDocument();
  });

});

