import React, { useContext } from 'react';
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
import { AuthContext } from '../../context/authContext';
import useData from './data';

const Bootcamp = ({ bootcamp, reload }) => {
    const auth = useContext(AuthContext);
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

    const { title, description, price, type, image, url } = course;

    return (
        <div className='carddiv'>
            <Card className='coursecard'>
                <CardImg
                    className='cardimage'
                    top
                    width='100%'
                    src={bootcamp.image}
                    alt='Card image cap'
                />
                <CardBody className='cardbody'>
                    <CardTitle tag='h5'>{bootcamp.title}</CardTitle>
                    <CardText className='cardtext'>
                        {bootcamp.description}
                    </CardText>
                    <div>
                        <div className='cardicons'>
                            <i className='fal fa-map-marker-alt'>
                                <span className='mx-2'>Online</span>
                            </i>
                        </div>
                        <div className='card-buttons'>
                            <Button className='cardbutton mr-3' color='primary'>
                                <a
                                    className="register"
                                    href={bootcamp.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Register
                                </a>
                            </Button>
                            {auth.isLoggedIn &&
                                (auth.role === 'ADMIN' ||
                                    auth.role === 'SUPER_USER') && (
                                    <>
                                        <Button
                                            onClick={toggle}
                                            color="warning"
                                            className="cardbutton mr-3"
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            color="danger"
                                            className="cardbutton mr-3"
                                            onClick={toggleDeleteModal}
                                        >
                                            Delete
                                        </Button>
                                    </>
                                )}
                        </div>
                    </div>
                </CardBody>
            </Card>
            <CreateEditModal
                title={title}
                description={description}
                courseId={bootcamp._id}
                price={price}
                type={type}
                image={image}
                url={url}
                showModal={showModal}
                toggle={toggle}
                reload={reload}
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
