import "./App.scss";
import { MemberCard } from "../src/components/memberCard";
import { useEffect, useState } from "react";
import { UserProps } from "./components/memberCard/types";
import { Form } from "./components/form";
import { Tabs } from "./components/tabs";
import { TABS_NAME } from "./components/tabs/const";
import { Button } from "./components/button";

const START_COUNT_USER = 1;
const INCREASE_COUNT_USER = 5;

export default function App() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [lastAddedUser, setLastAddedUser] = useState<UserProps | null>(null);
  const [tabForm, setTabForm] = useState(TABS_NAME.FORM);
  const [countShowUser, setCountShowUser] = useState(START_COUNT_USER);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((res) => setUsers(res));
  }, []);

  const handleMoreUsersClick = () => {
    setCountShowUser((value) => value + INCREASE_COUNT_USER);
  };

  const handleUserAddition = (user: UserProps) => {
    setLastAddedUser(user);
  };

  return (
    <div className="App">
      <Tabs onChange={setTabForm} />

      {tabForm == TABS_NAME.USERS &&
        <div>
          {users.slice(0, countShowUser)
            .map((user: UserProps) => <MemberCard key={user.phone} {...user} />)}

          <div className="button-with-label">
            <p style={{ marginRight: '5px' }}>нажми меня!</p>
            <Button onClick={handleMoreUsersClick}>more users</Button>
          </div>
        </div>
      }

      {tabForm == TABS_NAME.FORM &&
        <Form onUserAddition={handleUserAddition} />
      }

      {lastAddedUser &&
        <div>
          Последний добавленный пользователь:
          <MemberCard {...lastAddedUser} />
        </div>
      }
    </div>
  );
}
