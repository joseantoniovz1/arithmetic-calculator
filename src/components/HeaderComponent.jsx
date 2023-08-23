import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";


const HeaderComponent = () => {
  const [current, setCurrent] = useState("");

  const [state] = useContext(UserContext);

  useEffect(() => {
    console.log("nav: " + JSON.stringify(state));
    console.log("qweNaV: " + state.user);
  }, []);

  return (
    <nav className="navbar justify-content-between navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">Challenge</a>

        { state === null ? ( <div></div>) :(
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-danger dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
         
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item">Sign Out</a>
        </div>
      </div>) }
    </nav>
  )
};

export default HeaderComponent;
