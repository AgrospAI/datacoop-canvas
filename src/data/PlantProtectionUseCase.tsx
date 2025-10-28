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
            "• Enabler: AgrospAI, Universitat de Lleida\n" +
            "• Data providers: ADVs\n" +
            "• Service providers: pest-prediction companies\n" +
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
            "In Catalonia, the ADVs provide plant-health advisory to tens of thousands of farmers. Their core mission includes pest management, sustainable use of plant-protection products, and application of Integrated Pest Management (IPM) principles. However, the data they collect has historically been under-utilised because external model‐developing companies cannot access raw records without compromising data control.",
    },
    dataSources: {
        title: "Data & data sources",
        content:
            "Primary data are pest-capture records collected by ADVs across multiple fields and crop types in Catalonia.\n " +
            "\n" +
            "These records include:\n" +
            "• Time-stamps\n" +
            "• Trap counts or capture events\n" +
            "• Location metadata\n" +
            "• Crop/contextual data.\n",
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
            "This use case delivers value by bridging the gap between pest-data collected by ADVs and advanced predictive analytics, while preserving data ownership. ADVs can share data for model-training without exposing raw datasets. Farmers receive improved advisory tools and prediction firms gain high-quality real data. It also fosters trust in data-sharing ecosystems and accelerates innovation in crop-protection services, contributing to more sustainable agronomic practices.",
    },
    motivationObjectives: {
        title: "Motivation & objectives",
        content:
            "Motivated by the challenge that ADVs collect large volumes of pest-monitoring data yet cannot fully exploit it in collaboration with external prediction companies without risking data sovereignty. The objective is to establish a trusted framework where ADVs publish datasets under controlled conditions and external actors train models without accessing raw data.",
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
            "Expected benefits: improved precision of pest-prediction models, thus better crop protection, enhanced trust and transparency in data-sharing and avoidance of raw data exposure.",
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
            "1. Inventory and digitisation of pest-capture records from ADVs.\n" +
            "2. Publication of these datasets into the data catalogue.\n" +
            "3. Enable external companies to train prediction models via the federated compute-to-data infrastructure without accessing raw data.\n",
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
            "The algorithm is a container hosted on DockerHub, while the input data is stored in a private MinIO instance.\n" +
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

