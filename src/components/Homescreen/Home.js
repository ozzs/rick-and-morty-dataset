import { useState } from 'react';
import Search from '../Search/Search';
import AppPagination from '../Pagination/AppPagination';
import CharTable from '../Display/Table/CharTable';
import Filters from '../Filters/Filters';
import CharCards from '../Display/Cards/CharCards';
import { Select, MenuItem, Box } from '@mui/material';
import { useApiRequest } from '../utils/hooks';

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');
  const [display, setDisplay] = useState('Table');
  const CharComponent = display === 'Cards' ? CharCards : CharTable;

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&gender=${gender}&status=${status}`;

  const handleChange = event => {
    setDisplay(event.target.value);
  };

  const { loading, data, error } = useApiRequest(api);

  if (loading) return 'loading...';

  if (error) console.error(`error fetching data: ${error}`);

  return (
    <div className="App">
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          m: 1,
        }}
      >
        <Search setSearch={setSearch} setPageNumber={setPageNumber} />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={display}
          onChange={handleChange}
          sx={{
            height: 50,
            m: 1,
          }}
        >
          <MenuItem value={'Table'}>Table</MenuItem>
          <MenuItem value={'Cards'}>Cards</MenuItem>
        </Select>
      </Box>
      <Filters
        gender={gender}
        setGender={setGender}
        status={status}
        setStatus={setStatus}
        setSearch={setSearch}
      />
      {console.log('The Data: ', data)}
      {data !== null ? (
        <>
          <CharComponent characterList={data.results} />
          <AppPagination
            pageCount={data.info.pages}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        </>
      ) : (
        <div>NO DATA TO DISPLAY!</div>
      )}
    </div>
  );
};

export default Home;
