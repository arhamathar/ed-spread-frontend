import React from "react";
import { Button, Table } from "reactstrap";

const Dashboard = () => {
    return (
        <div className="routes-height">
            <div className="mt-5 mx-4 d-flex justify-content-between">
                <p className="h5 text-muted">ALL USERS INFORMATION</p>
                <Button color="info">Add Course</Button>
            </div>
            <div className="mx-4">
                <Table striped bordered className="my-5">
                    <thead className="thead-light">
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Dashboard;
