'use client';
import Button from '@/components/Button';
import TodoItem from '@/components/TodoItem';
import { Todo } from '@/types/todo.type';
import { useRef, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
const initialTodos: Todo[] = [
	{
		userId: 1,
		id: 1,
		title: 'delectus aut autem',
		completed: false,
	},
	{
		userId: 1,
		id: 2,
		title: 'quis ut nam facilis et officia qui',
		completed: false,
	},
	{
		userId: 1,
		id: 3,
		title: 'fugiat veniam minus',
		completed: false,
	},
	{
		userId: 1,
		id: 4,
		title: 'et porro tempora',
		completed: true,
	},
];
const page = () => {
	const [todos, setTodos] = useState(initialTodos);
	const inputRef = useRef<any>(null);

	const addNewTodo = (e: React.FormEvent) => {
		e.preventDefault();
		const newTodo = {
			userId: 1,
			id: uuidV4(),
			title: inputRef.current?.value,
			completed: false,
		};

		setTodos([...todos, newTodo]);
		inputRef.current.value = null;
	};

	const deleteTodo = (id: number | string) => {
		setTodos(todos.filter((item) => item.id !== id));
	};

	console.log('site refreshed');
	return (
		<div className='flex flex-1 justify-center items-center pt-10 h-full'>
			<div className='w-1/2 bg-white space-y-5 py-10 px-5'>
				<h3 className='text-3xl font-bold text-center'>Todo App</h3>

				<form onSubmit={addNewTodo} className='flex'>
					<input required ref={inputRef} className='border-2 flex-1' />
					<Button title='Add Todo' />
				</form>

				<div className='space-y-3 h-[500px] overflow-auto'>
					{todos.map((todo) => (
						<TodoItem deleteTodo={deleteTodo} key={todo.id} todo={todo} />
					))}
				</div>
			</div>
		</div>
	);
};

export default page;
