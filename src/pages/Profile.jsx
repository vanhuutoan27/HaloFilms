import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Button, ButtonBase, Grid, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import jwt_decode from 'jwt-decode';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function Profile() {
  const [user, setUser] = useState(null);

  // Kiểm tra xem đã đăng nhập (có jwtToken trong localStorage) chưa
  React.useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      const decoded = jwt_decode(jwtToken);
      setUser(decoded);
    }
  }, []);

  return (
    <div className="content" style={{ padding: '100px 0' }}>
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: '80%',
          flexGrow: 1,
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase>
              <Img
                alt={user?.name}
                src={user?.picture || '../assets/picrew1.jpg'}
                style={{
                  width: '400px',
                  height: '400px',
                }}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container style={{ marginLeft: '20px' }}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="div"
                  style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '24px' }}
                >
                  Full Name: {user?.name || 'Van Huu Toan'}
                </Typography>
                <Typography variant="body2" gutterBottom style={{ fontSize: '1.4rem' }}>
                  Email: {user?.email || 'toanvhse171981@fpt.edu.vn'}
                </Typography>
                <Typography variant="body2" gutterBottom style={{ fontSize: '1.4rem' }}>
                  Phone: {user?.phone || '0792766979'}
                </Typography>
                <Typography variant="body2" gutterBottom style={{ fontSize: '1.4rem' }}>
                  Date of Birth: {user?.dob || '27/08/2003'}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  style={{
                    padding: '12px 64px',
                    backgroundColor: '#000',
                    color: '#fff',
                    fontWeight: 'bold',
                    float: 'right',
                  }}
                >
                  Share
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Profile;
