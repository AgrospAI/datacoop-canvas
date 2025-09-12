// components/Cell.tsx
import React from 'react';
import styles from './Cell.module.css'; // Using CSS Modules

interface CellProps {
    title: string;
    content: string | React.ReactNode; // Allow for React nodes like lists
}

const Cell: React.FC<CellProps> = ({ title, content }) => {
    return (
        <div className={styles.cell}>
            <div className={styles.cellTitle}>{title}</div>
            <div className={styles.cellContent}>{content}</div>
        </div>
    );
};

export default Cell;
