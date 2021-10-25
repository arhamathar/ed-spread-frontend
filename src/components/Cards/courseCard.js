import React from 'react';
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

import useData from './courseData';
import DeleteModal from '../Modals/deleteModal';
import CreateEditModal from '../Modals/createEditModal';

const Course = ({ course, reload }) => {
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

    async function displayRazorpay() {
        const res = await loadScript(
            'https://checkout.razorpay.com/v1/checkout.js'
        );

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            return;
        }

        // creating a new order
        const result = await axios.post('http://localhost:5000/payment/orders');

        if (!result) {
            alert('Server error. Are you online?');
            return;
        }

        // Getting the order details back
        const { amount, id: order_id, currency } = result.data;

        const options = {
            key: 'rzp_test_j5p3NGEdIM3YAo', // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: 'Ed Spread',
            description: 'Test Transaction',
            image: { Logo },
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                const result = await axios.post(
                    'http://localhost:5000/payment/success',
                    data
                );

                alert(result.data.msg);
            },
            prefill: {
                name: 'Soumya Dey',
                email: 'SoumyaDey@example.com',
                contact: '9999999999',
            },
            notes: {
                address: 'Soumya Dey Corporate Office',
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
                            <i class='fa fa-map-marker' aria-hidden='true'>
                                online
                            </i>
                            {/* <i class="fas fa-calendar-alt"> 28 oct, 8:00pm</i> */}
                        </div>
                        <div className='card-buttons' Name>
                            <Button
                                onClick={displayRazorpay}
                                color='info'
                                className='cardbutton'
                            >
                                &#8377;{course.price}
                            </Button>
                            <Button
                                onClick={toggle}
                                color='info'
                                className='cardbutton'
                            >
                                Edit
                            </Button>
                            <Button
                                color='info'
                                className='cardbutton'
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
