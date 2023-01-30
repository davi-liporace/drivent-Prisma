import { Prisma } from "@prisma/client";
import { prisma } from "@/config";

async function ticketsType(){
    return( prisma.ticketType.findMany())    
}

async function createTicket(){
    return prisma.ticket.create()
}

const ticketsTyperepository = {ticketsType,}

export default ticketsTyperepository