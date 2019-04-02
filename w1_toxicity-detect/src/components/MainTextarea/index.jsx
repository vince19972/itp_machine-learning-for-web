import React, { Component } from 'react'
import './MainTextarea.css'

import toxicDetect from '../../helpers/ToxicDetect'
import loader from '../../helpers/Loader'

const _  = require('underscore')

class MainTextarea extends Component {
	constructor(props) {
		super(props)

		this.state = {
			input: '',
			mainColor: 'rgba(180, 0, 0, 0)'
		}

		this.handleChange = this.handleChange.bind(this)
		this.loadTf = this.loadTf.bind(this)
		this.handlePredictResult = this.handlePredictResult.bind(this)

		// debounce
		this.loadTf = _.debounce(this.loadTf, 1000)
	}

	handleChange(event) {
		this.setState({ input: event.target.value })
		this.loadTf()
	}

	loadTf() {
		loader.on()
		toxicDetect.loadModel()
			.then(model => {
				toxicDetect
					.classify(this.state.input)(model)
						.then(predictions => {
							this.handlePredictResult(toxicDetect.predict(predictions))
							loader.off()
						})
			})
	}

	handlePredictResult(predictions) {
		// get toxicity result
		const result = predictions[6].results[0]
		const [falseProbability, trueProbability] = result.probabilities

		this.setState({
			mainColor: `rgba(0, 0, 0, ${trueProbability + 0.05})`,
		})
	}

	render () {
		return (
			<textarea
				className="main-textarea"
				value={this.state.input}
				onChange={this.handleChange}
				style={{ backgroundColor: this.state.mainColor }}
			/>
		)
	}

}

export default MainTextarea