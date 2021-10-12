function TodoItem({todo, onEditClick, onDeleteClick}) {
    return (
			<li className="p-4 mt-4 mx-auto max-w-xl grid grid-cols-2 gap-4 md:flex md:items-center md:justify-end md:gap-0 border-2 border-gray-900 bg-gray-800 rounded-md text-white">
				<div className="mr-auto col-span-2">{todo}</div>
				<button className="btn btn-primary" onClick={() => onEditClick(todo)}>
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