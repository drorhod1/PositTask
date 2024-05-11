import Tasks from "@/components/Tasks.component";
import { useTicketsStore } from "@/store/ticket.store";
import { useEffect } from "react";

export default function Admin() {
  const { getTickets, tickets } = useTicketsStore();
  useEffect(() => {
    getTickets();
  }, []);

  return <div>{tickets && <Tasks tickets={tickets} />}</div>;
}
