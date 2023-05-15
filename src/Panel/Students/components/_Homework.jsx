import { Fragment } from "react";

import { Accordion, Table } from "react-bootstrap";
import _Resources from "./_Resources"


export default function S_Homework() {

    const ödevler = [1, 2, 3].reverse();
    const uzunluk = ödevler.length;


    return (
        <Fragment>

            <div>

                <div className="d-flex justify-content-center m-2">



                    <div className='text-center me-3'> <i className="bi bi-x-square-fill" /> <span> Yapılmadı  </span> </div>



                    <div className='text-center me-3'> <i className="bi bi-exclamation-triangle-fill"></i> <span> Görüldü  </span> </div>



                    <div className='text-center me-3'> <i className="bi bi-check-circle-fill"></i> <span> Yapıldı  </span> </div>


                </div>

                <Accordion defaultActiveKey={uzunluk} >

                    {ödevler.map((e) => (
                        <Accordion.Item eventKey={e} key={e} >

                            <Accordion.Header >{e}.Hafta</Accordion.Header>

                            <Accordion.Body >

                                <Table hover>

                                    <thead>
                                        <tr>
                                            <th>Durum</th>
                                            <th>Ders adı</th>
                                            <th>Konu adı</th>
                                            <th>Kaynak</th>
                                            <th>link</th>

                                        </tr>
                                    </thead>

                                    <tbody>

                                        {ödevler.map((t) => (
                                            <tr key={t} >
                                                <td> <i className="bi bi-x-square-fill"></i> </td>
                                                <td>Matematik</td>
                                                <td>Ebob-Ekok</td>
                                                <td>PDF</td>
                                                <td> <_Resources /> </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>


                            </Accordion.Body>
                        </Accordion.Item>
                    ))}

                </Accordion>
            </div>


        </Fragment>
    )
}