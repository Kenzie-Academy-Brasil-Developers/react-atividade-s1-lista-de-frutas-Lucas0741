import "./style.css";

function Render({ list }) {
  const listItems = list.map((item) => <li>{item.name}</li>);
  return <ul>{listItems}</ul>;
}

export default Render;
