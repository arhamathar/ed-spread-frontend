import React from 'react';
import { Button, Card } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

const Clarification = () => {
    const onSubmitHandler = (e, err, val) => {
        const NAME = val.name,
            EMAIL = val.email,
            MOBILE = val.phone;
        window.location = `mailto:Edspread2@gmail.com?subject=Requesting Clarification to find courses&body=NAME->${NAME}, EMAIL->${EMAIL}, MOBILE->${MOBILE}`;
    };

    return (
        <div className="">
            <Card className="helpcard mt-5 shadow">
                <div className="help-para">
                    <h1>Need Help?</h1>
                    <h5>
                        Our specialists will contact you for details and
                        clarification. We’ll be glad to help you find the
                        course.
                    </h5>
                </div>
                <div className="help-form">
                    <AvForm
                        onSubmit={onSubmitHandler}
                        action="mailto:myforms@mydomain.com"
                    >
                        <AvField
                            name="name"
                            type="text"
                            required
                            placeholder="Name"
                        />
                        <AvField
                            name="email"
                            type="email"
                            required
                            placeholder="Email"
                        />
                        <AvField
                            name="phone"
                            type="Number"
                            required
                            placeholder="Phone"
                        />
                        <Button color="info">Request Clarification</Button>
                    </AvForm>
                </div>
            </Card>
        </div>
    );
};

export default Clarification;
