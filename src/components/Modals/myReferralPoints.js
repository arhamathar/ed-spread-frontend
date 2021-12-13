import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import { AuthContext } from '../../context/authContext';

const MyReferralPoints = ({ showModal, toggle }) => {
    const auth = useContext(AuthContext);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(auth.referralCode);
        toast.success('Code copied to clipboard successfully');
    };

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
                                <i
                                    className='far fa-copy fa-lg ml-4 pointer'
                                    onClick={copyToClipboard}
                                ></i>
                            </h5>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color='danger' onClick={toggle}>
                        Close
                    </Button>
                    <a
                        href='https://forms.gle/KeMR5PyMCviJQxN96'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <Button color='dark' onClick={() => {}}>
                            Redeem Now
                        </Button>
                    </a>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default MyReferralPoints;
