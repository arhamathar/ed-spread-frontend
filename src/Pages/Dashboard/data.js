import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
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
    const [subtractPointsModal, setSubtractPointsModal] = useState(false);
    const [email, setEmail] = useState('');
    const [points, setPoints] = useState(0);

    const toggle = () => setShowModal(!showModal);

    const toggleSubtractPontsModal = () =>
        setSubtractPointsModal(!subtractPointsModal);

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

    const subtractReferralPoints = async () => {
        const postData = {
            email,
            referralPoints: points,
        };
        if (!email || points === 0) {
            toast.warn('Email and Points are required');
            return;
        }
        try {
            const { data } = await axios.post(
                `${process.env.REACT_APP_BACKEND_URL_PROD}/api/user/editPoints`,
                postData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + auth.token,
                    },
                }
            );
            console.log(data);
            toast.success(data.message);
            toggleSubtractPontsModal();
            setEmail('');
            setPoints(0);
            getAllUsers();
        } catch (e) {
            toast.error(e.response.data.message);
        }
    };

    const onSubmitHandler = async () => {
        try {
            const imageUrl = await uploadImage(course);
            const courseData = { ...course, image: imageUrl };
            const response = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL_PROD}/api/course/create`,
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
                `${process.env.REACT_APP_BACKEND_URL_PROD}/api/user/all-users`,
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
        email,
        points,
        users,
        toggle,
        onChangeHandler,
        onSubmitHandler,
        subtractReferralPoints,
        subtractPointsModal,
        toggleSubtractPontsModal,
        setEmail,
        setPoints,
    };
};

export default useData;
