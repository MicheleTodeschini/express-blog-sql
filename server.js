const express = require('express')

const app = express()
app.use(express.json())
const notFound = require('./middlewares/notFound')
const error = require('./middlewares/error')

const PORT = 3000

const postRouter = require('./routers/posts')

app.listen(PORT, () => {
    console.log(`Server listenig on port: http://localhost:${PORT}`);

})

app.use('/api/posts', postRouter)
app.use(notFound)
app.use(error)