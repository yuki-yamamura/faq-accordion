import Card from "./components/card";

import styles from "./App.module.css";

const App = () => (
  <div className={styles.module}>
    <img
      src="/assets/images/background-pattern-mobile.svg"
      aria-hidden={true}
      className={`${styles["bg-image"]} ${styles.module}`}
    />
    <img
      src="/assets/images/background-pattern-desktop.svg"
      aria-hidden={true}
      className={`${styles["bg-image"]} ${styles.desktop}`}
    />
    <div className={styles.container}>
      <Card />
    </div>
  </div>
);

export default App;
