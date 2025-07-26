import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {  selectFilter, selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";


const Task = () => {
    const task = useAppSelector(selectTasks);

    const dispatch = useAppDispatch()

    const filter = useAppSelector(selectFilter)
    console.log(filter);
    
    return (
      <div className=" max-w-7xl mx-auto px-5 mt-16">
        <div className="flex justify-end gap-5 ">
          <h1 className="mr-auto">Tasks</h1>
          <Tabs defaultValue="All">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger
                onClick={() => dispatch(updateFilter("All"))}
                className="w-32"
                value="All"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                onClick={() => dispatch(updateFilter("Low"))}
                value="Low"
              >
                Low
              </TabsTrigger>
              <TabsTrigger
                onClick={() => dispatch(updateFilter("Medium"))}
                value="Medium"
              >
                Medium
              </TabsTrigger>
              <TabsTrigger
                onClick={() => dispatch(updateFilter("High"))}
                value="High"
              >
                High
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <AddTaskModal></AddTaskModal>
        </div>
        <div className="space-y-5 mt-5">
          {task.map((task) => (
            <TaskCard key={task.id} task={task}>
              {" "}
            </TaskCard>
          ))}
        </div>
      </div>
    );
};


export default Task;