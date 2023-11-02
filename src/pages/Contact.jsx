import React from 'react';
import { Grid, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData } from '../redux/contactSlice';
import { Link } from 'react-router-dom';

import '../scss/Contact.scss';

function Contact() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.contact.formData);

  const formik = useFormik({
    initialValues: {
      name: formData.name || '',
      phone: formData.phone || '',
      subject: formData.subject || '',
      message: formData.message || '',
    },

    validationSchema: Yup.object({
      name: Yup.string().required('Name is required').min(2, 'Must be 2 characters or more'),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone must be a 10-digit number')
        .required('Phone is required'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string()
        .required('Message is required')
        .min(10, 'Message must be 10 characters or more'),
    }),

    onSubmit: (values) => {
      dispatch(updateFormData(values));
      console.log(values);
    },
  });

  return (
    <div className="Contact">
      <div className="contact_content">
        <div className="contact_banner">
          <div className="contact_header">
            <h2>Contact</h2>
            <h3>
              <span>
                <Link to="/">Home</Link>
              </span>
              <span> | </span>
              <span>
                <Link to="#!">Contact</Link>
              </span>
            </h3>
          </div>
        </div>
        <div className="contact_form">
          <div className="content">
            <h2 style={{ marginLeft: '18%' }}>Contact Form</h2>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={3} style={{ marginLeft: '16%' }}>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    variant="outlined"
                    className="input-background"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="Your Phone"
                    variant="outlined"
                    className="input-background"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                  />
                </Grid>

                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    className="input-background"
                    name="subject"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    error={formik.touched.subject && Boolean(formik.errors.subject)}
                    helperText={formik.touched.subject && formik.errors.subject}
                  />
                </Grid>

                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    label="Type Your Message..."
                    variant="outlined"
                    multiline
                    rows={4}
                    className="input-background"
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={formik.touched.message && formik.errors.message}
                  />
                </Grid>
                <Grid item xs={8}>
                  <button type="submit" className="btn-play" style={{ float: 'right' }}>
                    SEND
                  </button>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
