import { Hono } from "hono"
import { verify } from "hono/jwt"

export const blogRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string,
        JWT_SECRET : string
    }
}>()

blogRouter.use('/*', async(c,next)=>{
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

blogRouter.post('/', (c)=>{
    return c.text("post your blog")
  })
  
  blogRouter.put('/', (c)=>{
    return c.text("edit your blog")
  })
  
  blogRouter.get('/bulk',(c)=>{
    return c.text("get all blogs")
  })
  
  blogRouter.get('/:id',(c)=>{
    const blogId = c.req.param("id")
    return c.text("get all your blog by id: "+blogId)
  })
  
  export default blogRouter