import React from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button,
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import useData from "./data";

const Course = (props) => {
    const {
        course: { title, description, price, type },
        showModal,
        toggle,
        onChangeHandler,
    } = useData();

    return (
        <div className='carddiv'>
            <Card className='coursecard'>
                <CardImg
                    className='cardimage'
                    top
                    width='100%'
                    src='https://impreza23.us-themes.com/wp-content/uploads/2020/08/christopher-gower-m_HRfLhgABo-unsplash.jpg'
                    alt='Card image cap'
                />
                <CardBody className='cardbody'>
                    <CardTitle tag='h5'>{props.course.title}</CardTitle>
                    <CardText className='cardtext'>
                        {props.course.description}
                    </CardText>
                    <div>
                        <div className='cardicons'>
                            <i class='fa fa-map-marker' aria-hidden='true'>
                                online
                            </i>
                            <i class='fas fa-calendar-alt'> 28 oct, 8:00pm</i>
                        </div>
                        <div className='card-buttons' Name>
                            <Button color='info' className='cardbutton'>
                                {props.course.price}
                            </Button>
                            <Button
                                onClick={toggle}
                                color='info'
                                className='cardbutton'
                            >
                                Edit
                            </Button>
                            <Button color='info' className='cardbutton'>
                                Delete
                            </Button>
                        </div>
                    </div>
                </CardBody>
            </Card>
            <Modal isOpen={showModal} toggle={toggle} size='lg'>
                <ModalHeader as='h4' toggle={toggle}>
                    Update Course
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
                                    placeholder='$500'
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
                                    placeholder='BOOTCAMP'
                                    required
                                    onChange={onChangeHandler}
                                    value={type}
                                >
                                    <option>BOOTCAMP</option>
                                    <option>COURSE</option>
                                </AvField>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <AvField
                                    label='Image'
                                    name='image'
                                    type='file'
                                    required
                                    onChange={onChangeHandler}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <AvField
                                    label='Description'
                                    name='decription'
                                    type='textarea'
                                    col={5}
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
                        // isLoading={loading}
                        // onClick={onSubmitHandler}
                    >
                        Submit
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Course;
