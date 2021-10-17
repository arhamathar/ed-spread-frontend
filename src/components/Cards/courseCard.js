import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button,
} from 'reactstrap';

import useData from './courseData';
import DeleteModal from '../Modals/deleteModal';

const Course = ({ course, reload }) => {
    const {
        editCourse,
        showModal,
        showDeleteModal,
        toggle,
        toggleDeleteModal,
    } = useData({
        course,
    });
    const { title, description, price, type, image, url } = editCourse;

    return (
        <div className="carddiv">
            <Card className="coursecard">
                <CardImg
                    className="cardimage"
                    top
                    width="100%"
                    src={course.image}
                    alt="Card image cap"
                />
                <CardBody className="cardbody">
                    <CardTitle tag="h5">{course.title}</CardTitle>
                    <CardText className="cardtext">
                        {course.description}
                    </CardText>
                    <div>
                        <div className="cardicons">
                            <i class="fa fa-map-marker" aria-hidden="true">
                                online
                            </i>
                            {/* <i class="fas fa-calendar-alt"> 28 oct, 8:00pm</i> */}
                        </div>
                        <div className="card-buttons" Name>
                            <Button color="info" className="cardbutton">
                                ₹ Buy Now
                            </Button>
                            <Button
                                onClick={toggle}
                                color="info"
                                className="cardbutton"
                            >
                                Edit
                            </Button>
                            <Button
                                color="info"
                                className="cardbutton"
                                onClick={toggleDeleteModal}
                            >
                                Delete
                            </Button>
                        </div>
                    </div>
                </CardBody>
            </Card>
            <DeleteModal
                title={title}
                courseId={course._id}
                showModal={showDeleteModal}
                toggle={toggleDeleteModal}
                reload={reload}
            />
        </div>
    );
};

export default Course;
