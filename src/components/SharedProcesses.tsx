"use client";

import React, { useState } from "react";
import styles from "./Canvas.module.css";
import {FaArrowUp} from "react-icons/fa";

interface SharedProcessesProps {
    description: string;
    steps?: string[];
}

const defaultSteps = ["Use", "Visualize", "Interpret", "Combine", "Transform", "Store", "Create"];

const SharedProcesses: React.FC<SharedProcessesProps> = ({ description, steps = defaultSteps }) => {
  const [checked, setChecked] = useState<{ [key: string]: { individual: boolean; shared: boolean } }>(
    steps.reduce((acc, step) => {
      acc[step] = { individual: false, shared: false };
      return acc;
    }, {} as { [key: string]: { individual: boolean; shared: boolean } })
  );

  const toggle = (step: string, type: "individual" | "shared") => {
    setChecked((prev) => ({
      ...prev,
      [step]: {
        ...prev[step],
        [type]: !prev[step][type],
      },
    }));
  };

  return (
    <>
      <p>
        {description}
      </p>
      <ul className={styles.checkboxList}>
        <li className={styles.checkboxHeader}>
          <span></span>
          <span className={styles.checkboxHeaderLabel}>Individual</span>
          <span className={styles.checkboxHeaderLabel}>Shared</span>
        </li>

        {defaultSteps.map((step, index) => {
          const { individual, shared } = checked[step];
          const isFirst = index === 0;

          return (
            <li key={step} className={styles.checkboxRow}>
              <div className={styles.labelWrapper}>
                {!isFirst && <FaArrowUp className={styles.arrowIcon} />}
                <label className={styles.checkboxLabel}>{step}</label>
              </div>
              <input
                type="checkbox"
                checked={individual}
                onChange={() => toggle(step, "individual")}
                className={individual ? styles.individualActive : ""}
              />
              <input
                type="checkbox"
                checked={shared}
                onChange={() => toggle(step, "shared")}
                className={shared ? styles.sharedActive : ""}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SharedProcesses;
