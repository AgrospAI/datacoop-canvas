// components/Canvas.tsx
import React from 'react';
import Cell from './Cell';
import styles from './Canvas.module.css';
import { CellContent, StatusStage } from '@/types'; // Import custom types

// --- Data Definitions ---

const canvasTitleOrganizational: string = "Organizational";
const canvasTitleWhy: string = "Why?";
const canvasTitleTechnical: string = "Technical";

const keyPartnersCell: CellContent = {
    title: "Key partners",
    content: "Who are the partners involved in the data ex-\nchange? What are their roles?",
};

const sharedProcessesCell: CellContent = {
    title: "Shared processes",
    content: (
        <ul>
            <li>
                <input type="checkbox" id="use" />
                <label htmlFor="use" className={styles.checkboxLabel}>Use</label>
            </li>
            <li>
                <input type="checkbox" id="visualize" />
                <label htmlFor="visualize" className={styles.checkboxLabel}>Visualize</label>
            </li>
            <li>
                <input type="checkbox" id="interpret" />
                <label htmlFor="interpret" className={styles.checkboxLabel}>Interpret</label>
            </li>
            <li>
                <input type="checkbox" id="combine" />
                <label htmlFor="combine" className={styles.checkboxLabel}>Combine</label>
            </li>
            <li>
                <input type="checkbox" id="transform" />
                <label htmlFor="transform" className={styles.checkboxLabel}>Transform</label>
            </li>
            <li>
                <input type="checkbox" id="store" />
                <label htmlFor="store" className={styles.checkboxLabel}>Store</label>
            </li>
            <li>
                <input type="checkbox" id="create" />
                <label htmlFor="create" className={styles.checkboxLabel}>Create</label>
            </li>
        </ul>
    ),
};

const contextCell: CellContent = {
    title: "Context",
    content: "What is the business context that creates the\nopportunity/necessity for data exchange?",
};

const dataSourcesCell: CellContent = {
    title: "Data & data sources",
    content: "What data is exchanged? What data sources are used?",
};

const resourcesCell: CellContent = {
    title: "Resources",
    content: "What organizational resources are required for\nthis data cooperation? What resources are avail-\nable already? What needs to be\ndone to get all required resources?",
};

const addedValueCell: CellContent = {
    title: "Added value",
    content: "Why will this data cooperation succeed? What is\nthe added value for participants?",
};

const motivationObjectivesCell: CellContent = {
    title: "Motivation & objectives",
    content: "What is the motivation for the key partners to\njoin the data exchange? What are their main\nobjectives of participating?",
};

const interoperabilityCell: CellContent = {
    title: "Interoperability",
    content: "How can the data be uniformed/standardized/combined? What\nshared concepts, languages, formats, or methods can be used? Is it\nhard to combine all the data? Or are standard definitions available?\nWhat data standards & formats are used or need to be used?",
};

const businessCaseCell: CellContent = {
    title: "Business case",
    content: "What are the costs of the data exchange? Who\nis paying? What are the revenues? Who is profit-\ning? What compensation, fees\nor other financials are needed?",
};

const governanceModelCell: CellContent = {
    title: "Governance model",
    content: "How are rules, norms and actions structured/\nsustained/regulated to control the data ex-\nchange?",
};

const implementationRoadmapCell: CellContent = {
    title: "Implementation roadmap",
    content: "What approach will be used for realizing and\nimplementing the data exchange?",
};

const technicalConceptsModelsCell: CellContent = {
    title: "Technical concepts/models",
    content: "What technical concepts or models need to be\nin place for the data exchange. What MIMs are\nimplemented and how are they implemented?",
};

const infrastructureCharacteristicsCell: CellContent = {
    title: "Infrastructure characteristics",
    content: "What technical infrastructure is needed for the\ndata exchange?",
};

const currentStatusCell: CellContent = {
    title: "Current status",
    content: "What is the current status of the cooperation?",
};

// Stage cells for current status
const exploratoryStage: StatusStage = { title: "Exploratory stage" };
const preparatoryStage: StatusStage = { title: "Preparatory stage" };
const implementationStage: StatusStage = { title: "Implementation stage" };
const operationalStage: StatusStage = { title: "Operational stage" };
const scalingStage: StatusStage = { title: "Scaling stage" };

// Array of status stages for easier rendering
const statusStages: StatusStage[] = [
    exploratoryStage,
    preparatoryStage,
    implementationStage,
    operationalStage,
    scalingStage,
];


const Canvas: React.FC = () => {
    return (
        <div className={styles.canvasContainer}>
            <h1 className={styles.canvasHeader}>{canvasTitleOrganizational}</h1>
            <h1 className={styles.canvasHeader}>{canvasTitleWhy}</h1>
            <h1 className={styles.canvasHeader}>{canvasTitleTechnical}</h1>
            <div className={styles.canvasGrid}>
                {/* Row 1 */}
                <Cell title={keyPartnersCell.title} content={keyPartnersCell.content} />
                <Cell title={sharedProcessesCell.title} content={sharedProcessesCell.content} />
                <Cell title={contextCell.title} content={contextCell.content} />
                <Cell title={dataSourcesCell.title} content={dataSourcesCell.content} />
                {/* Row 2 */}
                <Cell title={resourcesCell.title} content={resourcesCell.content} />
                <Cell title={addedValueCell.title} content={addedValueCell.content} />
                <Cell title={motivationObjectivesCell.title} content={motivationObjectivesCell.content} />
                <Cell title={interoperabilityCell.title} content={interoperabilityCell.content} />
                {/* Row 3 */}
                <Cell title={businessCaseCell.title} content={businessCaseCell.content} />
                <Cell title={governanceModelCell.title} content={governanceModelCell.content} />
                <Cell title={implementationRoadmapCell.title} content={implementationRoadmapCell.content} />
                <Cell title={technicalConceptsModelsCell.title} content={technicalConceptsModelsCell.content} />
                {/* Row 4 - Placeholder cells to align the last row correctly */}
                <div className={styles.canvasFooterPlaceholder}></div>
                <div className={styles.canvasFooterPlaceholder}></div>
                <div className={styles.canvasFooterPlaceholder}></div>
                <Cell title={infrastructureCharacteristicsCell.title} content={infrastructureCharacteristicsCell.content} />
            </div>

            {/* Current Status Row */}
            <h1 className={styles.canvasHeader}>{currentStatusCell.title}</h1>
            <div className={styles.currentStatusGrid}>
                {statusStages.map((stage, index) => (
                    <div
                        key={index}
                        className={`${styles.statusStageCell} ${styles[`${stage.title.toLowerCase().replace(/\s+/g, '')}`]}`}
                    >
                        <div className={styles.stageTitle}>{stage.title}</div>
                        <div className={styles.stageIndicator}></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Canvas;
