import React from 'react';
import {
    Row,
    Col,
    Button,
    Table,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Spinner,
} from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import useData from './data';

const Dashboard = () => {
    const {
        course: { title, description, price, type, url },
        users,
        showModal,
        loading,
        toggle,
        onChangeHandler,
        onSubmitHandler,
    } = useData();

    return (
        <div className=''>
            <div className='mx-4 d-flex justify-content-between top-margin'>
                <p className='h5 text-muted'>ALL USERS INFORMATION</p>
                <Button onClick={toggle} color='info'>
                    Add Course
                </Button>
            </div>
            <div className='mx-4'>
                <Table responsive hover striped bordered className='my-5'>
                    <thead className='thead-light'>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Course</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, ind) => {
                            const { id, name, mobile, email, title } = user;
                            return (
                                <tr key={id}>
                                    <th scope='row'>{ind + 1}</th>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{mobile}</td>
                                    <td>{title}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
            <Modal isOpen={showModal} toggle={toggle} size='lg'>
                <ModalHeader as='h4' toggle={toggle}>
                    Add New Courses
                </ModalHeader>
                <ModalBody>
                    <AvForm>
                        <Row>
                            <Col md={6}>
                                <AvField
                                    label='Title'
                                    name='title'
                                    type='text'
                                    placeholder='Programming'
                                    required
                                    onChange={onChangeHandler}
                                    value={title}
                                />
                            </Col>
                            <Col md={3}>
                                <AvField
                                    label='Price'
                                    name='price'
                                    type='number'
                                    placeholder='₹'
                                    required
                                    onChange={onChangeHandler}
                                    value={price}
                                />
                            </Col>
                            <Col md={3}>
                                <AvField
                                    label='Type'
                                    name='type'
                                    type='select'
                                    required
                                    onChange={onChangeHandler}
                                    value={type}
                                >
                                    <option>FREE</option>
                                    <option>PAID</option>
                                </AvField>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <AvField
                                    label='Image'
                                    name='image'
                                    type='file'
                                    accept='.jpg,.png,.jpeg'
                                    required
                                    onChange={onChangeHandler}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <AvField
                                    label='Course Url'
                                    name='url'
                                    type='text'
                                    placeholder='Enter Course Url'
                                    required
                                    onChange={onChangeHandler}
                                    value={url}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <AvField
                                    label='Description'
                                    name='description'
                                    type='textarea'
                                    placeholder='Enter Course details'
                                    required
                                    onChange={onChangeHandler}
                                    value={description}
                                />
                            </Col>
                        </Row>
                    </AvForm>
                </ModalBody>
                <ModalFooter>
                    <Button color='secondary' onClick={toggle}>
                        Close
                    </Button>
                    <Button
                        color='primary'
                        isLoading={loading}
                        onClick={onSubmitHandler}
                    >
                        Submit {loading && <Spinner color='danger' size='lg' />}
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Dashboard;
