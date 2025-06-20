import styles from './Header.module.css'

function Header() {

  return (
    <img src="/logo.svg" alt="Логотип журнала" className={styles.logo} />
    
  )
}

export default Header;