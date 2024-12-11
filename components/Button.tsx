interface iProps {
	title: string;
	buttonType?: 'success' | 'error';
	onClick?: any;
}

const Button = ({ title, buttonType = 'success', onClick }: iProps) => {
	const bgColor =
		buttonType === 'success'
			? 'bg-green-500'
			: buttonType === 'error'
			? 'bg-red-500'
			: '';
	return (
		<button
			onClick={onClick}
			className={`py-2 px-5 rounded text-white ${bgColor}`}
		>
			{title}
		</button>
	);
};

export default Button;
