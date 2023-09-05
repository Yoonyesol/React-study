import styles from "./UserList.module.css";
import Card from "../common/Card";

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.data.map((it) => (
          <li key={it.id}>
            {it.userName} ({+it.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
