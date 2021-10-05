function AddTodoForm({ todo, onAddFormSubmit, onAddInputChange }) {
	return (
		<form onSubmit={onAddFormSubmit} className="form">
			<label htmlFor="todo" className="text-white">Add</label>
			<div className="flex">
				<input
					name="todo"
					type="text"
					placeholder="Add new"
					value={todo}
					onChange={onAddInputChange}
					className="input"
				/>
				<button className="btn btn-submit" type="submit">
					<i class="fas fa-plus"></i>
				</button>
			</div>
		</form>
	);
}

export default AddTodoForm