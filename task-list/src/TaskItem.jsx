const TaskItem = ({ task, removeFromList }) => {
    return (
        <div className='task-item'>
            <p>{task}</p>
            <button onClick={() => removeFromList(task)}>Concluída</button>
        </div>
    );
};

export default TaskItem;
