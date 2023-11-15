import styles from './style.module.scss'

type Props = {
  children: React.ReactNode
  complete: boolean
  onClick: () => void
}

export const ActionButton = ({
  children,
  complete,
  onClick,
}: Props): React.ReactElement => {
  return (
    <button
      className={styles.actionButton}
      style={{
        backgroundColor: complete ? '#66cc66' : '#ffcc66',
        border: complete ? 'solid 1px #66cc66' : 'solid 1px #ffcc66',
      }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
