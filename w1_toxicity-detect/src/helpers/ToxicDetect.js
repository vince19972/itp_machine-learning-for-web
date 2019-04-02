import * as toxicity from '@tensorflow-models/toxicity'

const toxicDetect = {}

// The minimum prediction confidence.
const threshold = 0.9

toxicDetect.loadModel = () => toxicity.load(threshold)
toxicDetect.classify = (text) => (model) => model.classify(text)
toxicDetect.predict = (predictions) => console.log(predictions)

export default toxicDetect