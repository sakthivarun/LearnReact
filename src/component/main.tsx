import {
  Link,
} from "react-router-dom";


function Main() {
  return (
    <>
      <div className="Nav">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/XO">Tic-Tac-Toe</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Main;
