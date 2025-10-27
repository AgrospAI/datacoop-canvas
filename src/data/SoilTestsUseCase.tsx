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

export const soilTestsUseCase: UseCaseData = {
    keyPartners: {
        title: "Key partners",
        content:
            "• Enabler: AgrospAI, Universitat de Lleida\n" +
            "• Data providers: agricultural cooperatives, Fruits de Ponent\n" +
            "• Service providers: providers of Generative AI and data-extraction tools that process legacy soil-analysis reports\n" +
            "• Consumers: final consumers",
    },
    sharedProcesses: {
        title: "Shared processes",
        content: (
            <SharedProcesses
                description="Some steps are carried out individually by each partner. They collect and preprocess their data, then publish the results to the catalogue. Afterwards, interpretation, combination and transformation can take place within the data space. Each actor stores their data and results independently. Finally, the creation of new services or use cases can be a shared process."
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
            "Agricultural cooperatives accumulate vast volumes of historical soil-analysis reports but these remain largely under-utilised because manual extraction is time-consuming and data remains “locked” in documents.",
    },
    dataSources: {
        title: "Data & data sources",
        content:
            "The primary data used in this use case consist of soil analysis reports in PDF format, originally produced and stored by agricultural cooperatives. These documents contain analytical information such as nutrient composition, pH levels, and organic matter content. Through Generative AI, the information is automatically extracted, structured, and enriched with metadata.",
    },
    resources: {
        title: "Resources",
        content:
            "Promoting entity: AgrospAI (UdL)\n" +
            "Budget: between 50K and 60K €\n" +
            "Infrastructure: federated data space",
    },
    addedValue: {
        title: "Added value",
        content:
            "The use case converts legacy soil-analysis data into actionable datasets, enabling cooperatives and agronomic advisors to access rich insights without losing control of their data. It reduces administrative and data-preparation burdens and accelerates service-creation.",
    },
    motivationObjectives: {
        title: "Motivation & objectives",
        content:
            "Driven by the recognition that a wealth of soil-analysis data remains untapped in document form, the project seeks to unlock that value by automating extraction and enabling secure sharing. The main objective is to establish a trusted, interoperable framework where legacy data can be converted, integrated and exploited to create services, all while preserving the data-owner’s control.",
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
            "Costs: related to personnel, training, equipment, computing and interoperability services.\n" +
            "Expected benefits: unlocking previously siloed soil-data for analytics, enabling cooperatives to derive more value from existing data, and supporting sustainable agricultural practices.",

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
            "1. Inventory of soil-analysis PDF reports\n" +
            "2. Deployment of GenAI to extract and map data\n" +
            "3. Publication of structured datasets\n" +
            "4. Creation of value-added services\n",
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
            "The algorithm is a container hosted on DockerHub, while the input data are PDF's and stored in a private MinIO instance.\n" +
            "\n" +
            "Processing occurs in an isolated environment within a Kubernetes cluster, deployed at the Universitat de Lleida. Results are shared in a decentralized manner via IPFS.",
    },
    currentStatus: {
        title: "Current status",
        content:
            "The project is currently in the implementation stage.",
        activeStage: 'Implementation stage'
    },
};

