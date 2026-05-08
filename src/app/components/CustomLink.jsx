const CustomLink = ({ href, children, download = false }) => {
	const isExternal = href?.startsWith('http') || href?.startsWith('mailto');
	return (
		<a
			href={href}
			download={download}
			{...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
			className="text-blue-600 hover:text-blue-500 hover:underline transition duration-75 ease-in-out dark:text-blue-400 dark:hover:text-blue-300"
		>
			{children}
		</a>
	);
};

export default CustomLink;
