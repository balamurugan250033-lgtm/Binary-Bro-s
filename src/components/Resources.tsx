const Resources = () => {
  const roadmap = [
    { topic: 'Arrays & Strings', progress: 80 },
    { topic: 'Linked Lists', progress: 60 },
    { topic: 'Stacks & Queues', progress: 70 },
    { topic: 'Trees & Graphs', progress: 50 },
    { topic: 'Dynamic Programming', progress: 40 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Resources</h1>
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">DSA Roadmap</h2>
          <div className="space-y-4">
            {roadmap.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between mb-2">
                  <span>{item.topic}</span>
                  <span>{item.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${item.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Practice Problems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://practice.geeksforgeeks.org" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">GeeksforGeeks Practice</h3>
              <p>Solve coding problems and improve your skills</p>
            </a>
            <a href="https://leetcode.com" className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">LeetCode</h3>
              <p>Practice algorithms and data structures</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;