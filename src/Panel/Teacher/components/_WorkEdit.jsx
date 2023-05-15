import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function _WorkEdit() {

  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="outline-success" onClick={() => setShow(true)}>
      <i class="bi bi-pencil-square"></i>
      </Button>



      <Modal
      size="xl"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Konu adı
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>




        </Modal.Body>
      </Modal>
    </>
  );
}

