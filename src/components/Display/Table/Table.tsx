import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function BasicTable({data}: any) {
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="center">Serotonin</TableCell>
            <TableCell align="center">Dopamine</TableCell>
            <TableCell align="center">5-htp</TableCell>
            <TableCell align="center">L-dopa</TableCell>
            <TableCell align="center">Tyrosine</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any) => (
            <TableRow
              key={row.date}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {`${new Date(row.date).toLocaleDateString().replace(/\//g, '-')}`}
              </TableCell>
              <TableCell align="center">{row['serotonin']}</TableCell>
              <TableCell align="center">{row['dopamine']}</TableCell>
              <TableCell align="center">{row['5-htp']}</TableCell>
              <TableCell align="center">{row['L-dopa']}</TableCell>
              <TableCell align="center">{row['Tyrosine']}</TableCell>
            </TableRow>
          )).reverse()}
        </TableBody>
      </Table>
    </TableContainer>
  );
}