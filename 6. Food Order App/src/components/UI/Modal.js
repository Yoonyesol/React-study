import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReaceDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const partalElement = document.getElementById("overlays"); //포털 위치(index.html)

const Modal = (props) => {
  return (
    <Fragment>
      {/* 포털대상, 어디로 이동시킬 것인지 위치 */}
      {ReaceDOM.createPortal(<Backdrop />, partalElement)}
      {ReaceDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        partalElement
      )}
    </Fragment>
  );
};
export default Modal;
