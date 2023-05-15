import { Fragment } from "react";

import { Accordion, Table } from "react-bootstrap";

import _Resources from "./_Resources"
import _WorkEdit from "./_WorkEdit";

export default function T_Homework() {

    const ödevler = [1, 2, 3, 4].reverse();
    
    const uzunluk = ödevler.length;

    return (
        <Fragment>
            
            <div>

                <Accordion defaultActiveKey={uzunluk} >
                    {ödevler.map((e) => (

                        <Accordion.Item eventKey={e} key={e} >
                            <Accordion.Header > {e}.Hafta</Accordion.Header>

                            <Accordion.Body >

                                <Table hover>
                                    <thead>
                                        <tr>
                                            <th>Düzenle</th>
                                            <th>Sınıf</th>
                                            <th>Ders adı</th>
                                            <th>Konu adı</th>
                                            <th>Kaynak</th>
                                            <th>Tarih</th>
                                            <th>link</th>

                                        </tr>
                                    </thead>

                                    <tbody>

                                        { [1, 2].map((t) => (

                                            <tr key={t} >
                                                <td>
                                                    <_WorkEdit />
                                                </td>
                                                
                                                <td> A sınıfı </td>
                                                <td>Veri Yapıları</td>
                                                <td>Binary Search Tree</td>
                                                <td>PDF</td>
                                                <td>25.12.2022</td>
                                                <td><_Resources /> </td>

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