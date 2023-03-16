import { SectionTitle } from "./App.styled";

export const Section = ({ title, children }) => (
  <section>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </section>
);