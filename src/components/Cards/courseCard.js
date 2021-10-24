import React, { useContext } from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button,
} from 'reactstrap';
import Logo from '../../assests/symbol.png';
import axios from 'axios';
import { toast } from 'react-toastify';

import useData from './courseData';
import DeleteModal from '../Modals/deleteModal';
import CreateEditModal from '../Modals/createEditModal';
import { AuthContext } from '../../context/authContext';

const Course = ({ course, reload }) => {
    const auth = useContext(AuthContext);

    const {
        editCourse,
        showModal,
        showDeleteModal,
        toggle,
        toggleDeleteModal,
        onChangeHandler,
    } = useData({
        course,
    });
    const { title, description, price, type, image, url } = editCourse;
    const { _id } = course;

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function createOrder() {
        const res = await loadScript(
            'https://checkout.razorpay.com/v1/checkout.js'
        );

        if (!res) {
            toast.error('Something went wrong');
            return;
        }
        const orderDetails = { amount: price };

        const { data } = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL_DEV}/api/payment/orders`,
            orderDetails
        );

        if (!data) {
            toast.error('Something went wrong');
            return;
        }
        const { amount, id, currency, created_at, receipt } = data.order;

        const options = {
            key: process.env.REACT_APP_RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency,
            name: 'Ed Spread',
            description: 'Thank you for buying',
            image: { Logo },
            order_id: id,
            handler: async function (response) {
                const paymentData = {
                    amount,
                    courseId: _id,
                    user: auth.userId,
                    orderCreationId: id,
                    createdAt: created_at,
                    receipt,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                const { data } = await axios.post(
                    `${process.env.REACT_APP_BACKEND_URL_DEV}/api/payment/success`,
                    paymentData
                );

                toast.success(data.message);
            },
            prefill: {
                name: auth.name,
                email: auth.email,
                contact: auth.mobile,
            },
            theme: {
                color: '#61dafb',
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

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
                            <Button
                                onClick={createOrder}
                                color="info"
                                className="cardbutton"
                            >
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
            <CreateEditModal
                title={title}
                description={description}
                courseId={course._id}
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
                courseId={course._id}
                showModal={showDeleteModal}
                toggle={toggleDeleteModal}
                reload={reload}
            />
        </div>
    );
};

export default Course;
