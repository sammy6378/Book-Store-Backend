import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import 'dotenv/config'
import { assert } from 'console'
import { bookRouter } from './books/book.router'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('*', cors({
  origin: 'https://book-store-frontend-delta-lime.vercel.app/',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization','X-Requested-With', 'X-HTTP-Method-Override','Accept'],
  credentials: true,
}))

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