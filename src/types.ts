export interface Itask {
    id: string;
  title: string;
  description:string;
  dueDate: string;
  isCompleted: boolean;
  priority: "High" | "Medium" | "Low";
}


export interface Iuser{
  id: string;
  name: string
}