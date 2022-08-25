import { useState, useEffect } from 'react';

export const useApiRequest = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw response;
        }
        setData(await response.json());
      } catch (err) {
        setData(null);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchSongs();
  }, [url]);

  return { loading, data, error };
};
