import React from 'react';
import NavBarContainer from '../navbar/navbar_container';


class Main extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return (
			<main className="main">
				<NavBarContainer />
			</main>
		)
	}
}

export default Main