//dependencies
import { createUseStyles } from "react-jss";

//imports

export const useStyles = createUseStyles({
	scaleLoaderContainer: {
		marginLeft: (styles) => styles.marginLeft,
	},

	"@media only screen and (max-width: 600px)": {
		scaleLoaderContainer: {
			marginLeft: "unset",
			marginTop: "5rem",
		},
	},
});
