import express from "express"
import { user } from "../controller/user.js"

export const router =express.Router()


router.get("/get-hello",user)





