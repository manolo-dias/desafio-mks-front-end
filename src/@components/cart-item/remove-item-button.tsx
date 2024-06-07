
'use client'
import styles from "./styles.module.scss"; 

export default function RemoveItemButton({ onClick }: {
  onClick: () => void;
}) {
  return (
    <span className={styles.removeItemButton} onClick={onClick}>
      X
    </span>
  );
}

