
import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
