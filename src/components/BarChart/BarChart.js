import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import AppPagination from "../Pagination/AppPagination";
import { useApiRequest } from "../utils/hooks";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: "y",
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

  const { loading, data, error } = useApiRequest(api);

  if (loading) return "loading...";

  if (error) console.error(`error fetching data: ${error}`);

  return (
    <>
      <Bar
        data={{
          labels: data.results.map((item) => item.episode),
          datasets: [
            {
              label: " Amount of characters in episode",
              data: data.results.map((item) => item.characters.length),
              backgroundColor: "#42a5f5",
              borderColor: "#0288d1",
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
