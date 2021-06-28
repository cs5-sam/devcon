const express = require('express')
const connectDB = require('./config/db')

const app = express()

// connect DB 
connectDB()

// Init Middleware
app.use(express.json({extended: false}))

const PORT = process.env.PORT || 4000

app.get('/', (req, res) => res.send('API Running'))

// define routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/post', require('./routes/api/post'))
app.use('/api/fuck', require('./routes/fuck'))

app.listen(PORT, () => {console.log(`Server started ${PORT}`)})
