import "@/styles/globals.css";
import MainLayout from "../components/layouts/Main";
export default function App({ Component, pageProps }) {
	return (
		<MainLayout>
			<Component {...pageProps} />
		</MainLayout>
	);
}
