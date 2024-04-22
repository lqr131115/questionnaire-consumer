import React, { FC } from "react";
import styles from "./QNInput.module.scss";

type PropsType = {
  qn_id: string;
  props: {
    title: string;
    placeholder: string;
  };
};

const QNInput: FC<PropsType> = ({ qn_id, props }) => {
  const { title, placeholder } = props;
  return (
    <>
      <p className={styles.title}>{title}</p>
      <div className={styles.wrapper}>
        <input type="text" name={qn_id} placeholder={placeholder} />
      </div>
    </>
  );
};

export default QNInput;
