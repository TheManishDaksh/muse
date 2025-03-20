import { Hono } from "hono"
import { verify } from "hono/jwt"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {createBlogInput, updateBlogInput} from "@100xdevs/medium-common"

export const blogRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string,
        JWT_SECRET : string
    },
    Variables : {
      userId : string
    }
}>()

blogRouter.use('/*', async(c,next)=>{
    const authPayload = c.req.header('Authorization') || ""
    try{
      const user = await verify( authPayload, c.env.JWT_SECRET)
      if(user){
        //@ts-ignore
        c.set('userId', user.id);
        await next()
      }
    } catch(e) {
      c.status(403);
      return c.json({
          message: "You are not logged in"
      })
    }
  })

blogRouter.post('/',async (c)=>{
  const body = await c.req.json()
  const createblog = createBlogInput.safeParse(body)
  if(!createblog){
    c.status(411)
    return c.json("inputs are not valid")
  }
  const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL
  }).$extends(withAccelerate())
  const authorId = c.get("userId")
    try{
      const blog = await prisma.post.create({
        //@ts-ignore
        data : {
          title: body.title,
          content: body.content,
          authorId :authorId,
          published : new Date().toISOString() 
        }
      })
      const blogId = blog.id
      return c.json({blogId})
    }catch(err){
      c.status(403)
      return c.json({Error : err })
    }   
  })
  
  blogRouter.put('/', async(c)=>{
    const body = await c.req.json()
    const success = updateBlogInput.safeParse(body)
    if(!success){
      c.status(411)
      return c.json("invalid inputs")
    }
    const prisma = new PrismaClient({
      datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());
    try{
    const blog = await prisma.post.update({
      where :{
        id : body.id
      },
      data : {
        title : body.title,
        content : body.content
      }
    })
    return c.json({
      id :blog.id
    })
  }catch(e){
    c.status(403)
    return c.json("can not update")
  }
  })
  
  blogRouter.get('/bulk', async(c)=>{
    const prisma = new PrismaClient({
      datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

   try{
    const blogs = await prisma.post.findMany({
      select : {
        title : true,
        content  : true,
        authorId : true,
        published : true,
        id : true,
        author : {
          select : {
            name : true
          }
        }
      }
    })
    return c.json({
      blogs
    })
   }catch(e){
    c.status(403)
    return c.json("blogs not found")
   }
  })

  blogRouter.get('/bulk/:userID', async(c)=>{

    const authorId = c.get("userId")
    const prisma = new PrismaClient({
      datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

   try{
    const blogs = await prisma.post.findMany({
      where :{
        authorId : authorId 
      }
    })
    return c.json({
      blogs
    })
   }catch(e){
    c.status(403)
    return c.json("blogs not found")
   }
  })
  
  blogRouter.get('/:id', async(c)=>{
    const blogId = c.req.param("id")
    const prisma = new PrismaClient({
      datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate())
    try{
      const blogs = await prisma.post.findMany({
        where : {
          id : String(blogId)
        },
        select : {
          title : true,
          content : true,
          id: true,
          published : true,
          author :{
            select : {
              name : true
            }
          }
        }
      })
      return c.json ({
        blogs
      })
    }catch(e){
      c.status(403)
      return c.json("not find related to your ssearch")
    }
  })
  
  export default blogRouter