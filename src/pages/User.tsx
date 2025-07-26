import { AddTaskModal } from '@/components/module/tasks/AddTaskModal';
import AddUserModal from '@/components/module/tasks/AddUserModal';
import { selectUsers } from '@/redux/features/user/userSlice';
import { useAppSelector } from '@/redux/hook';
import { Trash2 } from 'lucide-react';
import React from 'react';

const User = () => {

    const users = useAppSelector(selectUsers)

    return (
      <div className="max-w-7xl mx-auto px-5 mt-16">
        <div className="flex justify-end">
          <AddUserModal></AddUserModal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-md rounded-2xl p-4 text-center border hover:shadow-lg transition flex justify-between"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {user.name}
              </h2>
              <button
                // onClick={() => onDelete(user.id)}
                className="ml-4  text-white rounded-md transition"
              >
                <Trash2 className='w-4 text-red-500 hover:text-red-700 '></Trash2>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
};

export default User;