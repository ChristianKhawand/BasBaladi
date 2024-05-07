import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


function BasicPagination({ onPageChange }) {
  const handleChange = (event, page) => {
    onPageChange(page, 8);
  };

  return (
    <Stack spacing={2}>
      <Pagination count={5} onChange={handleChange} />
    </Stack>
  );
}

export default BasicPagination;
