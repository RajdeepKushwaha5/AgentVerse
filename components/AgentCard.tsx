
import React from 'react';
import { Agent } from '../types';

interface AgentCardProps {
  agent: Agent;
  onSelect: (agent: Agent) => void;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent, onSelect }) => {
  const cardColorClasses: { [key: string]: string } = {
    indigo: 'border-indigo-500/50 hover:border-indigo-500',
    emerald: 'border-emerald-500/50 hover:border-emerald-500',
    sky: 'border-sky-500/50 hover:border-sky-500',
    rose: 'border-rose-500/50 hover:border-rose-500',
  };

  const iconColorClasses: { [key: string]: string } = {
    indigo: 'text-indigo-400',
    emerald: 'text-emerald-400',
    sky: 'text-sky-400',
    rose: 'text-rose-400',
  };

  return (
    <div className="group perspective-container" onClick={() => onSelect(agent)}>
      <div className={`relative card-3d bg-gray-900/50 backdrop-blur-sm border rounded-2xl p-6 cursor-pointer overflow-hidden transition-all duration-500 ${cardColorClasses[agent.color] || 'border-gray-700/50'}`}>
        <div className="relative z-10 flex flex-col h-full">
          <agent.icon className={`w-10 h-10 mb-4 ${iconColorClasses[agent.color] || 'text-gray-400'}`} style={{ transform: 'translateZ(20px)' }} />
          <h3 className="text-lg font-bold text-white mb-2" style={{ transform: 'translateZ(30px)' }}>
            {agent.name}
          </h3>
          <p className="text-gray-400 text-sm flex-grow" style={{ transform: 'translateZ(10px)' }}>
            {agent.description}
          </p>
          <div className="mt-4 text-right text-xs font-semibold text-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Activate Agent &rarr;
          </div>
        </div>
        <div className="card-glow" />
      </div>
    </div>
  );
};

export default AgentCard;
