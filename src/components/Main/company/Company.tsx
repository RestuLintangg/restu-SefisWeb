import React from "react";
import Header from "../../header/Header";
import styles from "./Company.module.css";

const Company: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.tag}>Company Page</div>
    </>
  );
};

export default Company;
