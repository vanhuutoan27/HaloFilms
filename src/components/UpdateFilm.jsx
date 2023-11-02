import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Alert from '@mui/material/Alert';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateFilm() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
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
    const url = `https://65375a84bb226bb85dd31896.mockapi.io/api/v1/filmManagement/${id}`;

    axios(url)
      .then((response) => {
        const fetchedData = response.data;
        setFilm(fetchedData);
      })
      .catch((error) => console.log(error.message));
  }, [id]);

  useEffect(() => {
    if (film) {
      formik.setValues({
        title: film.title || '',
        year: film.year || '',
        nation: film.nation || '',
        time: film.time || '',
        rating: film.rating || '',
        genre: film.genre || '',
        description: film.description || '',
      });
    }
  }, [film]);

  const formik = useFormik({
    initialValues: {
      title: film ? film.title : '',
      poster: film ? film.poster : '',
      backdrop: film ? film.backdrop : '',
      year: film ? film.year : '',
      nation: film ? film.nation : '',
      time: film ? film.time : '',
      rating: film ? film.rating : '',
      genre: film ? film.genre : '',
      description: film ? film.description : '',
      trailer: film ? film.trailer : '',
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

    onSubmit: (values) => {
      axios
        .put(`https://65375a84bb226bb85dd31896.mockapi.io/api/v1/filmManagement/${id}`, values)
        .then((response) => {
          if (response.status !== 200) {
            if (response.status === 404) {
              throw new Error('Staff member not found');
            } else {
              throw new Error('Network response was not ok');
            }
          }
          console.log('Server response:', response.data);
          setShowSuccessAlert(true);
        })
        .catch((error) => {
          console.error('Error:', error);
          setShowErrorAlert(true);
        });
    },
  });

  if (film === null) {
    return null;
  }

  const handleReset = () => {
    formik.resetForm();
  };

  return (
    <div className="content" style={{ padding: '89.5px 0', width: '800px' }}>
      <h1 style={{ marginBottom: '20px' }}>Update Film</h1>
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
            Update
          </Button>
        </div>
      </form>

      {showSuccessAlert && (
        <Alert
          severity="success"
          variant="filled"
          style={{ position: 'absolute', top: '12%', right: '1%' }}
        >
          Film updated successfully!
        </Alert>
      )}

      {showErrorAlert && (
        <Alert
          severity="error"
          variant="filled"
          style={{ position: 'absolute', top: '12%', right: '1%' }}
        >
          Failed to update Film!
        </Alert>
      )}
    </div>
  );
}

export default UpdateFilm;
