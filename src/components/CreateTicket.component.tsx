import { uiText } from "@/constants/stringRes";
import { useTicketsStore } from "@/store/ticket.store";
import { ChangeEvent, useState } from "react";

export default function CreateTicketForm() {
  const { createTicket, resetCreated, ticketCreateError, created } =
    useTicketsStore();
  const [formState, setFormState] = useState({
    description: "",
    title: "",
    customer_id: "",
    hardware_type: "pinpad",
    date: "",
  });

  const [errors, setErrors] = useState({
    description: false,
    title: false,
    customer_id: false,
    hardware_type: false,
    date: false,
  });

  const validateField = (fieldName: keyof typeof formState) => {
    const fieldValue = formState[fieldName].trim();
    const isValid = fieldValue !== "";
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: !isValid }));
    return isValid;
  };

  const validateAllFields = () => {
    let isValid = true;
    Object.keys(formState).forEach((fieldName) => {
      if (!validateField(fieldName as keyof typeof formState)) {
        isValid = false;
      }
    });
    return isValid;
  };

  const onHandleChange = (
    ev: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = ev.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const sendCreate = () => {
    if (validateAllFields()) {
      createTicket(formState);
    }
  };

  return (
    <div>
      {ticketCreateError ? (
        <p className="error">{uiText.createTicketError}</p>
      ) : null}
      {created ? <p className="done">{uiText.doneBtn}</p> : null}
      <p className={`form-paragraph ${created && "done-form"}`}>
        {uiText.TicketInfo}
      </p>
      <form className={`form-container ${created && "done-form"}`}>
        <input
          onChange={onHandleChange}
          onBlur={() => validateField("title")}
          className={`input-field ${errors.title && "input-error"}`}
          type="text"
          value={formState.title}
          name="title"
          placeholder={uiText.title}
        />
        <input
          name="description"
          onChange={onHandleChange}
          onBlur={() => validateField("description")}
          className={`input-field ${errors.description && "input-error"}`}
          type="text"
          value={formState.description}
          placeholder={uiText.desc}
        />
        <input
          name="customer_id"
          onChange={onHandleChange}
          onBlur={() => validateField("customer_id")}
          className={`input-field ${errors.customer_id && "input-error"}`}
          type="text"
          value={formState.customer_id}
          placeholder={uiText.customerId}
        />
        <select
          defaultValue={"pinpad"}
          onChange={(ev: ChangeEvent<HTMLSelectElement>) => onHandleChange(ev)}
          onBlur={() => validateField("hardware_type")}
          name="hardware_type"
          className={`input-field ${errors.hardware_type && "input-error"}`}
          value={formState.hardware_type}
        >
          <option value="pinpad">Pinpad</option>
          <option value="scanner">Scanner</option>
          <option value="wieght">Wieght</option>
          <option value="biometric_reader">Biometric Reader</option>
        </select>
        <input
          onChange={onHandleChange}
          onBlur={() => validateField("date")}
          className={`input-field ${errors.date && "input-error"}`}
          type="date"
          value={formState.date}
          name="date"
          placeholder={uiText.date}
          min="2024-01-01"
          max="2025-12-31"
        />
      </form>
      <div className="button-div">
        {created ? (
          <button onClick={resetCreated}>{uiText.createAnother}</button>
        ) : (
          <button onClick={sendCreate}>{uiText.createTicket}</button>
        )}
      </div>
    </div>
  );
}
