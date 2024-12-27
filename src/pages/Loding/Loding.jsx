import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';

const Loading = () => {
    const { token } = useParams();  // Extract token from URL params
    const navigate = useNavigate();

    useEffect(() => {
        if(token) {
            document.cookie = `token=${token}; path=/; secure; SameSite=None;`;
            navigate('/');
        }

        // axios.get(`http://localhost:3000/decode-token`, {  
        //     headers: {
        //         Authorization: `Bearer ${token}`, 
        //     },
        // })
        // .then((response) => {
        //     dispatch({ type: 'SET_USER', payload: response.data.user });

        //     // 4. Redirect to the dashboard or main app page
        //     navigate('/dashboard');
        // })
        // .catch((error) => {
        //     console.error('Error decoding token:', error);
        //     navigate('/login');  // Redirect to login if token validation fails
        // });
    }, 
    // [token, dispatch, navigate]
    [navigate, token]
);

    return <div>Loading...</div>;
};

export default Loading;
