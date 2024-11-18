import { MouseEvent } from "react";
import "./App.css"
function App() {
  let products = ["Apple", "Banana", "Orange"];
  let nums = [1, 3, 4, 5];
  let selectIndex = 0;
  const handleClick = ((event : MouseEvent) => console.log(event));
  return (
    <div className="container">
      <h1 className="heading">Products list</h1>
      {products.length === 0 && <p>No product found</p>}
      <ul className='listGroup'>
        {products.map((product, index) => (
          <li
            className="list"
            key={product}
            onClick={handleClick}
          >
            {product}
          </li>
        ))}
      </ul>
      {}
    </div>
  );
}
export default App;