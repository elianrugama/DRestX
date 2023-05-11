//routerdom
import { Router, Route, BrowserRouter, Routes, Navigate  } from 'react-router-dom';
//pages
//touster
import { Toaster } from 'react-hot-toast';
import { TaskPage } from './pages/TaskPage';
import { TaskFormPage } from './pages/TaskFormPage';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <header className="p-4">
    <BrowserRouter>
    <div className='container mx-auto'>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Navigate to="/task" />} />
      <Route path="/task" element={< TaskPage/>} />
      <Route path="/task-create" element={<TaskFormPage />} />
      <Route path="/task/:id" element={<TaskFormPage />} />
    </Routes>
    <Toaster />
    </div>
    
    </BrowserRouter>
    </header>
   
    
    );

}
