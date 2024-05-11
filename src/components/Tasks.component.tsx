import { ITicket } from "@/types/tickets.type";
import Ticket from "./Ticket.component";

type Props = {
  tickets: ITicket[];
};

export default function Tasks(props: Props) {
  return (
    <div>
      <ul>
        {props.tickets &&
          props.tickets.map((ticket) => {
            return <Ticket ticket={ticket} />;
          })}
      </ul>
    </div>
  );
}
