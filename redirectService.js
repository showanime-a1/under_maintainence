// Import required modules
const express = require('express');
const path = require('path');  // Required for serving static files
const app = express();
const PORT = process.env.PORT || 3000;

// Define the base URLs
const baseUrlIn = 'https://showanime.in';
const baseUrlFun = 'https://showanime.fun';

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Redirect requests based on the incoming domain, redirecting to the home page
app.all('*', (req, res) => {
  const incomingDomain = req.get('Host'); // Get the incoming domain (showanime.in or showanime.fun)

  // If the request is from showanime.in, redirect to showanime.in (home page)
  if (incomingDomain === 'showanime.in') {
    res.redirect(301, baseUrlIn);  // Redirect to showanime.in without the path
  } 
  // If the request is from showanime.fun, redirect to showanime.fun (home page)
  else if (incomingDomain === 'showanime.fun') {
    res.redirect(301, baseUrlFun);  // Redirect to showanime.fun without the path
  } 
  // Optional: Handle other domains (default to showanime.in)
  else {
    res.redirect(301, baseUrlIn);  // Redirect to showanime.in as default
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Redirect service running on port ${PORT}`);
});
