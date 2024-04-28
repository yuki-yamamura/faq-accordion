import styles from "./index.module.css";

type Props = {
  open: boolean;
};

const Button = ({ open }: Props) => (
  <button type="button" className={styles.module}>
    {open ? (
      <img
        alt="closed"
        src="/assets/images/icon-minus.svg"
        className={styles.module}
      />
    ) : (
      <img
        alt="open"
        src="/assets/images/icon-plus.svg"
        className={styles.module}
      />
    )}
  </button>
);

export default Button;
