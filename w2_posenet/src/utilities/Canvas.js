const canvasWidth = window.innerWidth / 2.5
const canvasHeight = window.innerHeight / 2
const minPoseConfidence = 0.1
const minPartConfidence = 0.5

export function drawPoint(ctx, y, x, r) {
	const grd = ctx.createLinearGradient(x, y, x+r, y)
	grd.addColorStop(0, "red")
	grd.addColorStop(1, "darkred")

  ctx.beginPath()
  ctx.arc(x, y, r, 0, 2 * Math.PI)
  ctx.fillStyle = grd
  ctx.fill()
}

export function drawKeypoints(keypoints, minConfidence, ctx, scale = 1) {

  for (let i = 0; i < keypoints.length; i++) {
    const keypoint = keypoints[i]

    if (keypoint.score < minConfidence) {
      continue
    }

    const {y, x} = keypoint.position
    drawPoint(ctx, y * scale, x * scale, 110)
  }
}

export function repaint(video, pose) {
  const canvas = document.getElementById('output')
  const ctx = canvas.getContext('2d')

  canvas.width = canvasWidth
	canvas.height = canvasHeight

	ctx.clearRect(0, 0, canvasWidth, canvasHeight)
	ctx.save()
	ctx.scale(-1, 1)
	ctx.translate(-canvasWidth, 0)
	ctx.drawImage(video, 0, 0, canvasWidth, canvasHeight)
	ctx.restore()

	// isPalmsMeet(pose)

	if (pose.score >= minPoseConfidence) {
		drawKeypoints(pose.keypoints, minPartConfidence, ctx)
	}
}
