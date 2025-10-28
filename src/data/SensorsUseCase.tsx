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

export const sensorsUseCase: UseCaseData = {
    keyPartners: {
        title: "Key partners",
        content:
            "• Enabler: AgrospAI, Universitat de Lleida\n" +
            "• Data providers: Universidad de Córdoba (UCO) via its FIWARE Digital Transformation Classroom \n" +
            "• Service providers: developers of analytics, AI models, and decision-support systems\n" +
            "• Consumers: farmers, agronomists, cooperatives, public advisory bodies",
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
            "The agrifood sector increasingly relies on sensor networks and environmental monitoring to manage crops, respond to weather events, optimise irrigation, and reduce risk. However, these data sources remain under-used or fragmented across organisations, and direct data sharing raises sovereignty and interoperability concerns.",
    },
    dataSources: {
        title: "Data & data sources",
        content:
            "The primary data sources are sensor readings from agrifood-sector deployments and weather stations.\n" +
            "\n" +
            "These data streams are collected via FIWARE infrastructures, ingested, catalogued with metadata, and made available in the federated data-space.\n" +
            "\n" +
            "Data follows FAIR principles: Findable, Accessible, Interoperable, and Reusable.",
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
            "This scenario creates value by unlocking real-time and historical sensor data sets for use in modelling, advisory services and decision support, without forcing data owners to relinquish their raw data. Farmers and sensor operators gain access to advanced analytics and services built on these datasets; service providers gain high-quality inputs for innovation; and the ecosystem benefits from increased transparency, trust and scalability.",
    },
    motivationObjectives: {
        title: "Motivation & objectives",
        content:
            "The initiative is motivated by the recognition that many agrifood actors have sensor and weather data which could provide value but are reluctant to share due to heterogeneous formats and interoperability issues. The objective is to create a trusted and interoperable framework in which sensor datasets are integrated, published and exploited via value-added services, without compromising data sovereignty.",
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
            "Expected benefits: improved monitoring of field and weather conditions and richer datasets for modelling and advisory services.",
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
            "1. Deploy sensor and weather-station\n" +
            "2. Integrate sensor data via FIWARE\n" +
            "3. Publish datasets in the data-space catalogue\n" +
            "4. Enable external services to use the data via federated compute-to-data\n",
    },
    technicalConceptsModels: {
        title: "Technical concepts/models",
        content:
            "Federated architecture based on Compute-to-Data and Distributed Ledger Technology (DLT).\n" +
            "\n" +
            "Users can interact with the system through a web portal for convenience, or alternatively via API or CLI.",
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

