import { useState } from 'react';

const AddItemsContainer = ({ addToList }) => {
    const [newTask, setNewTask] = useState('');

    const handleAdd = () => {
        if (newTask.trim() !== '') {
            addToList(newTask);
            setNewTask('');
        }
    };

    return (
        <div className='add-items-container'>
            <input
                type='text'
                value={newTask}
                onChange={(evt) => setNewTask(evt.target.value)}
            />
            <button onClick={handleAdd}>Adicionar</button>
        </div>
    );
};

export default AddItemsContainer;
