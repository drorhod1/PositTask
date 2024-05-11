import { useTicketsStore } from "@/store/ticket.store";

type Props = {
  taskId: number;
};

export default function DeleteButton(props: Props) {
  const { deleteTicket } = useTicketsStore();
  const onHandleClick = () => {
    deleteTicket(props.taskId);
  };
  return (
    <div>
      <button onClick={onHandleClick}>Delete</button>
    </div>
  );
}
