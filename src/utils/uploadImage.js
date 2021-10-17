import axios from 'axios';
import { toast } from 'react-toastify';

export const uploadImage = async (course) => {
    try {
        const formData = new FormData();
        formData.append('file', course.image);
        formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_NAME);
        formData.append('cloud_name', process.env.REACT_APP_CLOUDINARY_USER);
        const { data } = await axios.post(
            `${process.env.REACT_APP_CLOUDINARY_API}`,
            formData
        );
        return data.url;
    } catch (e) {
        toast.error('Failed to upload Image, please try again');
    }
};
