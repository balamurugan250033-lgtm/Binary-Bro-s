import { useState, useEffect } from 'react';

interface User {
  _id: string;
  name: string;
  email: string;
  points: number;
}

const Community = () => {
  const [leaderboard, setLeaderboard] = useState<User[]>([]);
  const [announcements] = useState([
    { title: 'New Coding Contest', content: 'Join our monthly coding contest on April 15th!' },
    { title: 'Workshop Reminder', content: 'DSA Workshop tomorrow at 10 AM in Room 101.' },
  ]);

  useEffect(() => {
    fetch('http://localhost:5000/api/leaderboard')
      .then(res => res.json())
      .then((data: User[]) => setLeaderboard(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Community</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Leaderboard</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left">Rank</th>
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((user, index) => (
                    <tr key={user._id} className="border-t">
                      <td className="px-4 py-2">{index + 1}</td>
                      <td className="px-4 py-2">{user.name}</td>
                      <td className="px-4 py-2">{user.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Announcements</h2>
            <div className="space-y-4">
              {announcements.map((ann, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">{ann.title}</h3>
                  <p>{ann.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;