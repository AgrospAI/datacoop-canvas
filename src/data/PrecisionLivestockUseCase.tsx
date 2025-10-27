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

export const precisionLivestockUseCase: UseCaseData = {
    keyPartners: {
        title: "Key partners",
        content:
            "• Enabler: AgrospAI, Universitat de Lleida\n" +
            "• Data providers: CEP\n" +
            "• Service providers: developers of semantic mapping and interoperability services\n" +
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
            "Modern pig farms generate large amounts of data from precision feeding systems, automatic weighing, and environmental monitoring. However, these datasets are often fragmented, stored in incompatible formats, and underused. This use case addresses this by creating a federated data-sharing environment where producers can publish and integrate their data incrementally, without losing control or ownership. ",
    },
    dataSources: {
        title: "Data & data sources",
        content:
            "Primary data: \n" +
            "• Feeding data\n" +
            "• Environment and confort data\n" +
            "\n" +
            "Data originate from pig farms, collected via precision feeding machines and environmental monitoring systems.\n" +
            "\n" +
            "Data formats include CSV, TSV, XML, and JSON from various third-party systems.",
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
            "The project enables precision livestock data to be easily accessed, integrated, and reused in a trusted environment. It simplifies the creation of advanced services such as predictive feeding models, environmental optimisation, and process automation. By allowing data publication in original formats, it reduces entry barriers for small and medium-sized farms, promoting inclusiveness and wider adoption of data-driven practices.",
    },
    motivationObjectives: {
        title: "Motivation & objectives",
        content:
            "The initiative is motivated by the challenge that farms and equipment providers face when trying to share or integrate data due to heterogeneous formats and fear of losing control. \n" +
            "\n" +
            "The goal is to establish a trusted and sovereign framework that enables publishing, mapping, and analysing data while keeping it under the data owner’s governance.",
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
            "Costs: installation and maintenance of precision feeding and sensing systems, integration with the federated data space, and development of data-mapping services.\n" +
            "Expected benefits:  improved feeding efficiency, reduced resource waste, better insight into production and animal performance, and the creation of new data-driven services such as predictive modelling or digital consultancy.",
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
            "1. Data collection\n" +
            "2. Publication of datasets in their native format.\n" +
            "3. Deployment of semantic mapping services. \n" +
            "4. Execution of services on top of the integrated data.\n" +
            "5. Expansion to other farms.",
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
            "The algorithm is a container hosted on DockerHub, while the input data are the formats mentioned before and stored in a private MinIO instance.\n" +
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

