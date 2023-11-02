import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Admin() {
  const url = 'https://65375a84bb226bb85dd31896.mockapi.io/api/v1/filmManagement';
  const [data, setData] = useState([]);
  const [deletingFilmId, setDeletingFilmId] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  useEffect(() => {
    if (showSuccessAlert || showErrorAlert) {
      const timeoutId = setTimeout(() => {
        setShowSuccessAlert(false);
        setShowErrorAlert(false);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [showSuccessAlert, showErrorAlert]);

  useEffect(() => {
    axios(url)
      .then((response) => {
        const fetchedData = response.data;
        setData(fetchedData);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const handleDelete = (FilmId) => {
    setDeletingFilmId(FilmId);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (deletingFilmId) {
      axios
        .delete(`${url}/${deletingFilmId}`)
        .then((response) => {
          if (response.status === 200) {
            // Successfully deleted, update the list
            setData(data.filter((film) => film.id !== deletingFilmId));
            setShowSuccessAlert(true);
          } else {
            console.log('Failed to delete');
            setShowErrorAlert(true);
          }
        })
        .catch((error) => {
          console.log('Error:', error);
          setShowErrorAlert(true);
        })
        .finally(() => {
          setDeleteDialogOpen(false);
        });
    }
  };

  const closeDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setDeletingFilmId(null);
  };

  return (
    <div className="content" style={{ padding: '100px 0' }}>
      <h1>Film Management</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="right">Year</TableCell>
              <TableCell align="right">Nation</TableCell>
              <TableCell align="right">Rating</TableCell>
              <TableCell align="right">
                <span style={{ marginRight: '70px' }}>Action</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">{row.title}</TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="right">{row.year}</TableCell>
                <TableCell align="right">{row.nation}</TableCell>
                <TableCell align="right">{row.rating}</TableCell>
                <TableCell align="right">
                  <Link to="/add">
                    <AddCircleIcon className="custom-icon" />
                  </Link>
                  <Link to={`/update/${row.id}`}>
                    <EditIcon className="custom-icon" />
                  </Link>
                  <Link onClick={() => handleDelete(row.id)}>
                    <DeleteIcon className="custom-icon" />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={deleteDialogOpen} onClose={closeDeleteDialog}>
        <DialogTitle>Delete Film</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete this film?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteDialog} color="primary" style={{ color: '#000' }}>
            Cancel
          </Button>
          <Button
            onClick={confirmDelete}
            color="primary"
            variant="contained"
            style={{ background: '#000', color: '#fff', marginBottom: '2%', marginRight: '2%' }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {showSuccessAlert && (
        <Alert
          severity="success"
          variant="filled"
          style={{ position: 'fixed', top: '2%', right: '1%' }}
        >
          Film member deleted successfully!
        </Alert>
      )}

      {showErrorAlert && (
        <Alert
          severity="error"
          variant="filled"
          style={{ position: 'fixed', top: '2%', right: '1%' }}
        >
          Failed to delete film member!
        </Alert>
      )}
    </div>
  );
}

export default Admin;
