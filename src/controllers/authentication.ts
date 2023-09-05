import { Request, Response } from 'express'

import { getUserByEmail, createUser } from '../db/users'
import { random } from '../helper'

export const register = async (_req: Request, res: Response) => {
   try {
      if (!email || !password || !username) {
         return res.sendStatus(400)
      }
      const existingUser = await getUserByEmail(email)
      if (existingUser) {
         return res.sendStatus(400)
      }
      const salt = random()
      const user = await createUser({
         email,
         username,
         authentication: {
            salt,
            password: authentication(salt, password),
         },
      })
      // we're using 201 instead of 200 because we're creating a new resource
      return res.status(201).send(user)
   } catch (error) {
      console.log(error)
      return res.sendStatus(400)
   }
}
