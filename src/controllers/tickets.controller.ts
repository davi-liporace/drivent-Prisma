import { AuthenticatedRequest } from "@/middlewares";
import ticketService from "@/services/tickets-service";
import { Response } from "express";
import httpStatus from "http-status";


export async function getTicketsType(req: AuthenticatedRequest, res: Response){
 try{
    const event = await ticketService.ticketsTypeService()
    return res.status(200).send(event)
 }
 catch(error) {
    return res.status(httpStatus.NOT_FOUND).send({});
  }
}