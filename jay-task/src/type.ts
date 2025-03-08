export interface Task {
  title: string,
  status: "inprogress" | "pending" | "completed",
  priority: "low" | "high" | "medium",
  category: string,
  id: number
}
export type Theme = "dark" | "light";
