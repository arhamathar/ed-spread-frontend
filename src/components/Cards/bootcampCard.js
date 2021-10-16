import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button,
} from 'reactstrap';

import DeleteModal from '../Modals/deleteModal';
import CreateEditModal from '../Modals/createEditModal';
import useData from './data';

const Bootcamp = ({ bootcamp, reload }) => {
    const {
        course,
        showModal,
        showDeleteModal,
        toggle,
        toggleDeleteModal,
        onChangeHandler,
    } = useData({
        bootcamp,
    });

    const { title, description, price, type } = course;

    return (
        <div className="carddiv">
            <Card className="coursecard">
                <CardImg
                    className="cardimage"
                    top
                    width="100%"
                    src={bootcamp.image}
                    alt="Card image cap"
                />
                <CardBody className="cardbody">
                    <CardTitle tag="h5">{bootcamp.title}</CardTitle>
                    <CardText className="cardtext">
                        {bootcamp.description}
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
                                Register
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
            <CreateEditModal
                title={title}
                description={description}
                price={price}
                type={type}
                showModal={showModal}
                toggle={toggle}
                onChangeHandler={onChangeHandler}
            />
            <DeleteModal
                title={title}
                courseId={bootcamp._id}
                showModal={showDeleteModal}
                toggle={toggleDeleteModal}
                reload={reload}
            />
        </div>
    );
};

export default Bootcamp;
