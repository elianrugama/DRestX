import {useForm} from 'react-hook-form';
import { createTask, deleteTask, getTask, updateTask } from '../api/task.api';
import {useParams,useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';

import {toast} from 'react-hot-toast';
export function TaskFormPage() {
    const parans= useParams();
    const navigate = useNavigate();
    console.log(parans);
    const {register,setValue, handleSubmit, formState:{
        errors
    }} = useForm();

    const onsSubmit = handleSubmit(async (data) => {
        console.log(data);
        if(parans.id){
            await updateTask(parans.id, data);
            toast.success('Tarea Actualizada');
            navigate('/task/'+parans.id);
            
        }else{
            await createTask(data);
            console.log('create');
            toast.success('Tarea Creada');
            navigate('/task');

        }
        
       
    });

    useEffect(() => {
        async function load(){
            if(parans.id){
                const res = await getTask(parans.id);
                console.log(res);
                setValue('title', res.data.title);
                setValue('description', res.data.description);   
            }

        }
        load();
    }, []);


    return (
        <div className= "max-w-xl mx-auto">
        
        <h1 className='font-bold text-2xl'>{parans.id ? 'Edit Task' : 'Create Task'}</h1>

        <form action="" onSubmit={onsSubmit} id='formtask'>
            <input type="text" placeholder='Title'
            {...register("title", {required: true, maxLength: 80})}
            className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'/>
            {errors.title && <span>Title is required</span>}
            <textarea rows="3"
            {...register("description", {required:true})} className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'></textarea>
            {errors.description && <span>description is required</span>}

            
            
            
            
            
            
        </form>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit" onClick={
            () => {
                onsSubmit();
            }
        }>Save</button>
        {
            parans.id && <button onClick={
                async () => {
                    const accept = window.confirm('Estas seguro de eliminar esta tarea?');
                    if(accept){
                        console.log('YES');
                        await deleteTask(parans.id);
                        toast.success('Tarea Eliminada');
                        navigate('/task');

                    }else{
                        console.log('NO');
                    }
                    
                }
                
            }
            className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Delete</button>
        }
       
        
        </div>
        
    );
}