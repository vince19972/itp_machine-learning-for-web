const loader = {}
const rootElement = document.getElementById('root')
const styleFlag = '-is-loading'

loader.on = () => {
	rootElement.classList.add(styleFlag)
}

loader.off = () => {
	rootElement.classList.remove(styleFlag)
}

export default loader