import TaskItem from './TaskItem';

const ItemsContainer = ({ taskList, removeFromList }) => {
    return (
        <div className='items-container'>
            {taskList.map((t, idx) => (
                <TaskItem task={t} removeFromList={removeFromList} key={`task-item-${idx}`}/>
            ))}
        </div>
    );
};

export default ItemsContainer;
