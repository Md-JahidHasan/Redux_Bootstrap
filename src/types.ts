export interface Itask {
    id: string;
  title: string;
  descripton:string;
  dueDate: string;
  isCompleted: boolean;
  priority: "High" | "Medium" | "Low";
}