// components/Cell.tsx
import React from 'react';
import styles from './Cell.module.css'; // Using CSS Modules

interface CellProps {
    title: string;
    content: string | React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Cell: React.FC<CellProps> = ({ title, content, className, style }) => {
    return (
        <div className={`${styles.cell} ${className || ''}`} style={style} >
            <div className={styles.cellTitle}>{title}</div>
            <div className={styles.cellContent}>{content}</div>
        </div>
    );
};

export default Cell;
