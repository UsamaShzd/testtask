import React from "react";
import UserTable from "./components/UsersTable";
import usersData from "./mock/dataset.json";

function App() {
  return (
    <div className="App">
      <UserTable data={usersData} />
    </div>
  );
}

export default App;
