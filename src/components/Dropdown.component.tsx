import { screens, uiText } from "@/constants/stringRes";
import { useTechnicianStore } from "@/store/technician.store";
import { ITechnician } from "@/types/technician.type";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  technicians: ITechnician[];
};

export default function Dropdown(props: Props) {
  const [technicianId, setTechnicianId] = useState(-1);
  const { setSelectedTech } = useTechnicianStore();
  const navigate = useNavigate();
  const moveToNextPage = () => {
    setSelectedTech(technicianId);
    technicianId > 0
      ? navigate(`${screens.technicians}/${technicianId}`)
      : navigate(`${screens.admin}`);
  };
  return (
    <div className="home-buttons-div">
      <button onClick={moveToNextPage}>{uiText.startButton}</button>
      <select
        onChange={(event) => {
          setTechnicianId(+event.target.value);
        }}
        name=""
        id=""
      >
        <option value={-1}>{uiText.admin}</option>
        {props.technicians.map((technician) => {
          return <option value={technician.id}>{technician.name}</option>;
        })}
      </select>
    </div>
  );
}
