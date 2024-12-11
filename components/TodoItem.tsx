import { Todo } from '@/types/todo.type';
import Button from './Button';

interface iProps {
	todo: Todo;
}
const TodoItem = ({ todo }: iProps) => {
	return (
		<div className='bg-slate-100 p-3 items-center gap-2 flex'>
			<span className='border size-6 border-green-500 rounded flex items-center justify-center'>
				{todo.completed && (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						strokeWidth={2}
						viewBox='0 0 24 24'
						stroke='currentColor'
						className='size-4 text-green-500'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='m4.5 12.75 6 6 9-13.5'
						/>
					</svg>
				)}
			</span>
			<p
				className={`flex-1 ${todo.completed && 'line-through text-slate-400'}`}
			>
				{todo.title}
			</p>
			<Button title='Edit' />
			<Button buttonType='error' title='Delete' />
		</div>
	);
};

export default TodoItem;
