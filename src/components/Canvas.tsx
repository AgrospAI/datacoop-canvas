import React from 'react';
import Cell from './Cell';
import styles from './Canvas.module.css';
import { StatusStage } from '@/types';
import { UseCaseData } from '../data/UseCaseExample';
import { CgSandClock } from "react-icons/cg";
import { GiTakeMyMoney, GiBullseye } from "react-icons/gi";
import { FaServer, FaRegStar, FaPeopleCarry, FaPencilRuler, FaPeopleArrows, FaClipboardList, FaHandshake, FaDraftingCompass} from "react-icons/fa";
import { TbWorldQuestion } from "react-icons/tb";
import { FaDiagramNext } from "react-icons/fa6";
import { GrCloudComputer } from "react-icons/gr";

interface CanvasProps {
    useCaseData: UseCaseData;
}

const canvasTitleOrganizational: string = "Organizational";
const canvasTitleWhy: string = "Why?";
const canvasTitleTechnical: string = "Technical";

const statusStages: StatusStage[] = [
  { title: "Exploratory stage" },
  { title: "Preparatory stage" },
  { title: "Implementation stage" },
  { title: "Operational stage" },
  { title: "Scaling stage" },
];

const stageColors = ['#fad100ff', '#4caf50', '#066217ff', '#2f84e6ff', '#0e076eff'];

const Canvas: React.FC<CanvasProps> = ({useCaseData}) => {
  return (
    <div className={styles.canvasContainer}>
      <div className={styles.canvasGrid}>

        <div>
          <h1 className={styles.canvasHeaderTitleOrganizational}>{canvasTitleOrganizational}</h1>
          <div className={styles.columnGroup}>
            <div className={styles.column}>
              <Cell
                className={styles.keyPartnersCell}
                title={useCaseData.keyPartners.title}
                content={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{useCaseData.keyPartners.content}</span>
                    <FaPeopleCarry
                        className={styles.iconBottomRight}
                        color="gray"
                        size={20}
                    />
                    </div>
                }
                />
              <Cell className={styles.resourcesCell} title={useCaseData.resources.title} 
                content={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{useCaseData.resources.content}</span>
                    <FaPencilRuler
                        className={styles.iconBottomRight}
                        color="gray"
                        size={20}
                    />
                    </div>
                } />
              <Cell className={styles.businessCaseCell} title={useCaseData.businessCase.title} 
                content={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span>{useCaseData.businessCase.content}</span>
                    <GiTakeMyMoney
                        className={styles.iconBottomRight}
                        color="gray"
                        size={20}
                    />
                    </div>
                } />
              <Cell className={styles.governanceModelCell} title={useCaseData.governanceModel.title} 
                content={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span>{useCaseData.governanceModel.content}</span>
                    <FaPeopleArrows
                        className={styles.iconBottomRight}
                        color="gray"
                        size={20}
                    />
                    </div>
                } />
            </div>

            <div className={styles.column}>
              <Cell className={styles.sharedProcessesCell} title={useCaseData.sharedProcesses.title} content={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{useCaseData.sharedProcesses.content}</span>
                    <FaDiagramNext
                        className={styles.iconBottomRight}
                        color="gray"
                        size={20}
                    />
                    </div>
                } />

              <Cell className={styles.implementationRoadmapCell} title={useCaseData.implementationRoadmap.title} content={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{useCaseData.implementationRoadmap.content}</span>
                    <FaClipboardList
                        className={styles.iconBottomRight}
                        color="gray"
                        size={20}
                    />
                    </div>
                } />
            </div>
          </div>
        </div>


        <div>
          <h1 className={styles.canvasHeaderTitleWhy}>{canvasTitleWhy}</h1>
          <div className={styles.column}>
            <Cell className={styles.contextCell} title={useCaseData.context.title} content={
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>{useCaseData.context.content}</span>
                  <TbWorldQuestion className={styles.iconBottomRight} color="gray" size={20}/>
                </div>
              } />
            <Cell
              className={styles.addedValueCell}
              title={useCaseData.addedValue.title}
              content={
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <span>{useCaseData.addedValue.content}</span>
                  <FaRegStar className={styles.iconBottomRight} color="gray" size={20} />
                </div>
              }
            />
            <Cell className={styles.motivationObjectivesCell} title={useCaseData.motivationObjectives.title} 
            content={
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <span>{useCaseData.motivationObjectives.content}</span>
                  <GiBullseye className={styles.iconBottomRight} color="gray" size={20}/>
                </div>
              } />
          </div>
        </div>


        <div>
            <h1 className={styles.canvasHeaderTitleTechnical}>{canvasTitleTechnical}</h1>
            <div className={styles.technicalGrid}>
                <Cell className={styles.dataSourcesCell} title={useCaseData.dataSources.title} 
                  content={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>{useCaseData.dataSources.content}</span>
                      <FaServer className={styles.iconBottomRight} color="gray" size={20} />
                    </div>
                  }
                />

                <Cell className={styles.interoperabilityCell} title={useCaseData.interoperability.title} 
                  content={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>{useCaseData.interoperability.content}</span>
                      <FaHandshake className={styles.iconBottomRight} color="gray" size={20} />
                    </div>
                  }
                />

                <Cell className={styles.technicalConceptsModelsCell} title={useCaseData.technicalConceptsModels.title} 
                  content={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>{useCaseData.technicalConceptsModels.content}</span>
                      <FaDraftingCompass className={styles.iconBottomRight} color="gray" size={20} />
                    </div>
                  }
                />
                
                <Cell className={styles.infrastructureCharacteristicsCell} title={useCaseData.infrastructureCharacteristics.title} 
                  content={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>{useCaseData.infrastructureCharacteristics.content}</span>
                      <GrCloudComputer className={styles.iconBottomRight} color="gray" size={20} />
                    </div>
                  }
                />
            </div>
        </div>
      </div>
        

        <div style={{ position: 'relative', width: '100%' }}>
          <Cell
            className={styles.currentStatusCell}
            title={useCaseData.currentStatus.title}
            content={
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: typeof window !== 'undefined' && window.innerWidth < 768 ? '16px' : '40px',
                width: '100%',
                flexDirection: typeof window !== 'undefined' && window.innerWidth < 768 ? 'column' : 'row',
                flexWrap: 'wrap',
              }}>
              <span style={{ flex: '1 1 60%', minWidth: '280px' }}>
                {useCaseData.currentStatus.content}
              </span>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: typeof window !== 'undefined' && window.innerWidth < 768 ? '12px' : '24px',
                  justifyContent: 'flex-start',
                }}
              >
            
              {statusStages.map((stage, index) => {
                const isActive = stage.title === useCaseData.currentStatus.activeStage;
                const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

                                
                  return (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        opacity: isActive ? 1 : 0.3,
                        transition: 'opacity 0.3s ease',
                      }}
                    >
                      <div
                        style={{
                          width: isMobile ? '100px' : '120px',
                          height: '16px',
                          backgroundColor: stageColors[index % stageColors.length],
                          position: 'relative',
                          top: isMobile ? '0' : '-20px',
                          marginBottom: isMobile ? '4px' : '-16px',
                          border: isActive ? '3px solid black' : '1px solid transparent',
                          boxShadow: isActive ? '0 0 6px rgba(0,0,0,0.4)' : 'none', 
                          transition: 'all 0.3s ease',
                        }}
                      />
                      <span
                        style={{
                          fontWeight: isActive ? 'bold' : 'normal',
                          color: isActive ? '#000' : '#666',
                          transition: 'color 0.3s ease, font-weight 0.3s ease',
                        }}
                      >
                        {stage.title}
                      </span>
                    </div>
                  );
                })}
              </div>
              </div>
            }
            style={{ width: '100%', position: 'relative' }}
          />
            <CgSandClock className={styles.iconBottomRight} color="gray" size={20} />
        </div>

    </div>
  );
};

export default Canvas;
