import React from 'react';

const ScoreHandle = (props) => {
	return (
    	<div>
      		<p className="text">
            	Your Score: {props.solvedNum} / {props.questionNum}
          	</p>	
      	</div>
    )
}

export default ScoreHandle;