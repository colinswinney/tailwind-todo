function TodoItem({todo, onEditClick, onDeleteClick}) {
    return (
			<li>
				{todo}
				<button onClick={() => onEditClick(todo)}>Edit</button>
				<button onClick={() => onDeleteClick(todo.id)}>Delete</button>
			</li>
		);
}

export default TodoItem