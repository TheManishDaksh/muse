import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono! home page')
})

app.post('/api/v1/user/signup', (c) =>{
  return c.text("signup handler")
})

app.post('/api/v1/user/signin', (c)=>{
  return c.text("signin/ login route")
})

app.get('api/v1/user/:userId', (c)=>{
  const userId = c.req.param("userId")
  return c.text("get your user details"+ userId)
})

app.post('api/v1/blog', (c)=>{
  return c.text("post your blog")
})

app.put('/api/v1/blog', (c)=>{
  return c.text("edit your blog")
})

app.get('api/v1/blog',(c)=>{
  return c.text("get all blogs")
})

app.get('/api/v1/blog/:id',(c)=>{
  const blogId = c.req.param("id")
  return c.text("get all your blogs"+blogId)
})
export default app
