import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import 'dotenv/config'
import { assert } from 'console'
import { bookRouter } from './books/book.router'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/api', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization'],
}))
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/api', bookRouter);

assert(process.env.PORT, 'PORT is not defined')

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT)
})

console.log(`Server is running on port ${process.env.PORT}`)