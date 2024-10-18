// const express = require('express');
// const bodyParser = require('body-parser');
// const userRoutes = require('./routes/userRoutes');
// const cartRoutes = require('./routes/cartRoutes');
// const orderRoutes = require('./routes/orderRoutes');
// const cors = require('cors');
// const app = express();
// app.use(cors()); 

// app.use(bodyParser.json());

// app.use('/api/users', userRoutes);
// app.use('/api/cart', cartRoutes);
// app.use('/api/orders', orderRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



// const authRoutes = require('./routes/userRoutes');

// app.use(express.json());


// app.use('/api', authRoutes);  // Add the route to handle /api/SignIn




const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors()); 
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); // To handle form data (URL-encoded)

// Routes
app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api', userRoutes);  // Add the route to handle /api/SignIn

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
