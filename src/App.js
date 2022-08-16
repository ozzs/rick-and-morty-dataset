import { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search/Search';
import AppPagination from './components/Pagination/AppPagination';
import CharTable from './components/Table/CharTable';
import Filters from './components/Filters/Filters';
import Header from './components/Header/Header';

function App() {
  const [loading, setLoading] = useState(true);

  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState(null);
  const [search, setSearch] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&gender=${gender}&status=${status}`;

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

  if (loading) return 'loading...';

  return (
    <div className="App">
      <Header />
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <Filters
        gender={gender}
        setGender={setGender}
        status={status}
        setStatus={setStatus}
        setSearch={setSearch}
      />
      {data !== null ? (
        <>
          <CharTable data={data.results} />
          <AppPagination
            pageCount={data.info.pages}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        </>
      ) : (
        <div>NO DATA TO DISPLAY</div>
      )}
    </div>
  );
}

export default App;
