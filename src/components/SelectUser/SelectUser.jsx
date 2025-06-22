import React, { useContext } from "react";
import { UserContext } from "../../context/user.context";
import styles from "./SelectUser.module.css";

function SelectUser() {
  const { userId, setUserId } = useContext(UserContext);
  const onChange = (e) => {
    setUserId(e.target.value);
  };
  return (
    <select
      className={styles["select"]}
      name="user"
      id="user"
      value={userId}
      onChange={onChange}
    >
      <option value="1">Андрей</option>
      <option value="2">Андрей2</option>
    </select>
  );
}

export default SelectUser;
