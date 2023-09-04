import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const [userInput, setUserInput] = useState(null);

  const saveUser = (userInput) => {
    setUserInput(userInput);
    console.log(userInput);
  };

  return (
    <div>
      <AddUser saveNewUser={saveUser} />
      {userInput && <UserList data={userInput} />}
    </div>
  );
}

export default App;
