import { useEffect, useState } from "react";
import useHttp from "../../hooks/useHttp";

const useData = () => {
    const initialState = {
        title: "",
        description: "",
        price: 0,
        image: "",
        type: "BOOTCAMP",
    };

    const { loading, sendRequest } = useHttp();

    const [showModal, setShowModal] = useState(false);
    const [course, setCourse] = useState(initialState);
    const [users, setUsers] = useState([]);

    const toggle = () => setShowModal(!showModal);

    const onChangeHandler = (e) => {
        setCourse((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmitHandler = async () => {
        console.log(course);
        try {
            const response = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL_DEV}/api/course/create`,
                "POST",
                course,
                "/" // also send formData headers
            );
            console.log(response);
        } catch (e) {}
    };

    const getAllUsers = async () => {
        try {
            const response = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL_DEV}/api/user/all-users`,
                "GET",
                null,
                "/dashboard"
            );
            setUsers(response.users);
        } catch (e) {}
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    return {
        showModal,
        loading,
        course,
        users,
        toggle,
        onChangeHandler,
        onSubmitHandler,
    };
};

export default useData;
