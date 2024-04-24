import React, { FC } from "react";
import Head from "next/head";
import Script from "next/script";
import styles from "@/styles/PageWrapper.module.scss";
import "@/styles/global.css";

type PropsType = {
  title: string;
  description?: string;
  css?: string;
  scripts?: string;
  children?: React.ReactNode;
};

const PageWrapper: FC<PropsType> = (props) => {
  const { title, description, css, scripts, children } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description || title} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <style>{css}</style>
      </Head>
      <main className={styles.wrapper}>{children}</main>
      <Script id="page-js">{scripts}</Script>
    </>
  );
};

export default PageWrapper;
