import { Fragment } from "react";

import { Accordion, Table } from "react-bootstrap";
import _Resources from "./_Resources"
import _LiveBroadcast from "./_LiveBroadcast"


export default function S_LiveLessons() {

    const ödevler = [1, 2, 3, 4].reverse();
    const uzunluk = ödevler.length;

    return (
        <Fragment>
            <div>

                <Accordion defaultActiveKey={uzunluk} >
                    {ödevler.map((e) => (
                        <Accordion.Item eventKey={e} key={e} >
                            <Accordion.Header >{e}.Hafta</Accordion.Header>
                            <Accordion.Body >

                                <Table hover>
                                    <thead>
                                        <tr>
                                            <th>İlerleme</th>
                                            <th>Gün</th>
                                            <th>Ders adı</th>
                                            <th>Konu adı</th>
                                            <th>Saat</th>
                                            <th>link</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[1, 2].map((t) => (
                                            <tr key={t}>
                                                <td> 25% </td>
                                                <td> Pazartesi </td>
                                                <td>türkçe</td>
                                                <td>Dil bilgisi</td>
                                                <td>8.30</td>
                                                <td> <a href="" > <i className="bi bi-camera-video-fill"></i></a> </td>

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