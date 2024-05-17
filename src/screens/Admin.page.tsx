import Tasks from "@/components/Tasks.component";
import { uiText } from "@/constants/stringRes";
import { useTicketsStore } from "@/store/ticket.store";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Admin() {
  const { getTickets, tickets } = useTicketsStore();
  useEffect(() => {
    getTickets();
  }, []);

  return (
    <div>
      <Link to={"/ticketCreate"}>
        <div className="button-div">
          <button>{uiText.createTicket}</button>
        </div>
      </Link>
      {tickets ? (
        <Tasks tickets={tickets} />
      ) : (
        <p className="error">{uiText.adminTicketError}</p>
      )}
    </div>
  );
}
