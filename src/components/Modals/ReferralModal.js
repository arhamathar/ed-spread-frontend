import React, { useState } from 'react';
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

const ReferralModal = ({ showModal, toggle, createOrder }) => {
    const [confirmText, setConfirmText] = useState('');

    return (
        <Modal isOpen={showModal} toggle={toggle}>
            <ModalHeader as='h4' toggle={toggle}>
                Do you have any coupon ?
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
                <Button color='danger' onClick={toggle}>
                    Cancel
                </Button>
                <Button color='secondary' onClick={() => createOrder()}>
                    Continue
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default ReferralModal;
