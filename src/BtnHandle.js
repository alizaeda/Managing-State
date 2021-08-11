import React from 'react';

const BtnHandle = (props) => {
  return (
  	<div>
    	<button type="button" onClick={() => props.OnSolveQuestion}>True</button>
    	<button type="button">False</button>
    </div>
  )
}

export default BtnHandle

{/*OnClickBtn (numCorrect, numQuestions) {
  	this.setState((currState) => {
    	currState.numQuestions += 1
    })
   */}
<BtnHandle OnSolveQuestion={this.state.OnClickBtn} />