import React from "react";
import Header from "../../header/Header";
import styles from "./Product.module.css";

const Product: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.tag}>Product Page</div>
    </>
  );
};

export default Product;
