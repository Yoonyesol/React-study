import styles from "./ErrorModal.module.css";

const ErrorModal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <h2>Invalid input</h2>
      </div>
      <div className={styles.content}>Please enter a valid age({">"}0).</div>
    </div>
  );
};
export default ErrorModal;
