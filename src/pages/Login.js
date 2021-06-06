//dependencies
import React from "react";

//actions
import { signIn } from "actions/authActions";

//imports
import Register from "components/Register/Register";

const Login = () => {
	return (
		<div>
			<Register action={signIn} />
		</div>
	);
};

export default Login;
