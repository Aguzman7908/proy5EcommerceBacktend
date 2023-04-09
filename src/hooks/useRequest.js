import { useEffect, useState } from 'react';

import { request } from '../utils/request.js';

export const useRequest = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    request(url, 'GET')
      .then((data) => setData(data))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
};
