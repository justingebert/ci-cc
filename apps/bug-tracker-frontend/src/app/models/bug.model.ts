export enum Priority {
    Low = 'low',
    Medium = 'medium',
    High = 'high',
  }
  
  export interface Bug {
    id?: number;
    title: string;
    description: string;
    priority: Priority;
    createdAt?: string;
  }
  