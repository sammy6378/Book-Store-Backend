import { Hono } from 'hono'
import { cors } from 'hono/cors'
import 'dotenv/config'
import { assert } from 'console'
import { serve } from '@hono/node-server'
import { bookRouter } from './books/book.router'

const app = new Hono()

// app.use('*', cors())

// trying to work on cors, to be updated
app.use('/api/*', cors())




app.get('/api', (c) => {
  return c.text('Hello Hono!')
})

app.route('/api', bookRouter);

assert(process.env.PORT, 'PORT is not defined')

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT)
})

console.log(`Server is running on port ${process.env.PORT}`)