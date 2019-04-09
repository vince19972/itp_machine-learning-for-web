import React, { useEffect } from 'react'
import './MainCanvas.css'

import * as posenet from '@tensorflow-models/posenet'
import { repaint } from '../../utilities/Canvas'
import loadVideo from '../../utilities/Camera'

function MainCanvas () {

	async function bindPage() {

		let video

		try {
			video = await loadVideo()
		} catch (e) {
			throw e
		}


		async function poseDetection() {
			const net = await posenet.load(0.75)

			const flipHorizontal = true
			const imageScaleFactor = 0.5
			const outputStride = 16

			const pose = net.estimateSinglePose(video, imageScaleFactor, flipHorizontal, outputStride)
			pose.then((pose) => repaint(video, pose))

			requestAnimationFrame(poseDetection)
		}

		poseDetection()
	}

  useEffect(() => {
    bindPage()
  })

	return (
    <div id='main'>
			<video id="video">
			</video>
			<canvas id="output" />
    </div>
	)

}

export default MainCanvas