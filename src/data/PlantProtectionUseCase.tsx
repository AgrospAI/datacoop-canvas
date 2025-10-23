import { CellContent } from "@/types";
import SharedProcesses from "@/components/SharedProcesses";

export interface CurrentStatusContent extends CellContent {
    activeStage?: string;
}

export interface UseCaseData {
    keyPartners: CellContent;
    sharedProcesses: CellContent;
    context: CellContent;
    dataSources: CellContent;
    resources: CellContent;
    addedValue: CellContent;
    motivationObjectives: CellContent;
    interoperability: CellContent;
    businessCase: CellContent;
    governanceModel: CellContent;
    implementationRoadmap: CellContent;
    technicalConceptsModels: CellContent;
    infrastructureCharacteristics: CellContent;
    currentStatus: CurrentStatusContent;
}

export const plantProtectionUseCase: UseCaseData = {
    keyPartners: {
        title: "Key partners",
        content:
            "....",
    },
    sharedProcesses: {
        title: "Shared processes",
        content: (
            <SharedProcesses
                description="The process involves several steps performed individually by each partner, but coordinated through shared digital platforms and standard operating procedures. Each partner collects and preprocesses data using its own tools, then publishes the harmonized results to a central repository. This enables interoperability, traceability, and consistency across the entire data value chain. Data validation and aggregation are performed collaboratively before the insights are disseminated to business users for decision-making."
                initialChecked={{
                    Use: { individual: true, shared: false },
                    Visualize: { individual: true, shared: false },
                    Interpret: { individual: false, shared: true },
                    Combine: { individual: false, shared: true },
                    Transform: { individual: false, shared: true },
                    Store: { individual: true, shared: false },
                    Create: { individual: false, shared: true },
                }} />
        ),
    },
    context: {
        title: "Context",
        content:
            "",
    },
    dataSources: {
        title: "Data & data sources",
        content:
            "",
    },
    resources: {
        title: "Resources",
        content:
            "",
    },
    addedValue: {
        title: "Added value",
        content:
            "",
    },
    motivationObjectives: {
        title: "Motivation & objectives",
        content:
            "",
    },
    interoperability: {
        title: "Interoperability",
        content:
            "",
    },
    businessCase: {
        title: "Business case",
        content:
            "",
    },
    governanceModel: {
        title: "Governance model",
        content:
            "",
    },
    implementationRoadmap: {
        title: "Implementation roadmap",
        content:
            "",
    },
    technicalConceptsModels: {
        title: "Technical concepts/models",
        content:
            "",
    },
    infrastructureCharacteristics: {
        title: "Infrastructure characteristics",
        content:
            "",
    },
    currentStatus: {
        title: "Current status",
        content:
            "The project is currently in the exploratory stage, with a functional prototype being tested in two pilot sites. Early results show promising improvements in data integration and operational visibility. Feedback from stakeholders is being collected to refine the user interfaces and reporting mechanisms before wider deployment. Next steps involve expanding the sensor network and integrating external data sources to enhance model accuracy and predictive capability.",
        activeStage: 'Operational stage'
    },
};

