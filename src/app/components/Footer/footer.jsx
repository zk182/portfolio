export default function Footer() {
	return (
		<footer className="flex items-center h-10 w-full justify-center mt-12 mb-[5%]">
			<div className="absolute left-0 right-0 w-screen z-[-1]"></div>
			<div className="bg-black h-10 px-10 py-2 rounded-full tw-1f9izd8 dark:bg-gray-900 flex items-center gap-4">
				<a
					className="text-gray-500 hover:text-white transition duration-75 ease-in-out dark:text-gray-400 dark:hover:text-white"
					href="https://github.com/zk182"
					title="GitHub"
				>
					<span className="sr-only">GitHub</span>
					<svg
						className="h-6 w-6 inline"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							fillRule="evenodd"
							d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
							clipRule="evenodd"
						></path>
					</svg>
				</a>
				<a
					className="text-gray-500 hover:text-white transition duration-75 ease-in-out dark:text-gray-400 dark:hover:text-white"
					href="https://stackoverflow.com/users/13227989/nicol%c3%a1s-battaglia"
					title="Stack Overflow"
				>
					<span className="sr-only">Stack Overflow</span>
					<svg
						className="h-6 w-6 inline"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							fillRule="evenodd"
							d="M17.5 21h-11a.5.5 0 01-.5-.5v-5a.5.5 0 011 0v4.5h10V15.5a.5.5 0 011 0v5a.5.5 0 01-.5.5zM10 14.75h5v1h-5v-1zM10.291 12.75l5 .898-.158.987-5-.898.158-.987zM11.035 10.95l4.328 2.502-.503.865-4.328-2.502.503-.865zM12.24 9.115l3.573 3.573-.707.707-3.573-3.573.707-.707zM14.3 6.5l2.502 4.328-.865.503-2.502-4.328.865-.503zM17 4.5v5h-1v-5h1z"
							clipRule="evenodd"
						></path>
					</svg>
				</a>
				<a
					className="text-gray-500 hover:text-white transition duration-75 ease-in-out dark:text-gray-400 dark:hover:text-white"
					href="https://linkedin.com/in/nicobattaglia"
					title="LinkedIn"
				>
					<span className="sr-only">LinkedIn</span>
					<svg
						className="h-6 w-6 inline"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path d="M20.447 20.452H16.87v-5.569c0-1.33-.028-3.043-1.858-3.043-1.86 0-2.144 1.452-2.144 2.952v5.66H9.285V9.334h3.41v1.518h.047c.475-.9 1.637-1.851 3.366-1.851 3.6 0 4.266 2.368 4.266 5.456v6.995zM5.337 7.433c-1.096 0-1.984-.888-1.984-1.984s.888-1.984 1.984-1.984 1.984.888 1.984 1.984-.888 1.984-1.984 1.984zM7.117 20.452H3.557V9.334h3.56v11.118zM22.225 0H1.771C.792 0 0 .774 0 1.728v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.27V1.728C24 .774 23.2 0 22.225 0z" />
					</svg>
				</a>
			</div>
		</footer>
	);
}
