import CustomLink from '@/components/CustomLink';

export default function Bio() {
	return (
		<div className="mt-16 leading-7 text-gray-900 text-lg dark:text-gray-100">
			<p>
				I like Javascript, Go & lately been diving into Rust 🦀. Working at{' '}
				<CustomLink href="https://modo.com.ar/">modo</CustomLink> building a{' '}
				<CustomLink href="https://www.linkedin.com/pulse/transformando-el-transporte-p%C3%BAblico-con-vqr-en-as%C3%AD-la-di-loreto-bpc7f/?trackingId=Yr0G9Xs1QZCFa4MBnf1GRg%3D%3D">
					transport
				</CustomLink>{' '}
				solution from scratch used all over Argentina. Mostly, a backend
				guy. Reading about{' '}
				<CustomLink href="https://blog.levelupcoding.com/">
					designs
				</CustomLink>{' '}
				right now
			</p>{' '}
			<p className="mt-16">
				Need my cv? Get it{' '}
				<CustomLink href="/nicolas-battaglia-cv.pdf" download>
					here
				</CustomLink>
				.
			</p>
			<p className="mt-16">
				Want to deep dive into my work?{' '}
				<CustomLink href="https://nicobattcv.vercel.app/">
					My page.
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
