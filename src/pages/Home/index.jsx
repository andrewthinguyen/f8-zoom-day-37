import { useState } from "react";
import Modal from "../ModalDemo";
import Header from "../../layouts/DefaultLayout/components/Header";

function Home() {
  const [isModalOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Header />
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        closeTimeOutMS={300}
        bodyOpenClassName="modal-open"
        htmlOpenClassName="modal-open"
      >
        <h2>Register</h2>
        <form action="">
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button>Register</button>
        </form>
      </Modal>
    </div>
  );
}

export default Home;
