import React, { useState } from 'react';
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

const CreateEditModal = ({ title, courseId, showModal, toggle, reload }) => {
    const [confirmText, setConfirmText] = useState('');

    const onDeleteHandler = async () => {
        if (confirmText.trim() === title.trim()) {
            try {
                const { data } = await axios.delete(
                    `${process.env.REACT_APP_BACKEND_URL_DEV}/api/course/delete/${courseId}`
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
            <ModalHeader as="h4" toggle={toggle}>
                Are you absolutely sure?
            </ModalHeader>
            <ModalBody>
                <AvForm>
                    <Row>
                        <Col>
                            <p>
                                This action cannot be undone. This will
                                permanently delete the{' '}
                                <span className="font-weight-bold">
                                    {title}
                                </span>{' '}
                                course from the database.
                            </p>
                            <AvField
                                label={`Please type the course title (bold text) to confirm.`}
                                name="confirm"
                                type="text"
                                required
                                value={confirmText}
                                onChange={(e) => setConfirmText(e.target.value)}
                            />
                        </Col>
                    </Row>
                </AvForm>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
                <Button color="danger" onClick={onDeleteHandler}>
                    Delete
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateEditModal;
