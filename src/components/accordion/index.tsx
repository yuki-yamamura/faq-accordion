import { useState } from "react";

import styles from "./index.module.css";
import Button from "../button";

type Props = {
  title: string;
  content: string;
};

const Accordion = ({ title, content }: Props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen((prevState) => !prevState);

  return (
    <div onClick={handleClick} className={styles.module}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <Button open={open} />
      </div>
      {open && <div className={styles.content}>{content}</div>}
    </div>
  );
};

export default Accordion;
