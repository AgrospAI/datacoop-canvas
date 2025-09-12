// types/index.ts

// Define the structure for a cell's content
export interface CellContent {
    title: string;
    // Content can be a string or a ReactNode for more complex elements like lists/icons
    content: string | React.ReactNode;
}

// Define the structure for the status stages
export interface StatusStage {
    title: string;
    content?: string; // Content is optional for stages in this context
}
