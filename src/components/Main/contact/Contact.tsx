import React from "react";
import Header from "../../header/Header";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.tag}>Contact Page</div>
    </>
  );
};

export default Contact;
