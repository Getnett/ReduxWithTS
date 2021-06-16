import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelectors';
import { useActions } from '../hooks/useActions';

const NpmPackagesList: React.FC = () => {
	const [npmPackageName, setNpmPackageName] = useState('');
	const { searchNpmPackages } = useActions();
	const { data, error, loading } = useTypedSelector((state) => state.npmPackages);
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		searchNpmPackages(npmPackageName);
	};

	return (
		<div>
			<form action="" onSubmit={onSubmit}>
				<input type="text" value={npmPackageName} onChange={(e) => setNpmPackageName(e.target.value)} />
				<button type="submit"> search </button>
			</form>

			{error && <h2>{error}</h2>}
			{loading && <h2>Loadding...</h2>}
			{!loading && !error && data.map((name) => <div> {name}</div>)}
		</div>
	);
};

export default NpmPackagesList;
