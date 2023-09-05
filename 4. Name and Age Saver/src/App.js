import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const saveUser = (userInput) => {
    setUserList((prevList) => [...prevList, userInput]); //obj로 저장하면 map을 사용할 수 없어 오류가 발생한다.=>배열에 넣어주기
  };

  return (
    <div>
      <AddUser saveNewUser={saveUser} />
      {userList.length > 0 && <UserList data={userList} />}
    </div>
  );
}

export default App;
