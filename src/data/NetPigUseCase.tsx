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

export const netPigUseCase: UseCaseData = {
    keyPartners: {
        title: "Key partners",
        content:
            "• Enabler: AgrospAI, Universitat de Lleida\n" +
            "• Data providers: pig farmers, technical offices\n" +
            "• Service providers: certification entities\n" +
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
            "The pig farming sector is a key part of Spain’s agricultural economy but faces growing pressure to reduce emissions and comply with European sustainability goals such as the Green Deal and Farm to Fork.",
    },
    dataSources: {
        title: "Data & data sources",
        content:
            "Data on: \n" +
            "• CO₂ and NH₃ emissions \n" +
            "\n" +
            "Sources include: \n" +
            "• Farms \n" +
            "• Technical offices \n" +
            "• Public registries \n" +
            "\n" +
            "Data follows FAIR principles: Findable, Accessible, Interoperable, and Reusable.",
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
            "NetPig enhances sustainability, transparency and efficiency across the pig farming value chain. It simplifies certification processes and reduces administrative workload for both farmers and regulators. The solution also strengthens trust and promotes fair participation among farms of different sizes, fostering data-driven innovation within AgrospAI.",
    },
    motivationObjectives: {
        title: "Motivation & objectives",
        content:
            "NetPig aims to create a trusted, interoperable framework for data exchange that automates certification, improves decision-making, and empowers farmers to manage their own data responsibly. \n" +
            "\n" +
            "Its broader goal is to demonstrate how data spaces can advance the sector’s digital transformation through data sharing that generates valuable services without compromising data sovereignty.",
    },
    interoperability: {
        title: "Interoperability",
        content:
            "Built upon Gaia-X standards and Pontus-X interoperability services, the NetPig use case ensures seamless collaboration among diverse participants in the AgrospAI ecosystem. \n" +
            "\n" +
            "Federated identity and access management enable secure authentication, while shared ontologies and standardized APIs ensure that all actors interpret and use data in the same way.",
    },
    businessCase: {
        title: "Business case",
        content:
            "• Costs: related to personnel, training, equipment, computing and interoperability services.\n" +
            "\n" +
            "• Expected benefits:  emission reduction, process optimization, access to environmental certifications and new business opportunities for all stakeholders.",
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
            "3. Use case feasibility assessment guide.\n" +
            "4. Use case design guide.\n" +
            "5. Practical implementation.",
    },
    technicalConceptsModels: {
        title: "Technical concepts/models",
        content:
            "Federated architecture based on Compute-to-Data and Distributed Ledger Technology (DLT). Smart contracts.\n" +
            "\n" +
            "Users can interact with the system through a web portal for convenience, or alternatively via API or CLI.",
    },
    infrastructureCharacteristics: {
        title: "Infrastructure characteristics",
        content:
            "The algorithm is a container hosted on DockerHub, while the input data is a static CSV stored in a private MinIO instance.\n" +
            "\n" +
            "Processing occurs in an isolated environment within a Kubernetes cluster, deployed at the Universitat de Lleida. Results are shared in a decentralized manner via IPFS.",
    },
    currentStatus: {
        title: "Current status",
        content:
            "The project is currently in the operational stage, with real assets published in the catalogue that users can interact with. Next steps incorporating additional stakeholders, data and service providers, from the sector.",
        activeStage: 'Operational stage'
    },
};

