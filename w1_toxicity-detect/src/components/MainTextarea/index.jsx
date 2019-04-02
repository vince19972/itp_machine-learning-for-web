import React, { Component } from 'react'
import './MainTextarea.css'

import toxicDetect from '../../helpers/ToxicDetect'
import loader from '../../helpers/Loader'

const _  = require('underscore')

class MainTextarea extends Component {
	constructor(props) {
		super(props)

		this.state = {
			input: ''
		}

		this.handleChange = this.handleChange.bind(this)
		this.loadTf = this.loadTf.bind(this)

		// debounce
		this.loadTf = _.debounce(this.loadTf, 500)
	}

	handleChange(event) {
		this.setState({ input: event.target.value })
		this.loadTf()
	}

	loadTf () {
		loader.on()
		toxicDetect.loadModel()
			.then(model => {
				toxicDetect
					.classify(this.state.input)(model)
						.then(predictions => {
							toxicDetect.predict(predictions)
							loader.off()
						})
			})
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