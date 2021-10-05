function TodoItem({todo, onEditClick, onDeleteClick}) {
    return (
			<li className="p-4 mt-4 mx-auto max-w-xl flex items-center justify-end border bg-gray-200 rounded-md">
				<div className="mr-auto">{todo}</div>
				<button 
					className="btn btn-primary" 
					onClick={() => onEditClick(todo)}
				>
					<i class="fas fa-pen"></i>
				</button>
				<button
					className="btn btn-danger"
					onClick={() => onDeleteClick(todo.id)}
				>
					<i class="fas fa-trash-alt"></i>
				</button>
			</li>
		);
}

export default TodoItem