import React, { Component } from 'react'
import './MainCanvas.css'

import * as posenet from '@tensorflow-models/posenet'
import { repaint } from '../../utilities/Canvas'
import loadVideo from '../../utilities/Camera'

class MainCanvas extends Component {
	constructor(props) {
		super(props)

		this.state = {
			input: '',
			mainColor: 'rgba(180, 0, 0, 0)'
		}

		this.bindPage = this.bindPage.bind(this)
	}

	componentDidMount() {
		this.bindPage()
	}

	async bindPage() {

		let video

		try {
			video = await loadVideo()
		} catch (e) {
			throw e
		}

		const net = await posenet.load(0.75)
		const canvas = document.getElementById('output')
		const ctx = canvas.getContext('2d')
		const canvasWidth = window.innerWidth / 2.5
		const canvasHeight = window.innerHeight / 2
		canvas.width = canvasWidth
		canvas.height = canvasHeight

		async function poseDetection() {
			const flipHorizontal = true
			const imageScaleFactor = 0.5
			const outputStride = 16

			const pose = net.estimateSinglePose(video, imageScaleFactor, flipHorizontal, outputStride)
			pose.then((pose) => repaint(video, pose, {
				ctx,
				canvasWidth,
				canvasHeight
			}))

			requestAnimationFrame(poseDetection)
		}

		poseDetection()
	}

	render () {
		return (
			<div id='main'>
				<video id="video"></video>
				<canvas id="output" />
			</div>
		)
	}

}

export default MainCanvas