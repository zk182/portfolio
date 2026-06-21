import CustomLink from '@/components/CustomLink';

export default function Bio() {
	return (
		<div className="mt-16 leading-7 text-gray-900 text-lg dark:text-gray-100">
			<p>
				I like Javascript, Go & lately been diving into Rust 🦀. Working at{' '}
				<CustomLink href="https://www.cashea.app/">Cashea</CustomLink>.
				Mostly, a backend guy. Reading about{' '}
				<CustomLink href="https://blog.levelupcoding.com/">
					software design patterns
				</CustomLink>{' '}
				and{' '}
				<CustomLink href="https://frontendmasters.com/blog/your-node-js-streams-arent-backpressuring-theyre-silently-eating-your-memory/">
					backpressure
				</CustomLink>
				.
			</p>{' '}
			<p className="mt-16">
				Need my cv? Get it{' '}
				<CustomLink href="/nicolas-battaglia-cv.pdf" download>
					here
				</CustomLink>
				.
			</p>
			<p className="mt-16">
				Want to deep dive into my work? Here{"'"}s my{' '}
				<CustomLink href="https://nicobattcv.vercel.app/">
					portfolio
				</CustomLink>
			</p>
			<p className="mt-16">
				Wanna talk about something? Email me at{' '}
				<CustomLink href="mailto:nicobattmdq@gmail.com">
					nicobattmdq@gmail.com
				</CustomLink>
				.
			</p>
		</div>
	);
}
