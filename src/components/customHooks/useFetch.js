import React, {useEffect, useState} from 'react';
import {get} from "../../api/httpRequests";

const useFetch = (path) => {

  const [payload, setPayload] = useState(null);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState('loading');

  console.log('sjdlfjslfjlsjflsdjfldsj')
  useEffect(() => {
    if(!path) return;

    const fetch = async() => {
      const response = await get(path);
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

  }, [path]);

  return {
    status: status,
    payload: payload,
    error: error
  }
};

export default useFetch;