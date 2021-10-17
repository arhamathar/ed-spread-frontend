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

const Course = ({ course }) => {
    const { toggle, toggleDeleteModal } = useData({ course });
    console.log(course);

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
                            <Button color="info" className="cardbutton">
                                Delete
                            </Button>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default Course;
