import "./style.scss";

export interface IButtonProps {
	onClick: () => void;
	children?: string;
}

export const Button = ({ onClick, children }: IButtonProps) => {

	return (
		<button className="button" onClick={onClick}>{children}</button>
	);
};