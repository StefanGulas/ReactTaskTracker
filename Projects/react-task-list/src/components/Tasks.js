import Task from './Task'

const Tasks = ({ tasks, onDelete1, onToggle1, showAdd}) => {
    // const onDelete1 = (id) => {
    //     console.log('delete1', id)
    // }
    
    return (
        <>
            {tasks.map((task) => (
            <Task key={task.id} task={task} 
            onDelete1={onDelete1}
            onToggle1={onToggle1}
            showAdd={showAdd}
            />
            ))}
        </>
    )
}

export default Tasks
