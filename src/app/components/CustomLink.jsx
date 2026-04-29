const CustomLink = ({ href, children, download = false }) => {
	return (
		<a
			href={href}
			download={download}
			className="text-blue-600 hover:text-blue-500 hover:underline transition duration-75 ease-in-out dark:text-blue-400 dark:hover:text-blue-300"
		>
			{children}
		</a>
	);
};

export default CustomLink;
