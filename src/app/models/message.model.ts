export interface Message {
    type: string;
    message: string;
    source_name?: string; // Optional property for the source name
    source_link?: string; // Optional property for the source URL
    liked?: boolean; // Optional property for feedback
  }