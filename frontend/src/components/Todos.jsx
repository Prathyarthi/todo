export function Todos({ todos }) {
    return <div>
        {todos.map(function (todo) {
            return <div>
                <h2>{todos.title}</h2>,
                <h2>{todos.description}</h2>,
                <button>{todo.completed == true ? "completed" : "Mark as done!"}</button>
            </div>
        })}
    </div>
}