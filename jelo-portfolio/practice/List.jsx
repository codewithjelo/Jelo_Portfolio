import PropTypes from "prop-types";


function List(props) {
  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map((item, index) => (
    <li key={index} style={{ color: item.color }}>
      {item.name}
    </li>
  ));

  return (
    <div>
      <h3>{category}</h3>
      <ol>{listItems}</ol>
    </div>
  );
}

List.propTypes =  {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    })
  ),
};

List.defaultProps = {
  category: "Default Category",
  items: [],
};

export default List;
