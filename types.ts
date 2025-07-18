import React from 'react';

export enum AgentCategory {
  PRODUCTIVITY = 'Personal Productivity',
  HEALTH = 'Healthcare & Wellness',
  EDUCATION = 'Education & Learning',
  FINANCE = 'Financial & Legal',
}

export interface Agent {
  id: string;
  name: string;
  description: string;
  category: AgentCategory;
  icon: React.FC<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  systemInstruction: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}