import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import AppPagination from '../Pagination/AppPagination';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 3,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const BarChart = () => {
  const [loading, setLoading] = useState(true);

  const [pageNumber, setPageNumber] = useState(1);

  const [data, setData] = useState(null);
  const api = `https://rickandmortyapi.com/api/episode/?page=${pageNumber}`;

  // Fetches all episodes by page
  useEffect(() => {
    async function getData() {
      await fetch(api)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then(data => {
          setData(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setData(null);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    getData();
  }, [api]);

  // Returns array with episodes code (sorted by episode)
  const episodeMap = data => {
    let labels = [];

    data.forEach(item => {
      labels.push(item.episode);
    });
    return labels;
  };

  // Returns array with amount of characters per episode (sorted by episode)
  const charactersCount = data => {
    let charactersAmount = [];

    data.forEach(item => {
      charactersAmount.push(item.characters.length);
    });
    return charactersAmount;
  };

  if (loading) return 'loading...';

  return (
    <>
      <Bar
        data={{
          labels: episodeMap(data.results),
          datasets: [
            {
              label: 'Amount of characters in episode',
              data: charactersCount(data.results),
              backgroundColor: '#42a5f5',
              borderColor: '#0288d1',
            },
          ],
        }}
        options={options}
      />
      <AppPagination
        pageCount={data.info.pages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </>
  );
};

export default BarChart;
