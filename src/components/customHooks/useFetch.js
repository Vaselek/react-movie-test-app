import React, {useEffect, useState} from 'react';
import {get} from "../../api/httpRequests";

const useFetch = (path, query) => {

  const [payload, setPayload] = useState(null);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    if(!path) return;

    const fetch = async() => {
      const response = await get(path, query);
      if (response.isSuccess) {
        const payload = response.payload.data;
        setPayload(payload);
        setStatus('success')

      } else {
        setStatus('error');
        setError(response.payload);
      }
    };

    fetch();

  }, [path, query]);

  return {
    status: status,
    payload: payload,
    error: error
  }
};

export default useFetch;