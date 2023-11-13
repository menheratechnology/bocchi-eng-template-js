import { ChangeEventHandler } from 'react'

import styles from './style.module.scss'

type Props = {
  label: string
  onChange: ChangeEventHandler<HTMLInputElement>
  value: string
  placeholder?: string
}
export const TextInput = ({
  label,
  onChange,
  value,
  placeholder = '',
}: Props): React.ReactElement => {
  return (
    <div className={styles.inputWrapper}>
      <label>{label}</label>
      <input
        type="text"
        className={styles.inputArea}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  )
}
