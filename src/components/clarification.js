import React from "react";
import { Button, Card } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

const Clarification = () => {
    return (
        <div className=''>
            <Card className='helpcard mt-5 shadow'>
                <div className='help-para'>
                    <h1>Need Help?</h1>
                    <h5>
                        Our specialists will contact you for details and
                        clarification. We’ll be glad to help you find the
                        course.
                    </h5>
                </div>
                <div className='help-form'>
                    <AvForm>
                        <AvField
                            name='name'
                            type='text'
                            required
                            placeholder='Name'
                            // onChange={(e) => onChangeHandler(e)}
                        />
                        <AvField
                            name='email'
                            type='email'
                            required
                            placeholder='Email'
                            // onChange={(e) => onChangeHandler(e)}
                        />
                        <AvField
                            name='phone'
                            type='Number'
                            required
                            placeholder='Phone'
                            // onChange={(e) => onChangeHandler(e)}
                        />
                        <Button color='info'>Request Clarification</Button>
                    </AvForm>
                </div>
            </Card>
        </div>
    );
};

export default Clarification;
