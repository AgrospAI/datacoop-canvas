import { CellContent } from "@/types";
import SharedProcesses from "@/components/SharedProcesses";

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
  currentStatus: CellContent;
}

export const exampleUseCase: UseCaseData = {
  keyPartners: { title: "Key partners", content: "Partner A, Partner B, Partner C" },
  sharedProcesses: { 
    title: "Shared processes", 
    content: <SharedProcesses description="These are the steps done individually and shared by partners in this use case." />, 
  },
  context: { title: "Context", content: "Business context goes here" },
  dataSources: { title: "Data & data sources", content: "Data from ERP and IoT sensors" },
  resources: { title: "Resources", content: "Teams, budget, infrastructure" },
  addedValue: { title: "Added value", content: "Improved decision making" },
  motivationObjectives: { title: "Motivation & objectives", content: "Increase revenue, reduce costs" },
  interoperability: { title: "Interoperability", content: "Standard formats, APIs" },
  businessCase: { title: "Business case", content: "Costs vs benefits analysis" },
  governanceModel: { title: "Governance model", content: "Roles, responsibilities, rules" },
  implementationRoadmap: { title: "Implementation roadmap", content: "Step-by-step plan" },
  technicalConceptsModels: { title: "Technical concepts/models", content: "Data models, MIMs" },
  infrastructureCharacteristics: { title: "Infrastructure characteristics", content: "Cloud + local servers" },
  currentStatus: { title: "Current status", content: "Exploratory stage" },
};
