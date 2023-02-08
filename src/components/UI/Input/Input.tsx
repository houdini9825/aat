import { ChangeEventHandler } from 'react';
import styles from './Input.module.scss';

function Input({label, checked, inputType, onChange, id, name, ...rest}: {
	label: string,
	inputType: string,
	onChange: ChangeEventHandler,
	id: string,
	name: string,
	checked?: boolean
}) {
	return (
		<div className={styles.container}>
			<label htmlFor={id}>{label}</label>
			<input {...rest} checked={checked} name={name} id={id} type={inputType} onChange={onChange} />
		</div>
	);
}

export default Input;
