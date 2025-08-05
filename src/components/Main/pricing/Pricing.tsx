import React from "react";
import Header from "../../header/Header";
import styles from "./Pricing.module.css";

const Pricing: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.tag}>Pricing Page</div>
    </>
  );
};

export default Pricing;
