import { Navbar } from '../Navbar';
import { Hero } from '../Hero';
import { Footer } from '../Footer';

function Layout({ children }) { 
	return (
		<>
			<Navbar />
				<div className="min-h-screen min-h-[calc(100vh-336px)]">
					{ children }
				</div>
			<Footer />
		</>
	)
}

export { Layout }