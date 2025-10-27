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

export const animalWellbeingUseCase: UseCaseData = {
    keyPartners: {
        title: "Key partners",
        content:
            "• Enabler: AgrospAI, Universitat de Lleida\n" +
            "• Data providers: CEP\n" +
            "• Service providers: Computer Vision Center, Arsys\n" +
            "• Consumers: final consumers",
    },
    sharedProcesses: {
        title: "Shared processes",
        content: (
            <SharedProcesses
                description="The process involves several steps performed individually by each partner, but coordinated through shared digital platforms and standard operating procedures. Each partner collects and preprocesses data using its own tools, then publishes the harmonized results to a central repository."
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
            "The pig farming sector faces growing regulatory and social demands to ensure proper animal welfare, yet most farms still rely on manual and subjective observation. This use case applies computer vision to monitor pigs’ behaviour, such as movement and feeding patterns, using video data",
    },
    dataSources: {
        title: "Data & data sources",
        content:
            "Primary data: \n" +
            "• Video sequences from pig‐pens captured at CEP\n" +
            "\n" +
            "Derived metrics: \n" +
            "• Movement levels\n" +
            "• Time in feeding/drinking zones\n" +
            "• Static behaviour durations \n" +
            "\n" +
            "Data sources are farms and research centre datasets processed under compute-to-data so raw video never leaves the data owner’s control.",
    },
    resources: {
        title: "Resources",
        content:
            "• Promoting entity: AgrospAI (UdL)\n" +
            "• Budget: between 50K and 60K €\n" +
            "• Infrastructure: federated data space",
    },
    addedValue: {
        title: "Added value",
        content:
            "The solution offers an objective, continuous, and non-intrusive way to assess animal well-being. It reduces manual inspection efforts, provides consistent and traceable metrics, and supports compliance with welfare certifications and regulations.",
    },
    motivationObjectives: {
        title: "Motivation & objectives",
        content:
            "Motivated by the lack of automated and privacy-preserving systems to evaluate animal welfare, the project seeks to create a trustworthy framework for processing and sharing welfare metrics derived from video data.\n" +
            "\n" +
            "Its main objective is to demonstrate how data spaces can advance digital transformation in livestock farming through data sharing that generates valuable services without compromising data sovereignty, improving animal care and sector sustainability.",
    },
    interoperability: {
        title: "Interoperability",
        content:
            "Built upon Gaia-X standards and Pontus-X interoperability services. \n" +
            "\n" +
            "Ensures semantic, legal and technical compatibility between participants through federated authentication, shared ontologies and standard APIs for data exchange.",
    },
    businessCase: {
        title: "Business case",
        content:
            "• Costs: installing cameras, capturing and storing video and developing the algorithm.\n" +
            "• Expected benefits:  improved animal‐welfare monitoring, operational efficiencies, better compliance with welfare regulations, reduced veterinary costs and enhanced farm reputation.",
    },
    governanceModel: {
        title: "Governance model",
        content:
            "This use case follows the governance model of the enabler’s infrastructure.\n" +
            "\n" +
            "First, with the enabler as governance authority establishing governance rules. Later, evolving toward shared governance with participants.",
    },
    implementationRoadmap: {
        title: "Implementation roadmap",
        content:
            "1. Analysis of the context.\n" +
            "2. Use case definition.\n" +
            "3. Set up camera and video dataset.\n" +
            "4. Integrate dataset into the data space.\n" +
            "5. Deploy the computer-vision algorithm.\n" +
            "6. Scale to pilot farms and integrate results.",
    },
    technicalConceptsModels: {
        title: "Technical concepts/models",
        content:
            "Federated architecture based on Compute-to-Data and Distributed Ledger Technology (DLT).\n" +
            "\n" +
            "Users can interact with the system through a web portal for convenience, or alternatively via API or CLI.\n" +
            "\n" +
            "Data follows FAIR principles: Findable, Accessible, Interoperable, and Reusable.",
    },
    infrastructureCharacteristics: {
        title: "Infrastructure characteristics",
        content:
            "The algorithm is a container hosted on DockerHub, while the input data are the videos stored in a private MinIO instance.\n" +
            "\n" +
            "Processing occurs in an isolated environment within a Kubernetes cluster, deployed at the Universitat de Lleida. Results are shared in a decentralized manner via IPFS.",
    },
    currentStatus: {
        title: "Current status",
        content:
            "The project is currently in the exploratory stage, with a functional prototype being tested in two pilot sites. Early results show promising improvements in data integration and operational visibility. Feedback from stakeholders is being collected to refine the user interfaces and reporting mechanisms before wider deployment. Next steps involve expanding the sensor network and integrating external data sources to enhance model accuracy and predictive capability.",
        activeStage: 'Operational stage'
    },
};

