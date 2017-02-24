import React 		from 'react';
import ReactDOM from 'react-dom';
import { Slider } from 'react-mdl';
import { isEqual } from 'lodash';


class Index extends React.Component {

	componentWillMount() {
		console.log(isEqual(1010, 1010) );
	}

	render() {
		return <Slider min={0} max={100} defaultValue={0} />;
	}
};


ReactDOM.render(<Index />, document.getElementById('react-mount'));
