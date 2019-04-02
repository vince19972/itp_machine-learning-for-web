import React, { Component } from 'react'
import './Board.css'

import MainTextarea from '../MainTextarea'

class Board extends Component {

	render () {
		return (
			<div className="board">
				<MainTextarea/>
			</div>
		)
	}

}

export default Board