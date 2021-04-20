import { useState, useEffect } from 'react';

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);
  console.info('api key : ', process.env.REACT_APP_GOOGLE_API_KEY);
  console.info('context key : ', process.env.REACT_APP_SEARCH_ENGINE_ID);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_API_KEY}&cx=${process.env.REACT_APP_SEARCH_ENGINE_ID}&q=${term}`
      );
      const responseJson = await response.json();

      setData(responseJson);
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
