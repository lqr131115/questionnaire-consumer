import React, { FC } from "react";
import styles from "./QNCheckbox.module.scss";

type PropsType = {
  qn_id: string;
  props: {
    title: string;
    options: Array<{ value: string; label: string }>;
    vertical: boolean;
  };
};

const QNCheckbox: FC<PropsType> = ({ qn_id, props }) => {
  const { title, options, vertical } = props;
  return (
    <>
      <p className={styles.title}>{title}</p>
      <div
        className={styles.wrapper}
        style={{ display: "flex", flexDirection: vertical ? "column" : "row" }}
      >
        {options.map((option) => {
          const { value, label } = option;
          return (
            <span key={value} className={styles.opt}>
              <input
                type="checkbox"
                id={qn_id}
                name={qn_id}
                value={value}
                className={styles.ipt}
              />
              <label className={styles.label} htmlFor={qn_id}>
                {label}
              </label>
            </span>
          );
        })}
      </div>
    </>
  );
};

export default QNCheckbox;
