import PropTypes from 'prop-types';
import { SectionItem, SectionTitle } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionItem title={title}>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionItem>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
