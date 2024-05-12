import { uiText } from "@/constants/stringRes";
import { useTicketsStore } from "@/store/ticket.store";
import { ChangeEvent, useState } from "react";

export default function CreateTicketForm() {
  const { createTicket } = useTicketsStore();
  const [formState, setFormState] = useState({
    description: "",
    title: "",
    customer_id: "",
    hardware_type: "",
    date: "",
  });
  const onHandleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const name = ev.target.name;
    const value = ev.target.value;
    setFormState((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const sendCreate = () => {
    createTicket(formState);
  };
  return (
    <div>
      <p className="form-paragraph">{uiText.TicketInfo}</p>
      <form className="form-container">
        <input
          onChange={onHandleChange}
          className="input-field"
          type="text"
          value={formState.title}
          name="title"
          placeholder={uiText.title}
        />
        <input
          name="description"
          onChange={onHandleChange}
          className="input-field"
          type="text"
          value={formState.description}
          placeholder={uiText.desc}
        />
        <input
          name="customer_id"
          onChange={onHandleChange}
          className="input-field"
          type="text"
          value={formState.customer_id}
          placeholder={uiText.customerId}
        />
        <input
          onChange={onHandleChange}
          className="input-field"
          name="hardware_type"
          type="text"
          value={formState.hardware_type}
          placeholder={uiText.hardwareType}
        />
        <input
          onChange={onHandleChange}
          className="input-field"
          type="text"
          value={formState.date}
          name="date"
          placeholder={uiText.date}
        />
      </form>
      <div className="button-div">
        <button onClick={sendCreate}>{uiText.createTicket}</button>
      </div>
    </div>
  );
}
