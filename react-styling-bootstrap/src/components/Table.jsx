import React from 'react'
import Table from "react-bootstrap/Table";


export default function UserTable() {
    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Speciality</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>@mdo</td>
                    <td>Oslo</td>
                    <td>Sand castles</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>@fat</td>
                    <td>Oslo</td>
                    <td>Sand castles</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>Oslo</td>
                    <td>Sand castles</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Pretium</td>
                    <td>@twitter</td>
                    <td>Oslo</td>
                    <td>Sand castles</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Libero</td>
                    <td>@twitter</td>
                    <td>Oslo</td>
                    <td>Sand castles</td>
                </tr>
            </tbody>
        </Table>
    )
}
