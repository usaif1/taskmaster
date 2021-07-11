//dependencies
import ScaleLoader from "react-spinners/ScaleLoader";

//imports
import { useStyles } from "./styles";

const BarLoader = ({ styles = { marginLeft: "0" } }) => {
	const classes = useStyles(styles);

	return (
		<div className={classes.scaleLoaderContainer}>
			<ScaleLoader color="#000000" height={20} />
		</div>
	);
};

export default BarLoader;
