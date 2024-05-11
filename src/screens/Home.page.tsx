import Dropdown from "@/components/Dropdown.component";
import { useTechnicianStore } from "@/store/technician.store";
import { useEffect } from "react";

const Home = () => {
  const { getTechnicians, technicians } = useTechnicianStore();

  useEffect(() => {
    getTechnicians();
  }, []);
  return <div>{technicians && <Dropdown technicians={technicians} />}</div>;
};

export default Home;
