import { ITechnician } from "@/types/technician.type";

type Props = {
  currentTechnician: ITechnician;
};
export default function CurrentTechnician(props: Props) {
  return (
    <div>
      <h1>Technician Details</h1>
      <p>Technician ID: {props.currentTechnician?.id}</p>
      <p>Technician Name: {props.currentTechnician?.name}</p>
      <p>Technician Phone: {props.currentTechnician?.phone}</p>
    </div>
  );
}
