import { Link, useParams } from "react-router-dom";

export default function Navigation() {
    const { id } = useParams();

    return (
        <div className="flex justify-between py-3">
            <div>
                <Link to="/">
                    <h1 className="text-2xl font-bold">Task Manager</h1>
                </Link>
            </div>
            

            <div className="flex">
                <Link to="/task" className="mr-3">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Task
                    </button>
                </Link>
                <Link to="/task-create">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Create Task
                    </button>
                </Link>

            </div>
            


            
        </div>
    );
}