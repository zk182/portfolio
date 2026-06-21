import CustomLink from '@/components/CustomLink';

export default function Bio() {
	return (
		<div className="mt-16 leading-7 text-gray-900 text-lg dark:text-gray-100">
			<p>
				I like Javascript, Go & lately been diving into Rust 🦀. Working at{' '}
				<CustomLink href="https://modo.com.ar/">Modo</CustomLink> building a{' '}
				<CustomLink href="https://www.linkedin.com/pulse/transformando-el-transporte-p%C3%BAblico-con-vqr-en-as%C3%AD-la-di-loreto-bpc7f/?trackingId=Yr0G9Xs1QZCFa4MBnf1GRg%3D%3D">
					public transport solution
				</CustomLink>{' '}
				from scratch used all over Argentina. Mostly, a backend guy. Reading
				about{' '}
				<CustomLink href="https://blog.levelupcoding.com/">
					software design patterns
				</CustomLink>{' '}
				right now
			</p>{' '}
			<p className="mt-16">
				My cv
				<CustomLink href="/nicolas-battaglia-cv.pdf" download>
					here
				</CustomLink>
				.
			</p>
			<p className="mt-16">
				Want to deep dive into my work?{' '}
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
