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

export const cropsValidationUseCase: UseCaseData = {
    keyPartners: {
        title: "Key partners",
        content:
            "• Enabler: AgrospAI, Universitat de Lleida\n" +
            "• Data providers: farmers and organisations providing annotated agricultural image datasets \n" +
            "• Service providers: companies developing and submitting fruit-detection computer-vision algorithms\n" +
            "• Consumers: those same companies seeking neutral validation of their models and farmers relying on validated tools for harvest estimation and planning",
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
            "Many companies in the agri-food sector develop computer-vision models for fruit detection and harvest estimation, but they face a lack of objective, independent validation services to assess model accuracy. This absence of standard benchmarking and conflict-free evaluation limits confidence in these tools and slows adoption.",
    },
    dataSources: {
        title: "Data & data sources",
        content:
            "The primary data consist of agricultural images with annotated ground-truth labels for fruit detection, contributed by farms or dataset hosts.\n" +
            "\n" +
            "Models submitted by service-providers are executed in the validation infrastructure, compared with the annotations and results are aggregated into evaluation reports.\n" +
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
            "This service delivers significant value: companies can validate their vision models against high-quality annotated datasets, thereby improving credibility and reducing risk of deploying flawed algorithms. For farms and agribusinesses, the result is more trustworthy analytics, leading to better harvest sizing, planning and decision-making.",
    },
    motivationObjectives: {
        title: "Motivation & objectives",
        content:
            "Motivated by the challenge that many algorithms are developed without external, unbiased validation, the project aims to create a trusted, interoperable framework where vision models are evaluated fairly and transparently. Its objective is to enable algorithm developers to submit their models, receive validated reports, and enhance model quality, while preserving the data owners’ control and ensuring the service remains independent.",
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
            "Expected benefits: giving model developers a neutral validation service that increases trust in their algorithms, reducing liability risks from inaccurate tools, and accelerating market adoption of harvest-detection systems.",
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
            "1. Gather annotated image datasets with ground-truth fruit detections from farms.\n" +
            "2. Deploy the validation service infrastructure.\n" +
            "3. Run comparisons of model outputs vs ground truth, calculate metrics and produce reports. \n" +
            "4. Deliver evaluation reports to model developers.",
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
            "The project is currently in the exploratory stage, with a functional prototype being tested in two pilot sites. Early results show promising improvements in data integration and operational visibility. Feedback from stakeholders is being collected to refine the user interfaces and reporting mechanisms before wider deployment. Next steps involve expanding the sensor network and integrating external data sources to enhance model accuracy and predictive capability.",
        activeStage: 'Operational stage'
    },
};

