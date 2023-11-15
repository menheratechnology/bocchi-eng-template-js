import styles from './style.module.scss'

type Props = {
  children: React.ReactNode
  onClick: () => void
  width?: string
}

export const BasicButton = ({
  children,
  onClick,
  width = '100%',
}: Props): React.ReactElement => {
  return (
    <button
      className={styles.basicButton}
      onClick={onClick}
      style={{
        width,
      }}
    >
      {children}
    </button>
  )
}
