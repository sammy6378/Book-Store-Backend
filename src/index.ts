import { Hono } from 'hono'
import { cors } from 'hono/cors'
import 'dotenv/config'
import { assert } from 'console'
import { serve } from '@hono/node-server'
import { bookRouter } from './books/book.router'

const app = new Hono()

// app.use('*', cors())

// trying to work on cors, to be updated
app.use(cors({
  origin: 'https://book-store-frontend-delta-lime.vercel.app/',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization','Access-Control-Allow-Origin'],
}));




app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/', bookRouter);

assert(process.env.PORT, 'PORT is not defined')

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT)
})

console.log(`Server is running on port ${process.env.PORT}`)