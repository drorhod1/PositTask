import Dropdown from "@/components/Dropdown.component";
import { uiText } from "@/constants/stringRes";
import { useTechnicianStore } from "@/store/technician.store";
import { useTicketsStore } from "@/store/ticket.store";
import { useEffect } from "react";

const Home = () => {
  const { getTechnicians, technicians } = useTechnicianStore();
  const { getEmployeeOfTheMonth, employeeOfTheMonth } = useTicketsStore();

  useEffect(() => {
    getTechnicians();
    getEmployeeOfTheMonth();
  }, []);
  return (
    <div>
      {employeeOfTheMonth && (
        <h4>
          {uiText.congratulationsTo}
          {employeeOfTheMonth.name} {uiText.BeingEmpOfMonth}
        </h4>
      )}
      {technicians && <Dropdown technicians={technicians} />}
    </div>
  );
};

export default Home;
