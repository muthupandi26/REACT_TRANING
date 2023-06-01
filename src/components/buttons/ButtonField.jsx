import React from "react";
import styles from "./Button.module.scss";

function ButtonField(props) {
  const { buttonText, type, onClick, className, addClassName } = props;

  return (
    <div className={` ${styles.div__button} ${addClassName} `}>
      <button
        type={type}
        onClick={onClick}
        className={`${styles.btn__style} ${className} `}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default ButtonField;
