function ButtonPrimary({ copy }) {
	return (
		<div>
			<h1>{copy}</h1>
		</div>
	);
}

ButtonPrimary.propTypes = {
	copy: String,
};

export default ButtonPrimary;
