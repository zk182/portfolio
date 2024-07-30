import Image from 'next/image';
import me from '../../me.jpg';

export default function Header() {
	return (
		<div className="flex items-center mb-4 md:mb-6">
			<div className="mr-8">
				<Image
					className="w-32 md:w-40 h-32 md:h-40 rounded-full bg-white object-cover object-top"
					src={me}
					alt="Nicolas Battaglia"
					width={160}
					height={160}
					quality={100}
					priority
				/>
			</div>
			<div>
				<p className="leading-tight text-gray-900 text-2xl md:text-3xl dark:text-gray-100">
					{`Hello, I'm`}
				</p>
				<h1 className="leading-tight text-gray-900 text-4xl md:text-5xl font-semibold dark:text-gray-100">
					Nicolas Battaglia
				</h1>
			</div>
		</div>
	);
}
