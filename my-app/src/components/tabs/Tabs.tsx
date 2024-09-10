import { Button } from "../button";
import { TABS_NAME } from "./const";

export interface ITabsProps {
	onChange: (tab: TABS_NAME) => void;
}

export const Tabs = ({ onChange }: ITabsProps) => {

	return (
		<div style={{ width: '100%', display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '20px' }}>
			<Button onClick={() => onChange(TABS_NAME.FORM)}>form</Button>
			<Button onClick={() => onChange(TABS_NAME.USERS)}>users</Button>
		</div>
	);
};