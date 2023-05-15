import React, { Fragment, useState } from 'react';

import { Table, Modal, Button } from "react-bootstrap"


export default function _Resources() {

  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <Button variant="outline-primary" onClick={() => setShow(true)}>
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


          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Adı Soyadı</th>
                <th>Gönderme Tarihi</th>
                <th>Dosya</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>1</td>
                <td>Eren seyfi</td>
                <td>25/12/2022</td>
                <td>Java</td>
                <td>

                  <Button variant="link">
                  <i className="bi bi-cloud-arrow-down-fill"></i>
                  </Button>

                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>Beyzanur Dağdelen</td>
                <td>25/12/2022</td>
                <td>Java</td>
                <td>

                  <Button variant="link">
                    <i className="bi bi-cloud-arrow-down-fill"></i>
                  </Button>

                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>Hande Öz</td>
                <td>25/12/2022</td>
                <td>Java</td>
                <td>
                  <Button variant="link">
                    <i className="bi bi-cloud-arrow-down-fill"></i>
                  </Button>
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td>ilknur Koparır</td>
                <td>25/12/2022</td>
                <td>Java</td>
                <td>
                  <Button variant="link">
                    <i className="bi bi-cloud-arrow-down-fill"></i>
                  </Button>
                </td>
              </tr>

              <tr>
                <td>5</td>
                <td>Mert seyit</td>
                <td>25/12/2022</td>
                <td>Java</td>
                <td>
                  <Button variant="link">
                    <i className="bi bi-cloud-arrow-down-fill"></i>
                  </Button>
                </td>
              </tr>




              <tr>
                <td>6</td>
                <td>Özge Çıtakoğlu</td>
                <td>25/12/2022</td>
                <td>Java</td>
                <td>
                  <Button variant="link">
                    <i className="bi bi-cloud-arrow-down-fill"></i>
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>


        </Modal.Body>
      </Modal>
    </Fragment>
  );
}

