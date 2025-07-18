
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import AgentCategory from './components/AgentCategory';
import AgentCard from './components/AgentCard';
import AgentDetailView from './components/AgentDetailView';
import { AGENTS } from './constants';
import { Agent, AgentCategory as CategoryEnum } from './types';

const App: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  const categorizedAgents = useMemo(() => {
    return Object.values(CategoryEnum).map(category => ({
      category,
      agents: AGENTS.filter(agent => agent.category === category)
    }));
  }, []);

  const handleSelectAgent = (agent: Agent) => {
    setSelectedAgent(agent);
  };

  const handleCloseDetail = () => {
    setSelectedAgent(null);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main>
          {categorizedAgents.map(({ category, agents }) => (
            <AgentCategory key={category} title={category}>
              {agents.map(agent => (
                <AgentCard key={agent.id} agent={agent} onSelect={handleSelectAgent} />
              ))}
            </AgentCategory>
          ))}
        </main>
      </div>
      <footer className="text-center py-8 text-gray-600">
        <p>&copy; {new Date().getFullYear()} AgentVerse. The future is now.</p>
      </footer>
      
      <AgentDetailView agent={selectedAgent} onClose={handleCloseDetail} />
    </div>
  );
};

export default App;
