/**
 *
 * The code is revised from https://github.com/tensorflow/tfjs-models/tree/master/posenet/demos
 *
*/
import * as posenet from '@tensorflow-models/posenet'

export default async function poseDetection(video) {
	const net = await posenet.load(0.75)

	const flipHorizontal = true
	const imageScaleFactor = 0.5
	const outputStride = 16

	const pose = net.estimateSinglePose(video, imageScaleFactor, flipHorizontal, outputStride)
	return pose
}