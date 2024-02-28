import { useEffect } from "react";

const Modal = ({ modalContent }) => {
  return (
    <div className='modal'>
      <p>{modalContent}</p>
    </div>
  );
};

export { Modal };
