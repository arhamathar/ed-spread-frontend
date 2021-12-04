import React, { useContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
    Button,
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { AuthContext } from '../../context/authContext';

const CreateEditModal = ({ title, courseId, showModal, toggle, reload }) => {
    const auth = useContext(AuthContext);
    const [confirmText, setConfirmText] = useState('');

    const onDeleteHandler = async () => {
        if (confirmText.trim() === title.trim()) {
            try {
                const { data } = await axios.delete(
                    `${process.env.REACT_APP_BACKEND_URL_DEV}/api/course/delete/${courseId}`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + auth.token,
                        },
                    }
                );
                toast.success(data.message);
                toggle();
                reload();
            } catch (e) {
                toast.error(e.response.data.message);
            }
        } else {
            toast.warn(`${title} does not matched with the entered text.`);
        }
    };

    return (
        <Modal isOpen={showModal} toggle={toggle}>
            <ModalHeader as='h4' toggle={toggle}>
                DO you have any coupon ?
            </ModalHeader>
            <ModalBody>
                <AvForm>
                    <Row>
                        <Col>
                            <p>
                                You can use the coupon and help your friend earn
                                points.
                            </p>
                            <AvField
                                label={`Please type the coupon code.`}
                                name='coupon'
                                type='text'
                                value={confirmText}
                                onChange={(e) => setConfirmText(e.target.value)}
                            />
                        </Col>
                    </Row>
                </AvForm>
            </ModalBody>
            <ModalFooter>
                <Button color='secondary' onClick={toggle}>
                    Cancel
                </Button>
                <Button color='danger' onClick={onDeleteHandler}>
                    Continue
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateEditModal;
