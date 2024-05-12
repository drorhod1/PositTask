export interface ITicket {
  id: number;
  title: string;
  description?: string;
  customer_id: number;
  hardware_type: string;
  warehouse_id: number;
  warehouse: string;
  assigned_technician_id?: number;
  date: string;
}

export interface ITicketCreate {
  description: string;
  title: string;
  customer_id: string;
  hardware_type: string;
  date: string;
}
