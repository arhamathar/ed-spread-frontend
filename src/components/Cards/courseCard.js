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
import ReferralModal from '../Modals/ReferralModal';
import CreateEditModal from '../Modals/createEditModal';
import { AuthContext } from '../../context/authContext';

const Course = ({ course, reload, purchased }) => {
    const auth = useContext(AuthContext);

    const {
        editCourse,
        showModal,
        showDeleteModal,
        toggle,
        toggleDeleteModal,
        onChangeHandler,
        showReferalModal,
        toggleReferalModel,
        referralCode,
        setReferralCode,
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
        if (!auth.token) {
            return toast.error('Please login to purchase course');
        }
        const res = await loadScript(
            'https://checkout.razorpay.com/v1/checkout.js'
        );

        if (!res) {
            toast.error('Something went wrong');
            return;
        }
        const orderDetails = { amount: price, courseId: course._id };

        const { data } = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL_PROD}/api/payment/orders`,
            orderDetails,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${auth.token}`,
                },
            }
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
                    course: _id,
                    user: auth.userId,
                    orderCreationId: id,
                    createdAt: created_at,
                    receipt,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                    referralCode: referralCode,
                };

                try {
                    const { data } = await axios.post(
                        `${process.env.REACT_APP_BACKEND_URL_PROD}/api/payment/success`,
                        paymentData,
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: `Bearer ${auth.token}`,
                            },
                        }
                    );

                    toast.success(data.message);
                    toggleReferalModel();
                } catch (e) {
                    toast.error(
                        e.response.data.message || 'Something went wrong'
                    );
                }
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
        <div className='carddiv'>
            <Card className='coursecard'>
                <CardImg
                    className='cardimage'
                    top
                    width='100%'
                    src={course.image}
                    alt='Card image cap'
                />
                <CardBody className='cardbody'>
                    <CardTitle tag='h5'>{course.title}</CardTitle>
                    <CardText className='cardtext'>
                        {course.description}
                    </CardText>
                    <div>
                        <div className='cardicons'>
                            <i class="fal fa-map-marker-alt">
                               <span className='mx-2'>Online</span>
                            </i>
                        </div>
                        {!purchased && (
                            <div className='card-buttons'>
                                <Button
                                    onClick={toggleReferalModel}
                                    color='primary'
                                    className='cardbutton mr-3'
                                >
                                    Buy &#8377;{course.price}
                                </Button>
                                {auth.isLoggedIn &&
                                    (auth.role === 'ADMIN' ||
                                        auth.role === 'SUPER_USER') && (
                                        <>
                                            <Button
                                                onClick={toggle}
                                                color='warning'
                                                className='cardbutton mr-3'
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                color='danger'
                                                className='cardbutton mr-3'
                                                onClick={toggleDeleteModal}
                                            >
                                                Delete
                                            </Button>
                                        </>
                                    )}
                            </div>
                        )}
                        {purchased && (
                            <div className='card-buttons'>
                                <a href={course.url}>
                                    <Button color='primary'>View</Button>
                                </a>
                            </div>
                        )}
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
            <ReferralModal
                title={title}
                courseId={course._id}
                showModal={showReferalModal}
                toggle={toggleReferalModel}
                reload={reload}
                createOrder={createOrder}
                referralCode={referralCode}
                setReferralCode={setReferralCode}
            />
        </div>
    );
};

export default Course;
