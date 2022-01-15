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
        email,
        points,
        showModal,
        loading,
        toggle,
        onChangeHandler,
        onSubmitHandler,
        setEmail,
        setPoints,
        subtractReferralPoints,
        subtractPointsModal,
        toggleSubtractPontsModal,
    } = useData();

    return (
        <div className='routes-height'>
            <div className='mx-4 d-flex justify-content-between top-margin'>
                <p className='h5 text-light'>ALL USERS INFORMATION</p>
                <div>
                    <Button onClick={toggle} color='primary'>
                        Add Course
                    </Button>
                    <Button
                        color='dark ml-2'
                        onClick={toggleSubtractPontsModal}
                    >
                        Edit Points
                    </Button>
                </div>
            </div>
            <div className='mx-4'>
                <Table responsive hover striped bordered className='my-5 text-light'>
                    <thead className='thead-transparent text-center'>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Date</th>
                            <th>Course</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, ind) => {
                            const { id, name, mobile, email, title, points, purchasedDate } = user;
                            const date = new Date(purchasedDate);

                            return (
                                <tr key={id}>
                                    <th scope='row'>{ind + 1}</th>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{mobile}</td>
                                    <td>
                                        {date.getDate() +
                                            '-' +
                                            (date.getMonth() + 1) +
                                            '-' +
                                            date.getFullYear()}
                                    </td>
                                    <td>{title}</td>
                                    <td>{points || 0}</td>
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
            <Modal
                isOpen={subtractPointsModal}
                toggle={toggleSubtractPontsModal}
            >
                <ModalHeader as='h4' toggle={toggleSubtractPontsModal}>
                    Subtract Referral Points
                </ModalHeader>
                <ModalBody>
                    <AvForm>
                        <AvField
                            label='Email'
                            name='email'
                            type='email'
                            placeholder='john@gmail.com'
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <AvField
                            label='Referral Points'
                            name='points'
                            type='number'
                            placeholder='john@gmail.com'
                            required
                            onChange={(e) => setPoints(e.target.value)}
                            value={points}
                        />
                    </AvForm>
                </ModalBody>
                <ModalFooter>
                    <Button color='danger' onClick={toggleSubtractPontsModal}>
                        Close
                    </Button>
                    <Button color='primary' onClick={subtractReferralPoints}>
                        Subtract
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Dashboard;
