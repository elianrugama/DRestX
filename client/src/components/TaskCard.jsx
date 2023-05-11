import {useNavigate} from 'react-router-dom';

export function TaskCard({task}) {
    const navigate = useNavigate();
    return (
        <>
        <div  onClick={
            () => navigate(`/task/${task.id}`)
        } className='bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer'>
        <h1 className='font-bold uppercase'>{task.title}</h1>
        <p className='text-slate-500'>{task.description}</p>
        </div>
        <br />
        </>
    );
}