import { EngagementMethod } from "./engagementmethod"

export interface Engagement {
    description: string;
    url: string;
    engagement_methods?: EngagementMethod[];
    telephone: string;
    id?: string;
    name: string;
  }
