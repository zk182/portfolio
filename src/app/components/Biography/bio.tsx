import CustomLink from '@/components/CustomLink';

export default function Bio() {
	return (
		<div className="mt-16 leading-7 text-gray-900 text-lg dark:text-gray-100">
			<p>
				Developer and{' '}
				<CustomLink href="https://github.com/zk182">
					open source enthusiast
				</CustomLink>
				. I like Javascript, Deno and fast websites. I work at{' '}
				<CustomLink href="https://denode.com/">denode</CustomLink> company,
				building solutions and contributing to open source tools. I am
				mostly a backend guy. Probably reading some web spec right now.
			</p>
			<p className="mt-16">
				Need my cv? Get it{' '}
				<CustomLink href="https://nicobatt-cv.vercel.app/">here</CustomLink>
				.
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
