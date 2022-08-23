import React, { useState } from 'react';
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
import { useApiRequest } from '../utils/Hooks';

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
  const [pageNumber, setPageNumber] = useState(1);

  const api = `https://rickandmortyapi.com/api/episode/?page=${pageNumber}`;

  const { isLoaded, data, error } = useApiRequest(api);

  if (isLoaded) return 'loading...';

  if (error) console.log(error);

  // Returns array with episodes code (sorted by episode)
  const episodeMap = data => {
    const labels = data.map(item => item.episode);
    return labels;
  };

  // Returns array with amount of characters per episode (sorted by episode)
  const charactersCount = data => {
    const charactersAmount = data.map(item => item.characters.length);
    return charactersAmount;
  };

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
