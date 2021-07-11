//dependencies
import React from "react";

//actions
import { signup } from "actions/authActions";

//imports
import Register from "components/Register/Register";

const Signup = () => {
	return (
		<>
			<Register action={signup} />
		</>
	);
};

export default Signup;
