import { ITicket } from "@/types/tickets.type";
import DoneButton from "./DoneButton.component";

type Props = {
  ticket: ITicket;
};

export default function Ticket(props: Props) {
  return (
    <div>
      <li>
        <div>
          <p>Date: {props.ticket.date}</p>
          <p>Title: {props.ticket.title}</p>
          <p>Description: {props.ticket.description}</p>
          <p>Hardware to replace: {props.ticket.hardware_type}</p>
          <p>Technician ID: {props.ticket.assigned_technician_id}</p>
          <p>Warehouse: {props.ticket.warehouse}</p>
          <p>Warehouse Id: {props.ticket.warehouse_id}</p>
        </div>
      </li>
      <DoneButton taskId={props.ticket.id} />
    </div>
  );
}
