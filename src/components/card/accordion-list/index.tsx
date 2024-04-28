import Accordion from "../../accordion";

import styles from "./index.module.css";

type Props = {
  items: {
    title: string;
    content: string;
  }[];
};

const AccordionList = ({ items }: Props) => (
  <ul className={styles.list}>
    {items.map(({ title, content }) => (
      <li key={title} className={styles.listitem}>
        <Accordion title={title} content={content} />
      </li>
    ))}
  </ul>
);

export default AccordionList;
