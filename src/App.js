import React, { Component } from 'react';
import React, {CatComponent} from 'react';
import React, {GraceHopperQuoteComponent} from 'react';

class App extends React.Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				{/* one more component missing */}
			</div>
		);
	}
}

export default App;
