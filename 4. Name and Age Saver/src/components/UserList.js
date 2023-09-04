import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <div className={styles.users}>
      <ul>
        <li>{props.data.userName}</li>
        <li>{props.data.age}</li>
      </ul>
    </div>
  );
};
export default UserList;
