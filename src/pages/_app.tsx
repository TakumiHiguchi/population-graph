import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'ress';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
	const SafeHydrate = dynamic(() => import('components/atoms/SafeHydrate'), {
		ssr: false,
	});

	return (
		<SafeHydrate>
			<ToastContainer />
			<Component {...pageProps} />
		</SafeHydrate>
	);
}
export default MyApp;
