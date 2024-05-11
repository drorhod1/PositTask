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
