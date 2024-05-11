import { screens, uiText } from "@/constants/stringRes";
import { useTechnicianStore } from "@/store/technician.store";
import { ITechnician } from "@/types/technician.type";
import { useNavigate } from "react-router-dom";

type Props = {
  technicians: ITechnician[];
};

export default function Dropdown(props: Props) {
  const { selectedTech, setSelectedTech } = useTechnicianStore();
  const navigate = useNavigate();
  console.log(selectedTech);
  const moveToNextPage = () => {
    selectedTech && selectedTech > 0
      ? navigate(`${screens.technicians}/${selectedTech}`)
      : navigate(`${screens.admin}`);
  };
  return (
    <div>
      <select
        onChange={(event) => {
          setSelectedTech(+event.target.value);
        }}
        name=""
        id=""
      >
        <option value={-1}>{uiText.admin}</option>
        {props.technicians.map((technician) => {
          return <option value={technician.id}>{technician.name}</option>;
        })}
      </select>
      <br />
      <button onClick={moveToNextPage}>{uiText.startButton}</button>
    </div>
  );
}
