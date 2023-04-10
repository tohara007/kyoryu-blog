import { clsx } from 'clsx';
import styles from './alert.module.css';

export default function Alert({ children, type }) {
  return (
    <dev
      className={clsx({
        [styles.success]: type === 'success',
        [styles.warn]: type === 'warn',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </dev>
  );
}
