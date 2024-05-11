import Tasks from "@/components/Tasks.component";
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
        <button>Create</button>
      </Link>
      {tickets && <Tasks tickets={tickets} />}
    </div>
  );
}
