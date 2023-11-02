/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

import '../scss/Login.scss';

function Login() {
  const [user, setUser] = useState(null); // Sử dụng state để lưu thông tin tài khoản Google

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve the username and password from the input fields
    const username = e.target.username.value;
    const password = e.target.password.value;

    // Validate the username and password (you can add your validation logic here)

    // Store the username and password in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Redirect to the desired page after successful login
    window.location.href = '/';
  };

  const handleGoogleSignIn = () => {
    google.accounts.id.prompt(); // Mở hộp thoại Đăng nhập Google
  };

  useEffect(() => {
    // Check if the token exists in localStorage
    const storedToken = localStorage.getItem('accessToken') || localStorage.getItem('jwtToken');

    // If the token exists, remove it
    if (storedToken) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('jwtToken');
    }

    const handleCredentialResponse = (response) => {
      if (response.credential && typeof response.credential === 'string') {
        console.log('Encoded JWT ID token: ' + response.credential);
        var decoded = jwt_decode(response.credential);
        setUser(decoded);
        localStorage.setItem('jwtToken', response.credential);
        const email = decoded.email;
        console.log('Email:', email);
        window.location.href = '/';
        document.getElementById('buttonDiv').hidden = true;
      } else {
        console.error('Token không hợp lệ hoặc không tồn tại.');
      }
    };

    const loadGoogleScript = () => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        google.accounts.id.initialize({
          client_id: '519808391389-hfehje3s840t09nonkah43no65n0mq8r.apps.googleusercontent.com',
          callback: handleCredentialResponse,
        });
        google.accounts.id.renderButton(document.getElementById('buttonDiv'), {
          theme: 'outline',
          size: 'large',
        });
        google.accounts.id.prompt();
      };
      document.head.appendChild(script);
    };

    if (window.google && window.google.accounts) {
      loadGoogleScript();
    } else {
      setTimeout(() => {
        if (window.google && window.google.accounts) {
          loadGoogleScript();
        } else {
          console.error('Không thể tải Google Identity API.');
        }
      }, 1000);
    }
  }, []);

  return (
    <div className="Login">
      <div className="center">
        <h1>Login</h1>
        <form method="post" onSubmit={handleLogin}>
          <div className="txt_field">
            <input type="text" name="username" value={'user1@gmail.com'} required />
            <span></span>
            <label>Username</label>
          </div>
          <div className="txt_field">
            <input type="password" name="password" value={'123456'} required />
            <span></span>
            <label>Password</label>
          </div>
          <input type="submit" value="Login" />
          <div className="signup_link">
            <div id="buttonDiv"></div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
