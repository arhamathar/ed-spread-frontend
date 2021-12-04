import { useContext, useState } from 'react';

import useHttp from '../../hooks/useHttp';
import { uploadImage } from '../../utils/uploadImage';
import { AuthContext } from '../../context/authContext';

const useData = ({
    title,
    description,
    price,
    type,
    url,
    image,
    reload,
    toggle,
    courseId,
}) => {
    const auth = useContext(AuthContext);
    const { sendRequest } = useHttp();
    const course = {
        title,
        description,
        price,
        type,
        url,
        image,
    };
    const [imageFile, setImageFile] = useState('');

    const onEditSubmitHandler = async () => {
        try {
            let imageUrl = course.image,
                courseData = course;
            if (imageFile) {
                imageUrl = await uploadImage({ ...course, image: imageFile });
                courseData = { ...course, image: imageUrl };
            }
            await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL_DEV}/api/course/update/${courseId}`,
                'PATCH',
                courseData,
                '/',
                {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + auth.token,
                }
            );
            reload();
            toggle();
        } catch (e) {}
    };

    return { onEditSubmitHandler, setImageFile };
};

export default useData;
