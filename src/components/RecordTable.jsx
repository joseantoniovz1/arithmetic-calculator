import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

import RecordService from "../services/RecordService";
import OperationService from "../services/OperationService";
import CreditService from "../services/CreditService";
import { Label } from "reactstrap";

const RecordTable = () => {
  const [records, setRecords] = useState([]);
  const [operations, setOperations] = useState([]);
  const [credit, setCredit] = useState(0);
  const [aux, setAux] = useState({
    operationId: "",
    userId: "",
    amount: "",
    userBalance: 0,
    date: ""
  });

  const [state] = useContext(UserContext);

  const [operationId, setOperationId] = useState(0);
  const [amount, setAmount] = useState(0);
  const [userBalance, setUserBalance] = useState(0);

  useEffect(() => {
    getAllRecords();
    getAllOperations();
    getCredit();
  }, []);

  const getAllRecords = () => {
    RecordService.getRecords()
      .then((response) => {
        setRecords(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getAllOperations = () => {
    OperationService.getOperations()
      .then((response) => {
        setOperations(response.data);
        setAmount(response.data[0].cost);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getCredit = () => {
    CreditService.getCredit()
      .then((response) => {
        setUserBalance(response.data.credit);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
        operationId,
        userId: 1, // You might need to adjust this value
        amount,
        userBalance,
        date: "" // You might need to adjust this value
      };
    console.log("Aux: " + JSON.stringify(aux));
    console.log("Aux: " + amount);
    OperationService.postOperation(newRecord).then((response) => {
        console.log(response.data);
        getAllRecords();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleRefresh = (e) => {
    e.preventDefault();
    console.log("Refresh String");
  };

  const handleOperation = (e) => {
    e.preventDefault();
    const selectedOperationId = e.target.value;
    setOperationId(selectedOperationId-1);
    setAmount(operations[selectedOperationId-1].cost);
  };

  return (
    <>
      <h2 className="text-center">Add Operation</h2>
      <div className="mx-auto col-10 col-md-8 col-lg-6">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Operacion</label>
            <div className="input-group mb-3">
              <select
                className="form-select"
                aria-label="Default select example"
                value={operationId}
                onChange={handleOperation}
              >
                <option value="1">Addition</option>
                <option value="2">Substraction</option>
                <option value="3">Multiplication</option>
                <option value="4">Division</option>
                <option value="5">Square Root</option>
                <option value="6">Random String</option>
              </select>
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={handleRefresh}
                >
                  Button
                </button>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Amount</label>
            <input
              type="text"
              placeholder="Amount"
              name="amount"
              value={amount}
              readOnly
              className="form-control"
            />
          </div>
          <br></br>
          <div className="form-group">
            <label>Balance</label>
            <input
              type="text"
              placeholder="Balance"
              name="balance"
              value={userBalance}
              onChange={(e) => setUserBalance(e.target.value)}
              readOnly
              className="form-control"
            />
          </div>
          <br></br>
          <button className="btn btn-success" onClick={handleSubmit}>
            Save
          </button>
        </form>
      </div>

      <br></br>

      <br></br>

      <table className="table table-striped table-bordered">
        {/* Now a Table head. (thead) */}
        <thead>
          {/*create row */}
          <tr>
            {/* create cells */}
            <th>Operation Id</th>
            <th>User Id</th>
            <th>Amount</th>
            <th>User Balance</th>
            <th>Date</th>
          </tr>
        </thead>
        {/* next, create body (tbody) */}
        <tbody>
          {records.map((record, key) => {
            return (
              <tr key={key}>
                <td>{record.operationId}</td>
                <td>{record.userId}</td>
                <td>{record.amount}</td>
                <td>{record.user_balance}</td>
                <td>{record.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default RecordTable;
