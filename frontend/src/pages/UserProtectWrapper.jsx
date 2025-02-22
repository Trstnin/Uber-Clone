import 'react'
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserDataContext } from '../context/userContext';

export const UserProtectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchCaptainProfile = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/users/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        if (response.status === 201) {
          setUser(response.data.captain);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Profile fetch error:', error);
        localStorage.removeItem('token');
        navigate('/login');
      }
    };

    fetchCaptainProfile();
  }, [navigate, token, setUser]);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return <>{children}</>;
};

UserProtectWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};