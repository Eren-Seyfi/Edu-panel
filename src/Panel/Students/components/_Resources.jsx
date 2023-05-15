import React, { useState,Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function _Resources() {

  const [show, setShow] = useState(false);

  return (
    <Fragment>

      <Button variant="outline-primary" onClick={() => setShow(true) }>
        Göster
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
          <p>
örnek yazı
          </p>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}

