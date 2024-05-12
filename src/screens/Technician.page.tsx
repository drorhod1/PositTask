import CurrentTechnician from "@/components/CurrentTechnician.component";
import Tasks from "@/components/Tasks.component";
import { useTechnicianStore } from "@/store/technician.store";
import { useTicketsStore } from "@/store/ticket.store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Technician() {
  const { id } = useParams();
  const { currentTechnicianTickets, getTicketByTechnicianId } =
    useTicketsStore();
  const { technicians } = useTechnicianStore();

  const currentTechnician = technicians && id ? technicians[+id - 1] : null;
  useEffect(() => {
    currentTechnician && getTicketByTechnicianId(currentTechnician?.id);
  }, []);

  console.log(currentTechnician);
  return (
    <div className="">
      {currentTechnician &&
        currentTechnicianTickets && (
          <CurrentTechnician currentTechnician={currentTechnician} />
        ) && <Tasks tickets={currentTechnicianTickets} />}
    </div>
  );
}
