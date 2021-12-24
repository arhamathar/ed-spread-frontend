import React, { useContext } from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button,
} from 'reactstrap';

// import DeleteModal from '../Modals/deleteModal';
// import CreateEditModal from '../Modals/createEditModal';
// import { AuthContext } from '../../context/authContext';
// import useData from './data';

const Bootcamp = ({ bootcamp, reload }) => {
    // const auth = useContext(AuthContext);
    // const {
    //     course,
    //     showModal,
    //     showDeleteModal,
    //     toggle,
    //     toggleDeleteModal,
    //     onChangeHandler,
    // } = useData({
    //     bootcamp,
    // });

    // const { title, description, price, type, image, url } = course;

    return (
        <div className='carddiv'>
            <Card className='coursecard'>
                <CardImg
                    className='cardimage'
                    top
                    width='100%'
                    src='http://res.cloudinary.com/dfkrr0gme/image/upload/v1634439596/fljhmgd5cbvkumamkian.png'
                    alt='Card image cap'
                />
                <CardBody className='cardbody'>
                    <CardTitle tag='h5'>Hello Edspread</CardTitle>
                    <CardText className='cardtext'>
                        welcome to edspread grow your knowledge and have
                        fun.welcome to edspread grow your knowledge and have
                        fun.welcome to edspread grow your knowledge and have
                        fun.welcome to edspread grow your knowledge and have
                        fun.welcome to edspread grow your knowledge and have
                    </CardText>
                    <div>
                        <div className='cardicons'>
                            <i class='fa fa-map-marker' aria-hidden='true'>
                                online
                            </i>
                            {/* <i class="fas fa-calendar-alt"> 28 oct, 8:00pm</i> */}
                        </div>
                        <div className='card-buttons'>
                            <button className='cardbutton btn btn-primary mb-2 '>
                                {/* <a
                                    className="register"
                                    href={url}
                                    target="_blank"
                                    rel="noreferrer"
                                > */}
                                Register
                                {/* </a> */}
                            </button>
                            {/* {auth.isLoggedIn &&
                                (auth.role === 'ADMIN' ||
                                    auth.role === 'SUPER_USER') && (
                                    <>
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
                                    </>
                                )} */}
                        </div>
                    </div>
                </CardBody>
            </Card>
            {/* <CreateEditModal
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
            /> */}
            {/* <DeleteModal
                title={title}
                courseId={bootcamp._id}
                showModal={showDeleteModal}
                toggle={toggleDeleteModal}
                reload={reload}
            /> */}
        </div>
    );
};

export default Bootcamp;
