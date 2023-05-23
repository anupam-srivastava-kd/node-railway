const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/request', (req, res) => {
  const requestData = req.body;
  console.log('Received request:', requestData);

  // Process the request data or perform any necessary operations

  // Send the request details back as the response
  res.json({
    success: true,
    message: 'Request received successfully',
    requestData: requestData
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
