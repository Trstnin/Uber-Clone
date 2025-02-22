import 'react'
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

export const CaptainProtectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/captain-login');
      return;
    }

    const fetchCaptainProfile = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/captain/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        if (response.status === 201) {
          setCaptain(response.data.captain);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Profile fetch error:', error);
        localStorage.removeItem('token');
        navigate('/captain-login');
      }
    };

    fetchCaptainProfile();
  }, [navigate, token, setCaptain]);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return <>{children}</>;
};

CaptainProtectWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};