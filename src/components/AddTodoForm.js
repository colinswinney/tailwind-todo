function AddTodoForm({ todo, onAddFormSubmit, onAddInputChange }) {
	return (
		<form onSubmit={onAddFormSubmit}>
			<h2>Add Todo:</h2>
			<label htmlFor="todo">Add todo: </label>
			<input
				name="todo"
				type="text"
				placeholder="Add new"
				value={todo}
				onChange={onAddInputChange}
			/>
			<button type="submit">Submit</button>
		</form>
	);
}

export default AddTodoForm