import PropTypes from 'prop-types';
import { Section, Title, StatList, Item, Label, Percentage } from './Statistics.styled';

export default function Statistics({ stats, title }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(stat => {
          return (
            <Item key={stat.id} style={{ backgroundColor: randomHexColor() }}>
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage}</Percentage>
            </Item>
          );
        })}
      </StatList>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

  function randomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
