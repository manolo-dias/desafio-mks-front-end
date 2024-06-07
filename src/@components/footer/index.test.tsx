import { render, screen } from "@testing-library/react";
import Footer from ".";

describe('Footer Component', () => {
    it('should render the correct text', () => {
        render(<Footer />);
        const footerHeading = screen.getByRole('heading', { name: /MKS sistemas © Todos os direitos reservados/i });
        expect(footerHeading.textContent).toBe('MKS sistemas © Todos os direitos reservados');
    });
});
