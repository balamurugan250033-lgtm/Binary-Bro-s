const Innovation = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Innovation Hub</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">AI Chatbot</h2>
            <p className="mb-4">Coming soon: An AI-powered chatbot to help with coding questions and club information.</p>
            <div className="bg-gray-100 p-4 rounded">
              <p>Chatbot interface placeholder</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Collaboration Tools</h2>
            <p className="mb-4">Tools for team collaboration and project management.</p>
            <ul className="list-disc list-inside">
              <li>GitHub Integration</li>
              <li>Project Boards</li>
              <li>Code Review Tools</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovation;