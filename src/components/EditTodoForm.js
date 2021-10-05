function EditTodoForm({ currentTodo, setIsEditing, onEditInputChange, onEditFormSubmit}) {
    return (
			<form onSubmit={onEditFormSubmit} className="form">
				<label htmlFor="editTodo" className="text-white">
					Edit
				</label>
				<div className="flex">
					<input
						name="editTodo"
						type="text"
						placeholder="Edit todo"
						value={currentTodo.text}
						onChange={onEditInputChange}
						className="input"
					/>
                    
					<button
						className="btn btn-danger"
						onClick={() => setIsEditing(false)}
					>
						<i class="fas fa-times"></i>
					</button>

					<button type="submit" className="btn btn-submit">
						<i class="fas fa-plus"></i>
					</button>
				</div>
			</form>
		);
}

export default EditTodoForm