import ButtonPrimary from "./ButtonPrimary";

function Navbar() {
	return (
		<div className="mx-16 my-4 flex justify-between">
			<ul className="flex gap-8">
				<h1>Logo</h1>
				<li>Item one</li>
				<li>Item two</li>
				<li>Item three</li>
				<li>Item four</li>
			</ul>
			<div className="flex gap-4">
				<ButtonPrimary copy={"Hello"}></ButtonPrimary>
				<button>Button</button>
			</div>
		</div>
	);
}

export default Navbar;
