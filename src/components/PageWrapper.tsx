import React, { FC } from "react";
import Head from "next/head";
import styles from "@/styles/PageWrapper.module.scss";
import "../app/global.css";

type PropsType = {
  title: string;
  description?: string;
  css?: string;
  scripts?: string;
  children?: React.ReactNode;
};

const PageWrapper: FC<PropsType> = (props) => {
  const { title, description, children } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description || title} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>{children}</div>
    </>
  );
};

export default PageWrapper;
