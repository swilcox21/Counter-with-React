import React from "react";
import PropTypes from "prop-types";

//include images into your bundle

//create your first component
export function Home(props) {
	return (
		<div className="container-fluid">
			<div id="counter" className="d-flex justify-content-center">
				<div>
					<i className="far fa-clock" />
				</div>
				<div>{props.number1}</div>
				<div>{props.number2}</div>
				<div>{props.number3}</div>
				<div>{props.number4}</div>
				<div>{props.number5}</div>
				<div>{props.number6}</div>
			</div>
			<div className="container-fluid d-flex justify-content-center mt-5">
				<button type="button" className="btn btn-success mx-2">
					Start
				</button>
				<button
					type="button"
					onclick="stopCounter"
					className="btn btn-danger mx-2">
					Stop
				</button>
				<a className="btn btn-info btn-lg mx-2 " href="" role="button">
					Reset
				</a>
			</div>
			<div className="container-fluid d-flex justify-content-center mt-5">
				<input type="text" placeholder="enter a number" />
				<button type="button" className="btn btn-primary">
					Countdown
				</button>
				<button type="button" className="btn btn-warning">
					Set Alarm
				</button>
			</div>
		</div>
	);
}
Home.propTypes = {
	number1: PropTypes.string,
	number2: PropTypes.string,
	number3: PropTypes.string,
	number4: PropTypes.string,
	number5: PropTypes.string,
	number6: PropTypes.string
};
