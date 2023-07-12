import { Layout } from '../Layout';
import { Sidebar } from '../Sidebar';

function HomeLayout({ children }) { 
	return (
		<Layout>
			<div className="w-full flex flex-row h-full">
				<Sidebar />
				<div className="w-3/4 mr-20">
					{ children }
				</div>
			</div>
		</Layout>
	)
}

export { HomeLayout }