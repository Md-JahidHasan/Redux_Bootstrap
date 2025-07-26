export interface Itask {
    id: string;
  title: string;
  description:string;
  dueDate: string;
  isCompleted: boolean;
  priority: "High" | "Medium" | "Low";
  assignTo: string | null;
}


export interface Iuser{
  id: string;
  name: string
}