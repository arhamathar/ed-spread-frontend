import React from "react";
import {
    Button,
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

const CreateEditModal = ({
    title,
    description,
    price,
    type,
    showModal,
    toggle,
    onChangeHandler,
}) => {
    return (
        <Modal isOpen={showModal} toggle={toggle} size="lg">
            <ModalHeader as="h4" toggle={toggle}>
                Update Course
            </ModalHeader>
            <ModalBody>
                <AvForm>
                    <Row>
                        <Col md={6}>
                            <AvField
                                label="Title"
                                name="title"
                                type="text"
                                placeholder="Programming"
                                required
                                onChange={onChangeHandler}
                                value={title}
                            />
                        </Col>
                        <Col md={3}>
                            <AvField
                                label="Price"
                                name="price"
                                type="number"
                                placeholder="$500"
                                required
                                onChange={onChangeHandler}
                                value={price}
                            />
                        </Col>
                        <Col md={3}>
                            <AvField
                                label="Type"
                                name="type"
                                type="select"
                                placeholder="BOOTCAMP"
                                required
                                onChange={onChangeHandler}
                                value={type}
                            >
                                <option>BOOTCAMP</option>
                                <option>COURSE</option>
                            </AvField>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AvField
                                label="Image"
                                name="image"
                                type="file"
                                required
                                onChange={onChangeHandler}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <AvField
                                label="Description"
                                name="decription"
                                type="textarea"
                                col={5}
                                placeholder="Enter Course details"
                                required
                                onChange={onChangeHandler}
                                value={description}
                            />
                        </Col>
                    </Row>
                </AvForm>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                    Close
                </Button>
                <Button color="primary">Submit</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateEditModal;
