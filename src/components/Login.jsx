import { useState, useEffect, useContext } from "react";
import { useHistory, useNavigate } from 'react-router-dom';
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [state, setState] = useContext(UserContext);

  const navigate = useNavigate();

 

  const handleSubmit = e => {
    e.preventDefault();

    setState({
        user: email,
        token: password
    });
    
    window.localStorage.setItem("auth", state);
    navigate("/home");
  };

  return (
    <div className="">
      <div className="row py-5 bg-default-image">
        <div className="col text-center">
          <h1>Login</h1>
        </div>
      </div>

      <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group p-2">
              <small>
                <label className="text-muted">Email address</label>
              </small>
              <input
                type="email"
                className="form-control"
                placeholder="Email addres"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group p-2">
              <small>
                <label className="text-muted">Password</label>
              </small>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group p-2">
              <div className="button-container">
                <button className="btn btn-primary col-12" type="submit">
                    Submit    
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
