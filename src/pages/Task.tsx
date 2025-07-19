import {  selectFilter, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";


const Task = () => {
    const task = useAppSelector(selectTasks);

    const filter = useAppSelector(selectFilter)
    console.log(filter);
    
    return (
        <div>
            <h1>This is task page --</h1>
        </div>
    );
};

export default Task;