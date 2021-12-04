import { useEffect, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import useHttp from '../../hooks/useHttp';
import { uploadImage } from '../../utils/uploadImage';
import { AuthContext } from '../../context/authContext';

const useData = () => {
    const initialState = {
        title: '',
        description: '',
        price: 0,
        image: '',
        url: '',
        type: 'FREE',
    };
    const auth = useContext(AuthContext);

    const { loading, sendRequest } = useHttp();

    const [showModal, setShowModal] = useState(false);
    const [course, setCourse] = useState(initialState);
    const [users, setUsers] = useState([]);

    const toggle = () => setShowModal(!showModal);

    const onChangeHandler = (e) => {
        if (e.target.name === 'image') {
            setCourse((prev) => ({ ...prev, image: e.target.files[0] }));
        } else {
            setCourse((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
            }));
        }
    };

    const onSubmitHandler = async () => {
        try {
            const imageUrl = await uploadImage(course);
            const courseData = { ...course, image: imageUrl };
            const response = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL_DEV}/api/course/create`,
                'POST',
                courseData,
                '/',
                {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + auth.token,
                }
            );
            console.log(response);
        } catch (e) {
            toast.error('Something went wrong, please try again.');
        }
    };

    const getAllUsers = async () => {
        try {
            const response = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL_DEV}/api/user/all-users`,
                'GET',
                null,
                '/dashboard',
                {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + auth.token,
                }
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
