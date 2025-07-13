export function Header(props) {
    const { todos } = props
    const todosLength = todos.length
    const isTasksPlural = todosLength != 1
    const taskOrTasks = isTasksPlural ? "tasks" : "task"




    return (
        <header>
            <h1 className="text-gradient">You have a {todosLength} of open {taskOrTasks }.</h1>
        </header>
    )
}