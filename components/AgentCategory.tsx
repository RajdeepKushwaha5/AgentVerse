
import React from 'react';

interface AgentCategoryProps {
  title: string;
  children: React.ReactNode;
}

const AgentCategory: React.FC<AgentCategoryProps> = ({ title, children }) => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 pl-4 border-l-4 border-gray-700">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {children}
      </div>
    </section>
  );
};

export default AgentCategory;
