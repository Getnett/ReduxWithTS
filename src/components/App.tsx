import { Provider } from 'react-redux';
import { store } from '../store';
import NpmPackagesList from './RepositoriesList';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<h4>Search npm packages</h4>
			<NpmPackagesList />
		</Provider>
	);
};

export default App;
