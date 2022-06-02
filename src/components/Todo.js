import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalisopen, setModalIsOpen] = useState(false);

  function handleDelete() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
      {modalisopen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalisopen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}
export default Todo;
