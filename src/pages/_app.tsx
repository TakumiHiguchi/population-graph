import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';
import 'ress';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	const SafeHydrate = dynamic(() => import('components/atoms/SafeHydrate'), {
		ssr: false,
	});

	return (
		<SafeHydrate>
			<Component {...pageProps} />
		</SafeHydrate>
	);
}
export default MyApp;
