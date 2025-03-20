import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt';
import {signinInput, signupInput} from '@100xdevs/medium-common'

export const userRouter  = new Hono<{
    Bindings : {
        DATABASE_URL : string,
        JWT_SECRET : string
    }
}>()

userRouter.post('/signup', async(c)=>{

  const body = await c.req.json()
  const {success} = signupInput.safeParse(body)

  if(!success){
    c.status(411)
    return c.json({message : "invalid input"})
  }
  
  const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL
  }).$extends(withAccelerate())
  console.log("suer createf from prisma");

  try{
  const user = await prisma.user.create({
    data :{
      username: body.username,
      name : body.name,
      password : body.password
    }
  })
  console.log("user createf");
  
  if(!user){
    c.status(401)
    return c.json({message : "account does not craeted successfully"})
  }
  const userId = user.id
  const token = await sign( {id : user.id}, c.env.JWT_SECRET)
  return c.json({token})
  return c.json({userId})
  }catch(err){
    c.status(403)
    return c.json({Error : err})
  }
})

userRouter.post('/signin', async(c)=>{

  const body = await c.req.json()
  const {success} = signinInput.safeParse(body)
  if(!success){
    c.status(411)
    return c.json("invalid inputs")
  }

  const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL
  }).$extends(withAccelerate())

  try{
    const user =await prisma.user.findFirst({
      where : {
        username : body.username,
        password : body.password
      }
    })
    if(!user){
      c.status(403)
      return c.json("user not found")
    }
    const userId = user.id
    const token = await sign ({id: user.id}, c.env.JWT_SECRET)
    return c.json({token})
    return c.json({userId})
  }catch(e){
    c.status(403)
    return c.json("user not found2")
  }
})
