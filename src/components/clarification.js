import React from 'react';
import { Button, Card } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import SocialIconLinks from './SocialIconLinks';

const Clarification = () => {
    const onSubmitHandler = (e, err, val) => {
        const NAME = val.name,
            EMAIL = val.email,
            MOBILE = val.phone;
        window.location = `mailto:Edspread2@gmail.com?subject=Requesting Clarification to find courses&body=NAME->${NAME}, EMAIL->${EMAIL}, MOBILE->${MOBILE}`;
    };

    return (
        <div className='clarification'>
            <Card className='helpcard shadow'>
                <div className='help'>
                    <div className='help-para'>
                        <h1>Need Help?</h1>
                        <h5>
                            Our specialists will contact you for details and
                            clarification. We’ll be glad to help you find the
                            course.
                        </h5>
                        <div className='clarification-icon'>
                            <div>
                                <SocialIconLinks
                                    href={
                                        'https://www.google.com/url?q=http://www.youtube.com/channel/UCt4EU38IOgU9ww1Yrq_n-vA&sa=D&source=editors&ust=1632300022213000&usg=AFQjCNFoEAKaTrNwbawHpHOfo9RqBfD5Og'
                                    }
                                    icon={'fas fa-envelope'}
                                />
                                <h5>support@edspread.in</h5>
                            </div>
                            <div>
                                <SocialIconLinks
                                    href={
                                        'https://www.google.com/url?q=http://www.youtube.com/channel/UCt4EU38IOgU9ww1Yrq_n-vA&sa=D&source=editors&ust=1632300022213000&usg=AFQjCNFoEAKaTrNwbawHpHOfo9RqBfD5Og'
                                    }
                                    icon={'fas fa-phone'}
                                />
                                <h5>+91 78426 05842</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='help-form'>
                    <h2>GET IN TOUCH</h2>
                    <h1>Fill The Form Below</h1>
                    <AvForm
                        onSubmit={onSubmitHandler}
                        action='mailto:myforms@mydomain.com'
                    >
                        <AvField
                            name='name'
                            type='text'
                            required
                            placeholder='Name'
                        />
                        <AvField
                            name='email'
                            type='email'
                            required
                            placeholder='Email-id'
                        />
                        <AvField
                            name='phone'
                            type='Number'
                            required
                            placeholder='Phone-Number'
                        />
                        <Button color='primary'>
                            Request Clarification
                        </Button>
                    </AvForm>
                </div>
            </Card>
        </div>
    );
};

export default Clarification;
