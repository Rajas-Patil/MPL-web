// Script for navigation bar
document.getElementById('login-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('http://localhost:3000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
  
    const data = await response.json();
    
    if (response.ok) {
      // Handle successful login (e.g., store token, redirect to another page)
      alert('Login successful!');
    } else {
      alert('Login failed: ' + data.message);
    }
  });
  
