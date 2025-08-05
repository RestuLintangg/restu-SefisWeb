import React from "react";
import Header from "../../header/Header";
import styles from "./Homepage.module.css";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.tag}>Home Page</div>
    </>
  );
};

export default HomePage;
