import styles from "./Modal.module.css";

export default function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className={styles.modal}>
      <p>Are you sure?</p>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
    </div>
  );
}
