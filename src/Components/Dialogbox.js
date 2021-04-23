import React from "react";

import "../css/dialogbox.css";

function Dialogbox({ title, close }) {
	const confirmButton = () => {
		close();
	};

	const cancelButton = () => {
		close();
	};

	return (
		<div className="dialogbox">
			<div className="dialogbox__content">
				<div className="text1">{title}</div>
				<div className="row">
					<button
						className="primary__button"
						style={{ width: "200px" }}
						onClick={confirmButton}
					>
						Confirm
					</button>
					<button
						className="secondary__button"
						style={{ width: "200px" }}
						onClick={cancelButton}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
}

export default Dialogbox;
