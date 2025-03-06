import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify, decode, jwt } from 'hono/jwt';

const app = new Hono<{
  Bindings : {
    DATABASE_URL : string,
    JWT_SECRET : string
  }
}>();

app.use('/api/v1/blog/*', async(c,next)=>{
  const jwt = c.req.header('Authorization')
  if(!jwt){
    c.status(402)
    return c.json("not authorized")
  }else{
    const verifyToken = await verify(jwt, c.env.JWT_SECRET)
    if(verifyToken){
      await next()
    }else{
      c.status(403)
      return c.json("token not verified")
    }
  }
})

app.get('/', (c) => {
  return c.text('Hello Hono! home page')
})

app.post('/api/v1/user/signup', async(c) =>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate());

const {email, password} = await c.req.json();
try{
  const user = await prisma.user.create({
    //@ts-ignore
    data: {
      email,
      password 
    }
  })
  const jwtSecret = c.env.JWT_SECRET

  const token = await sign({id : user.id}, jwtSecret) 
  return c.json({token})
}catch(e){
  c.status(403)
  return c.json("user already exist")
}
})

app.post('/api/v1/user/signin', async(c)=>{
  const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL
  }).$extends(withAccelerate());
  
  const {email} = await c.req.json()
  try{
    const user = await prisma.user.findUnique({
      //@ts-ignore
      where:{
         email
      }
    })
    if(user){
      const token = await sign({id : user.id}, c.env.JWT_SECRET)
      return c.json({token})
    }
  }catch(e){
    c.status(403)
    return c.json("user not found")
  }
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
  return c.text("get all your blog by id: "+blogId)
})

export default app