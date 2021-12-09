import React, { useContext } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import { AuthContext } from '../../context/authContext';

const MyReferralPoints = ({ showModal, toggle }) => {
    const auth = useContext(AuthContext);
    console.log(auth);

    return (
        <div>
            <Modal isOpen={showModal} toggle={toggle}>
                <ModalHeader as='h4' toggle={toggle}>
                    My Referral Points & Code
                </ModalHeader>
                <ModalBody>
                    <div>
                        <h5 className='text-muted'>
                            My Points: <b>{auth.referralPoints}</b>
                        </h5>
                        <div className='text-muted'>
                            <h5>
                                My Code: {auth.referralCode}{' '}
                                <i class='far fa-copy ml-5'></i>
                            </h5>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color='danger' onClick={toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default MyReferralPoints;
