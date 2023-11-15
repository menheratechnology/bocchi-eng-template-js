import { ChangeEventHandler } from 'react'

import styles from './style.module.scss'

type Props = {
  label: string
  onChange: ChangeEventHandler<HTMLTextAreaElement>
  value: string
  placeholder?: string
}
export const TextAreaInput = ({
  label,
  onChange,
  value,
  placeholder = '',
}: Props): React.ReactElement => {
  return (
    <div className={styles.inputWrapper}>
      <label>{label}</label>
      <textarea
        className={styles.inputArea}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  )
}
