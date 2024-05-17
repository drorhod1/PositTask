import { ITicket } from "@/types/tickets.type";
import Ticket from "./Ticket.component";

type Props = {
  tickets: ITicket[];
};

export default function Tasks({ tickets }: Props) {
  return (
    <div className="scrollable-div">
      {tickets &&
        tickets.map((ticket) => <Ticket key={ticket.id} ticket={ticket} />)}
    </div>
  );
}
