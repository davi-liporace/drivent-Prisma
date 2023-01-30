
import { Router } from "express";
import { authenticateToken } from "@/middlewares"
import { getTicketsType } from "@/controllers";

const ticketsRoutes = Router()

ticketsRoutes
.all("/*", authenticateToken)
.get("/types",getTicketsType)


export {ticketsRoutes}