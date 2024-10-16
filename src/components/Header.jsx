export const Header = (props) => {
    const {todos} = props;
    const isTasksPlural = todos.length !== 1;
    const tasksOrTask = isTasksPlural ? "tasks":"task"
    return (
        <header>
            <h1 className="text-gradient">
                You have {todos.length} open {tasksOrTask}.
            </h1>
        </header>
    )
}