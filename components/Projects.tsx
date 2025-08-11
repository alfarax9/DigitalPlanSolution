import React, { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import ProjectTable from '../components/Projects/ProjectTable';
import ProjectForm from '../components/Projects/ProjectForm';
import ProjectGallery from '../components/Projects/ProjectGallery';
import { Category, Project } from '@/app/(admin)/admin/page';

interface ProjectsProps {
  projects: Project[];
  categories: Category[];
  onCreateProject: (project: Omit<Project, 'id'>) => void;
  onUpdateProject: (id: number, project: Omit<Project, 'id'>) => void;
  onDeleteProject: (project: Project) => void;
  onUpdateProjectImages: (projectId: number, images: string, caption?: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({
  projects,
  categories,
  onCreateProject,
  onUpdateProject,
  onDeleteProject,
  onUpdateProjectImages
}) => {
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [galleryProject, setGalleryProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.category?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    console.log('Editing project:', project);
    setShowForm(true);
  };

  const handleSave = (projectData: Omit<Project, 'id'>) => {
    if (editingProject) {
      onUpdateProject(editingProject.id, projectData);
    } else {
      onCreateProject(projectData);
    }
    setShowForm(false);
    setEditingProject(null);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingProject(null);
  };

  const handleViewGallery = (project: Project) => {
    setGalleryProject(project);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600 mt-1">Manage your projects and track their progress.</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors flex items-center"
        >
          <Plus size={16} className="mr-1" />
          Create Project
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
            />
          </div>
          <p className="text-sm text-gray-600">
            {filteredProjects.length} of {projects.length} projects
          </p>
        </div>
        
        <ProjectTable
          projects={filteredProjects}
          onEdit={handleEdit}
          onDelete={onDeleteProject}
          onViewGallery={handleViewGallery}
        />
      </div>
      
      {showForm && (
        <ProjectForm
          project={editingProject || undefined}
          categories={categories}
          onSave={handleSave}
          onClose={handleCloseForm}
        />
      )}
      
      {galleryProject && (
        <ProjectGallery
          project={galleryProject}
          onClose={() => setGalleryProject(null)}
          onUpdateImages={onUpdateProjectImages}
        />
      )}
    </div>
  );
};

export default Projects;