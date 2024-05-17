import { ITicket } from "@/types/tickets.type";
import DoneButton from "./DoneButton.component";
import DeleteButton from "./DeleteButton.component";
import { useTechnicianStore } from "@/store/technician.store";

type Props = {
  ticket: ITicket;
};

export default function Ticket(props: Props) {
  const { selectedTech } = useTechnicianStore();
  return (
    <div className="tikets-div">
      <div>
        <p>Date: {props.ticket.date}</p>
        <p>Title: {props.ticket.title}</p>
        <p>Description: {props.ticket.description}</p>
        <p>Hardware to replace: {props.ticket.hardware_type}</p>
        <p>Technician ID: {props.ticket.assigned_technician_id}</p>
        <p>Warehouse: {props.ticket.warehouse}</p>
        <p>Warehouse Id: {props.ticket.warehouse_id}</p>
      </div>

      <DoneButton taskId={props.ticket.id} />
      {selectedTech && selectedTech < 0 && (
        <DeleteButton taskId={props.ticket.id} />
      )}
    </div>
  );
}
