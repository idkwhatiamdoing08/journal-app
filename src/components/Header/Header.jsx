import SelectUser from "../SelectUser/SelectUser";
import styles from "./Header.module.css";
import Button from "../Button/Button";

function Header() {
  return (
    <>
      <img src="/logo.svg" alt="Логотип журнала" className={styles.logo} />
      <SelectUser />
    </>
  );
}

export default Header;
