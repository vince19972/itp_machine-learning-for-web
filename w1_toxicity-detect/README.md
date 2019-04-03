# Toxicity Detector by Tensorflow.js

![demo gif](https://raw.githubusercontent.com/vince19972/itp_machine-learning-for-web/master/_documents/toxicity-detect.gif)

- Documentation blog post [is here](https://www.vinceshao.com/blog/m-l4-w-toxicity-detector-by-tensorflow)
- This project is based on [Toxicity classifier model](https://github.com/tensorflow/tfjs-models/tree/master/toxicity) by [Tensorflow.js](https://github.com/tensorflow)
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

## Description

The idea is to use the toxicity classifier model trained by Tensorflow to build a instant detector for the inputs. If toxic content is detected, the textarea would transition to black canvas to cover it. Only removing the toxic content would reveal the text again.

This app is only listening to dynamic user input at the moment, but it could possibly be combined with web crawler to process target content for future application.

### Run the program

In the project directory, you can run:

#### `npm install` and `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.