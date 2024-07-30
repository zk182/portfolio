import Footer from './components/Footer/footer';
import Biography from './components/Biography';

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-grow mx-auto max-w-screen-md px-4 sm:px-6 md:px-8 my-12 sm:my-20 md:my-32">
				<Biography />
			</main>
			<Footer />
		</div>
	);
}
