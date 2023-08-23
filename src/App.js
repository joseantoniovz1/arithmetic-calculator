import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import RecordTable from "./components/RecordTable";
import Login from "./components/Login";
import {
  Switch,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    
    <div className="container">
      
      {/*<RecordTable />*/}
      <BrowserRouter>
      
      <UserProvider>
      <HeaderComponent />
        <Routes>
          <Route path="/" exact element={<Login/>}></Route>
          <Route path="/home" element={<RecordTable/>}></Route>
        </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>

  );
}

const style = {
  color: "red",
  margin: "10px",
};

export default App;
