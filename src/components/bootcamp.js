import React from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button,
} from "reactstrap";

const Bootcamp = () => {
    return (
        <div className='carddiv'>
            <Card className='coursecard'>
                <CardImg
                    className='cardimage'
                    top
                    width='100%'
                    src='https://spzone-simpleprogrammer.netdna-ssl.com/wp-content/uploads/2017/07/Blogging-for-Software-Developers.png'
                    alt='Card image cap'
                />
                <CardBody class='cardbody'>
                    <CardTitle tag='h5'>Card title</CardTitle>
                    <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.Some quick
                        example text to build on the card title and make up the
                        bulk of the card's content.Some quick example text toe
                        text to build on the card title and mak quick example
                        text to build on the card title and make up the bulk of
                        the card's content.
                    </CardText>
                    <Button class='cardbutton'>Edit</Button>
                </CardBody>
                <Button class='cardbutton'>79$</Button>
            </Card>
        </div>
    );
};

export default Bootcamp;
