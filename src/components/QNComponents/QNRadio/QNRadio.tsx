import React, { FC } from "react";
import styles from "./QNRadio.module.scss";

type PropsType = {
  qn_id: string;
  props: {
    title: string;
    options: Array<{ value: string; label: string }>;
    vertical: boolean;
    defaultValue: string;
  };
};

const QNRadio: FC<PropsType> = ({ qn_id, props }) => {
  const { title, defaultValue, options, vertical } = props;
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
                type="radio"
                id={qn_id}
                name={qn_id}
                value={value}
                className={styles.ipt}
                defaultChecked={defaultValue === value}
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

export default QNRadio;
