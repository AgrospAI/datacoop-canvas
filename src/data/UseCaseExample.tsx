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

export const exampleUseCase: UseCaseData = {
  keyPartners: {
    title: "Key partners",
    content:
      "The success of this use case relies heavily on the collaboration between several strategic partners, including technology providers, agricultural cooperatives, and data analytics firms. Partner A provides IoT hardware and maintenance, Partner B is responsible for cloud hosting and secure data management, while Partner C supports business process integration and provides consulting services for operational optimization. Regular steering committee meetings ensure alignment and progress tracking among all stakeholders.",
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
      "This use case operates in the agri-food sector, focusing on optimizing crop management through data-driven decision support. The context involves the integration of environmental data, supply chain logistics, and financial information to create a holistic view of operations. Market volatility, sustainability regulations, and resource efficiency are key external drivers influencing this initiative. Internally, the organization seeks to modernize its operations and adopt digital transformation strategies across its production facilities.",
  },
  dataSources: {
    title: "Data & data sources",
    content:
      "The system ingests a variety of structured and unstructured data. Primary sources include ERP systems that manage inventory, procurement, and production schedules, as well as IoT sensors deployed in the field capturing environmental conditions such as temperature, humidity, and soil quality. Additional data streams come from satellite imagery, machinery telemetry, and external market feeds. All data are stored in a hybrid data lake architecture, ensuring scalability, reliability, and accessibility for advanced analytics.",
  },
  resources: {
    title: "Resources",
    content:
      "The implementation requires a combination of human, financial, and technological resources. Cross-functional teams consisting of agronomists, data scientists, and IT specialists collaborate to design and maintain the system. The project is funded through both internal capital and EU innovation grants. Infrastructure includes scalable cloud services for data processing, local edge computing units for real-time analytics, and a secure communication network linking all devices and systems.",
  },
  addedValue: {
    title: "Added value",
    content:
      "By leveraging real-time data analytics and predictive models, the use case enables better resource allocation, reduces waste, and improves overall productivity. Decision-makers gain actionable insights into crop health, equipment performance, and market demand, leading to faster and more informed business actions. The initiative also strengthens sustainability practices by minimizing fertilizer and water use while maximizing yield and profit margins.",
  },
  motivationObjectives: {
    title: "Motivation & objectives",
    content:
      "The primary motivation is to enhance competitiveness through innovation and data-driven transformation. Objectives include reducing operational costs by 15%, improving production efficiency by 20%, and achieving measurable environmental sustainability goals. The initiative also seeks to promote transparency and traceability within the supply chain, ensuring compliance with international standards and improving customer trust through verified data.",
  },
  interoperability: {
    title: "Interoperability",
    content:
      "To ensure smooth collaboration, all systems adhere to open data standards and interoperable APIs. Data exchange follows standardized metadata models to enable seamless integration with third-party tools and regional data platforms. The use case implements a federated identity management system and common reference data models to ensure compatibility and reduce redundancy across partners’ infrastructures.",
  },
  businessCase: {
    title: "Business case",
    content:
      "The business case demonstrates a strong return on investment within two years, primarily due to reduced inefficiencies and improved decision accuracy. A detailed cost-benefit analysis indicates significant savings in resource utilization and logistics, alongside potential new revenue streams from data monetization. Scalability ensures that once the system proves successful locally, it can be replicated across other production sites or even licensed as a service to partner organizations.",
  },
  governanceModel: {
    title: "Governance model",
    content:
      "A multi-layer governance framework defines roles, responsibilities, and accountability mechanisms. The operational level focuses on daily data management and technical maintenance, while the strategic level includes representatives from each partner organization overseeing compliance, ethics, and long-term vision. Decision-making is consensus-based, supported by digital dashboards for transparency and real-time monitoring of KPIs.",
  },
  implementationRoadmap: {
    title: "Implementation roadmap",
    content:
      "The project follows a phased approach. Phase 1 focuses on data collection and integration of key systems. Phase 2 introduces advanced analytics and predictive modeling. Phase 3 scales up to multiple sites, incorporating feedback from earlier phases. Each phase includes milestones for technical validation, user training, and impact assessment. Continuous improvement loops ensure the roadmap remains adaptable to technological and business changes.",
  },
  technicalConceptsModels: {
    title: "Technical concepts/models",
    content:
      "The technical foundation is based on modular microservices communicating through standardized APIs. Data models are designed following FAIR principles (Findable, Accessible, Interoperable, Reusable). Machine learning models for anomaly detection and yield prediction are trained using historical and real-time data. Model explainability is emphasized to maintain user trust and compliance with data ethics frameworks.",
  },
  infrastructureCharacteristics: {
    title: "Infrastructure characteristics",
    content:
      "The infrastructure combines cloud-based scalability with local edge processing capabilities. Cloud servers handle heavy computation, AI training, and long-term storage, while on-premises units manage latency-sensitive tasks. High-speed communication networks and secure VPN connections ensure data integrity and privacy. Containerized deployment allows flexibility and portability across different environments, ensuring cost efficiency and resilience.",
  },
  currentStatus: {
    title: "Current status",
    content:
      "The project is currently in the exploratory stage, with a functional prototype being tested in two pilot sites. Early results show promising improvements in data integration and operational visibility. Feedback from stakeholders is being collected to refine the user interfaces and reporting mechanisms before wider deployment. Next steps involve expanding the sensor network and integrating external data sources to enhance model accuracy and predictive capability.",
	activeStage: 'Operational stage'
  },
};

