import { uiText } from "@/constants/stringRes";
import { useTechnicianStore } from "@/store/technician.store";
import { useTicketsStore } from "@/store/ticket.store";

type Props = {
  taskId: number;
};

export default function DoneButton(props: Props) {
  const { resolveTicket, getTicketByTechnicianId } = useTicketsStore();
  const { selectedTech } = useTechnicianStore();
  const resolveTask = () => {
    if (selectedTech && selectedTech >= 0) {
      resolveTicket(props.taskId, selectedTech);
    } else {
      resolveTicket(props.taskId);
    }
    selectedTech && getTicketByTechnicianId(selectedTech);
  };
  return (
    <div className="button-div">
      <button
        onClick={() => {
          resolveTask();
        }}
      >
        {uiText.doneBtn}
      </button>
    </div>
  );
}
