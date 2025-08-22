import React from 'react';
import { FolderOpen, Calendar, Tag, TrendingUp } from 'lucide-react';
import StatsCard from '../components/Dashboard/StatsCard';
import RecentProjects from '../components/Dashboard/RecentProjects';
import { DashboardStats } from '../types';
import { Category, Project } from '@/app/(admin)/admin/page';

interface DashboardProps {
  projects: Project[];
  categories: Category[];
  stats: DashboardStats;
  onViewProject: (project: Project) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ projects, categories, stats, onViewProject }) => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here what happening with your projects.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Projects"
          value={stats.totalProjects}
          icon={FolderOpen}
          color="bg-blue-600"
        />
        <StatsCard
          title="Total Events"
          value={stats.totalEvents}
          icon={Calendar}
          color="bg-green-600"
        />
        <StatsCard
          title="Categories"
          value={stats.totalCategories}
          icon={Tag}
          color="bg-purple-600"
        />
      </div>
      
      <RecentProjects projects={projects} onViewProject={onViewProject} />
    </div>
  );
};

export default Dashboard;