import { notFoundError } from "@/errors";
import ticketsTyperepository from "@/repositories/tickets-repository";


async function ticketsTypeService(){
    const event = await ticketsTyperepository.ticketsType()
    if (!event) throw notFoundError();

    return event
}
const ticketService = {
    ticketsTypeService
}

export default ticketService