import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import AddTodoForm from "./components/AddTodoForm";
import EditTodoForm from "./components/EditTodoForm";

function App() {
	const [todos, setTodos] = useState(() => {
		const savedTodos = localStorage.getItem("todos");

		if (savedTodos) {
			return JSON.parse(savedTodos);
		} else {
			return [];
		}
	});
	const [todo, setTodo] = useState("");
	const [isEditing, setIsEditing] = useState(false);
	const [currentTodo, setCurrentTodo] = useState("");

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	function handleAddInputChange(e) {
		setTodo(e.target.value);
	}

	function handleAddFormSubmit(e) {
		e.preventDefault();

		if (todo !== "") {
			setTodos([
				...todos,
				{
					id: todos.length + 1,
					text: todo.trim(),
				},
			]);
		}

		setTodo("");
	}

	function handleDeleteClick(id) {
		const removeItem = todos.filter((todo) => {
			return todo.id !== id;
		});
		setTodos(removeItem);
	}

	function handleEditInputChange(e) {
		setCurrentTodo({...currentTodo, text: e.target.value})
	}

	function handleEditClick(todo) {
		setIsEditing(true);
		setCurrentTodo({...todo});
	}

	function handleUpdateTodo(id, updatedTodo) {
		const updatedItem = todos.map((todo) => {
			return todo.id === id ? updatedTodo : todo;
		});
		setIsEditing(false);
		setTodos(updatedItem);
	}

	function handleEditFormSubmit(e) {
		e.preventDefault();
		handleUpdateTodo(currentTodo.id, currentTodo);
	}

	return (
		<div className="p-4 pt-12 min-h-screen bg-gradient-to-br from-indigo-900 to-indigo-700">
			<h2 className="pb-4 flex-1 text-5xl text-white text-center font-black">
				Todo App
			</h2>
			{isEditing ? (
				<EditTodoForm
					currentTodo={currentTodo}
					setIsEditing={setIsEditing}
					onEditInputChange={handleEditInputChange}
					onEditFormSubmit={handleEditFormSubmit}
				/>
			) : (
				<AddTodoForm
					todo={todo}
					onAddFormSubmit={handleAddFormSubmit}
					onAddInputChange={handleAddInputChange}
				/>
			)}

			<ul className="m-auto">
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo.text}
						onEditClick={() => handleEditClick(todo)}
						onDeleteClick={() => handleDeleteClick(todo.id)}
					/>
				))}
			</ul>
		</div>
	);
}

export default App;
