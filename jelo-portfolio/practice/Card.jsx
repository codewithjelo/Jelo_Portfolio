import PropTypes from "prop-types";

function Card(props) {
  // Manually apply defaults (to mimic old defaultProps behavior)
  const {
    name = Card.defaultProps.name,
    age = Card.defaultProps.age,
    description = Card.defaultProps.description,
    position = Card.defaultProps.position,
  } = props;

  return (
    <div className="card">
      <img
        src="https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png"
        alt="levv"
        className="card-image"
      />
      <div className="card-content">
        <h3 className="card-name">{name}</h3>
        <p className="card-age">{age}</p>
        <p className="card-description">{description}</p>
        <span>{position + " - " + new Date().getFullYear()}</span>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  description: PropTypes.string,
  position: PropTypes.string,
};

Card.defaultProps = {
  name: "Unknown",
  age: 0,
  description: "No description available",
  position: "Unemployed",
};

export default Card;
