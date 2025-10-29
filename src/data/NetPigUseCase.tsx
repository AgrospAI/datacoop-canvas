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
        content: (
            <>
                <strong>Enabler:</strong> AgrospAI, Universitat de Lleida <br />
                <strong>Data providers:</strong> pig farmers, technical offices <br />
                <strong>Service providers:</strong> certification entities, public administrations <br />
                <strong>Consumers:</strong> pig farmers, technical offices, certification entities, public administrations
            </>
        ),
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
        content: (
            <>
                <strong>Promoting entity:</strong> AgrospAI (UdL) <br />
                <strong>Budget:</strong> between 50K and 60K € <br />
                <strong>Infrastructure:</strong> federated data space
            </>
        ),
    },
    addedValue: {
        title: "Added value",
        content:
            "For farmers and technical offices, it reduces administrative workloads, eliminates repetitive manual reporting, and facilitates faster access to both mandatory and voluntary environmental certifications.\n" +
            "\n" +
            "For public administrations and certifying bodies, it delivers standardized, traceable, and interoperable data that streamline auditing processes.\n" +
            "\n" +
            "Beyond operational gains, the initiative strengthens transparency and consumer trust by demonstrating verifiable commitment to sustainable farming.",
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
            "Building on AgrospAI's ecosystem, interoperability is addressed on two levels. \n" +
            "\n" +
            "At the federation level, it connects with other data spaces through the Pontus-X ecosystem, aligned with Gaia-X standards and using trust and clearing-house mechanisms to guarantee secure and verifiable exchanges.\n" +
            "\n" +
            "At the data level, interoperability is achieved through semantic mapping based on ontologies and Semantic Web technologies.",
    },
    businessCase: {
        title: "Business case",
        content: (
            <>
                <strong>Costs:</strong> related to personnel, training, equipment, computing and interoperability services. <br />
                <br />
                <strong>Expected benefits:</strong> emission reduction, process optimization, access to environmental certifications and new business opportunities for all stakeholders.
            </>
        ),
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
            "2. Use case feasibility assessment guide.\n" +
            "3. Use case design guide.\n" +
            "4. Algorithm development.\n" +
            "5. Deployment within the data space.",
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

