import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Alert from '@mui/material/Alert';
import axios from 'axios';

function AddFilm() {
  const url = 'https://65375a84bb226bb85dd31896.mockapi.io/api/v1/filmManagement';
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

  const formik = useFormik({
    initialValues: {
      title: '',
      poster: '',
      backdrop: '',
      year: '',
      nation: '',
      time: '',
      rating: '',
      genre: '',
      description: '',
      trailer: '',
    },

    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      year: Yup.number().required('Year is required').integer('Year must be an integer'),
      nation: Yup.string().required('Nation is required'),
      time: Yup.number().required('Time is required').integer('Time must be an integer'),
      rating: Yup.number().required('Rating is required').integer('Rating must be an integer'),
      genre: Yup.string().required('Genre is required'),
      description: Yup.string().required('Description is required'),
    }),

    onSubmit: (values, { resetForm }) => {
      axios
        .post(url, values)
        .then((response) => {
          if (response.status !== 201) {
            throw new Error('Network response was not ok');
          }
          console.log('Server response:', response.data);
          setShowSuccessAlert(true);
          resetForm();
        })
        .catch((error) => {
          console.error('Error:', error);
          setShowErrorAlert(true);
        });
    },
  });

  const handleReset = () => {
    formik.resetForm();
  };

  return (
    <div className="content" style={{ padding: '89.50px 0', width: '800px' }}>
      <h1 style={{ marginBottom: '20px' }}>Add New Film</h1>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={6}>
            <TextField
              label="Title"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              fullWidth
              style={{ marginBottom: '20px' }}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title ? formik.errors.title : ''}
            />
          </Grid>

          <Grid item xs={5}>
            <TextField
              label="Year"
              name="year"
              type="number"
              value={formik.values.year}
              onChange={formik.handleChange}
              fullWidth
              style={{ marginBottom: '20px' }}
              error={formik.touched.year && Boolean(formik.errors.year)}
              helperText={formik.touched.year ? formik.errors.year : ''}
            />
          </Grid>

          <Grid item xs={5}>
            <TextField
              label="Nation"
              name="nation"
              value={formik.values.nation}
              onChange={formik.handleChange}
              fullWidth
              style={{ marginBottom: '20px' }}
              error={formik.touched.nation && Boolean(formik.errors.nation)}
              helperText={formik.touched.nation ? formik.errors.nation : ''}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} columns={16}>
          <Grid item xs={6}>
            <TextField
              label="Time"
              name="time"
              type="number"
              value={formik.values.time}
              onChange={formik.handleChange}
              fullWidth
              style={{ marginBottom: '20px' }}
              error={formik.touched.time && Boolean(formik.errors.time)}
              helperText={formik.touched.time ? formik.errors.time : ''}
            />
          </Grid>

          <Grid item xs={5}>
            <TextField
              label="Rating"
              name="rating"
              type="number"
              value={formik.values.rating}
              onChange={formik.handleChange}
              fullWidth
              style={{ marginBottom: '20px' }}
              error={formik.touched.rating && Boolean(formik.errors.rating)}
              helperText={formik.touched.rating ? formik.errors.rating : ''}
            />
          </Grid>

          <Grid item xs={5}>
            <TextField
              label="Genre"
              name="genre"
              value={formik.values.genre}
              onChange={formik.handleChange}
              fullWidth
              style={{ marginBottom: '20px' }}
              error={formik.touched.genre && Boolean(formik.errors.genre)}
              helperText={formik.touched.genre ? formik.errors.genre : ''}
            />
          </Grid>
        </Grid>

        <TextField
          label="Description"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          fullWidth
          style={{ marginBottom: '20px' }}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description ? formik.errors.description : ''}
        />

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            type="button"
            onClick={handleReset}
            variant="contained"
            color="primary"
            style={{
              marginTop: '2%',
              marginRight: '4%',
              padding: '12px 64px',
              backgroundColor: '#000',
              color: '#fff',
            }}
          >
            Reset
          </Button>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{
              marginTop: '2%',
              marginRight: '4%',
              padding: '12px 64px',
              backgroundColor: '#000',
              color: '#fff',
            }}
          >
            Add
          </Button>
        </div>
      </form>

      {showSuccessAlert && (
        <Alert
          severity="success"
          variant="filled"
          style={{ position: 'fixed', top: '2%', right: '1%' }}
        >
          New film added successfully!
        </Alert>
      )}

      {showErrorAlert && (
        <Alert
          severity="error"
          variant="filled"
          style={{ position: 'fixed', top: '2%', right: '1%' }}
        >
          Failed to add new film!
        </Alert>
      )}
    </div>
  );
}

export default AddFilm;
