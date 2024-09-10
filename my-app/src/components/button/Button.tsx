import "./style.scss";

export const Button = ({ onClick, children }: {onClick: () => void, children?: string}) => {

	return (
		<button className="button" onClick={onClick}>{children}</button>
	);
};