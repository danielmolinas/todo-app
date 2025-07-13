import { TodoCard } from "./TodoCard"

export function TodoList(props) {
    const { todos, selectedTab } = props
    

    const filterTodosList = selectedTab === "All" ?
        todos :
        selectedTab === "Completed" ?
            todos.filter(val => val.complete) :
            todos.filter(val => !val.complete)

    return (
        <>
            {filterTodosList.map((todo) => {
                // Find the actual index in the original todos array
                const actualIndex = todos.findIndex(t => t === todo)
                return (
                    <TodoCard 
                    key={actualIndex} 
                    todoIndex={actualIndex}
                    {...props}
                    todo={todo} />
                )
            })}
        
        
        
        </>
    )
}