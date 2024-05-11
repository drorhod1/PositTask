import { ChangeEvent, useState } from "react";

export default function CreateTicketForm() {
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
  return (
    <div>
      <p>Ticket info:</p>
      <form>
        <input
          onChange={onHandleChange}
          type="text"
          value={formState.title}
          name="title"
          placeholder="title"
        />
        <input
          name="description"
          onChange={onHandleChange}
          type="text"
          value={formState.description}
          placeholder="description"
        />
        <input
          name="customer_id"
          onChange={onHandleChange}
          type="text"
          value={formState.customer_id}
          placeholder="customer id"
        />
        <input
          onChange={onHandleChange}
          name="hardware_type"
          type="text"
          value={formState.hardware_type}
          placeholder="hardware type"
        />
        <input
          onChange={onHandleChange}
          type="text"
          value={formState.date}
          name="date"
          placeholder="date"
        />
      </form>
    </div>
  );
}
