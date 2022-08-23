import { useState, useEffect } from 'react';

export const useApiRequest = url => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      await fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => {
          setError(error);
        });
      setIsLoaded(false);
    };
    fetchSongs();
  }, [url]);

  return { isLoaded, data, error };
};
