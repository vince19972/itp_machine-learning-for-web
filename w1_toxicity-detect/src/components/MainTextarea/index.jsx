import React, { Component } from 'react'
import './MainTextarea.css'

import toxicDetect from './ToxicDetect'

class MainTextarea extends Component {
	constructor(props) {
		super(props)

		this.state = {
			input: ''
		}

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({ input: event.target.value })

		toxicDetect.loadModel()
			.then(model => toxicDetect
				.classify(console.log('hehehehe'))(this.state.input)(model)
					.then(predictions => toxicDetect
						.predict(predictions)
					)
			)
	}

	render () {
		return (
			<textarea
				className="main-textarea"
				value={this.state.input}
				onChange={this.handleChange}
			/>
		)
	}

}

export default MainTextarea