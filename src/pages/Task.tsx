import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import {  selectFilter, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";


const Task = () => {
    const task = useAppSelector(selectTasks);

    const filter = useAppSelector(selectFilter)
    console.log(filter);
    
    return (
      <div className=" max-w-7xl mx-auto px-5 mt-20">
        <div className="flex justify-between">
                <h1>Tasks</h1>
                <AddTaskModal></AddTaskModal>
        </div>
        <div className="space-y-5 mt-5">
          {task.map((task) => (
            <TaskCard key={task.id} task={task}> </TaskCard>
          ))}
        </div>
      </div>
    );
};


export default Task;