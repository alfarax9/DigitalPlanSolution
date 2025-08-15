'use client'
import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Layout/Sidebar';
import Header from '@/components/Layout/Header';
import Projects from '@/components/Projects';
import Categories from '@/components/Categories';
import Dashboard from '@/components/Dashboard';
import { api } from '@/components/lib/api';

export interface Project {
  id: number;
  title: string;
  description: string;
  short_description: string;
  galleries?: {image_path: string}[];
  category?: { name: string; };
  category_id: number;
  start_time: string;
  location?: string;
}

export interface Category {
  id: number;
  name: string;
}

interface DashboardStats {
  totalProjects: number;
  totalEvents: number;
  totalCategories: number;
}


export interface ProjectGallery {
    id: number;
    event_id: number;
    image_path: string;
    caption?: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  useEffect(() => {
    async function fetchData() {
        try {

          const [catRes, projRes, galRes] = await Promise.all([
            api.get('/categories'),
            api.get('/events'),
            api.get('/event-galleries'),
          ]);

          setCategories(catRes.data.data || []);
          setProjects(projRes.data.data || []);
        } catch (err) {
          console.error('Failed to fetch admin data', err);
        }
  }

    fetchData();
    }, []);

  const generateStats = (): DashboardStats => ({
    totalProjects: projects.length,
    totalEvents: projects.length + 5, // Mock additional events
    totalCategories: categories.length,
  });

  function toLaravelDateTime(value: string) {
    if (!value) return '';
    // If only date (YYYY-MM-DD), append midnight
    const isDateOnly = /^\d{4}-\d{2}-\d{2}$/.test(value);
    const dateObj = new Date(isDateOnly ? value + 'T00:00:00' : value);
    if (isNaN(dateObj.getTime())) return '';
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${dateObj.getFullYear()}-${pad(dateObj.getMonth() + 1)}-${pad(dateObj.getDate())} ${pad(dateObj.getHours())}:${pad(dateObj.getMinutes())}:${pad(dateObj.getSeconds())}`;
  }

  // Project CRUD operations
  const handleCreateProject = async (projectData: Omit<Project, 'id'>) => {
    try {
      const response = await api.post('/events', {
        category_id: projectData.category_id,
        title: projectData.title,
        description: projectData.description,
        short_description: projectData.short_description,
        start_time: toLaravelDateTime(projectData.start_time),
        location: projectData.location,
      });
      if (response.data.status === 'success') {
        window.location.reload();
      }
    } catch (error) {
      console.error('Failed to create project', error);
    }
  };

  const handleUpdateProject = async (id: number, projectData: Omit<Project, 'id'>) => {
  try {
    const response = await api.put(`/events/${id}`, {
      category_id: projectData.category_id,
      title: projectData.title,
      description: projectData.description,
      short_description: projectData.short_description,
      start_time: toLaravelDateTime(projectData.start_time),
      location: projectData.location,
    });
    if (response.data.status === 'success') {
      setProjects(prev => prev.map(p => p.id === id ? { ...p, ...projectData } : p));
    }
  } catch (error) {
    console.error('Failed to update project', error);
  }
};

  const handleDeleteProject = async (project: Project) => {
    if (window.confirm(`Are you sure you want to delete "${project.title}"?`)) {
      const response = await api.delete(`/events/${project.id}`);
      if (response.data.status === 'success') {
        window.location.reload();
      }
    }
  };
  const handleUpdateProjectImages = async (projectId: number, images: string, caption?: string ) => {
    try {
      const response = await api.post(`/event-galleries`, { event_id: projectId, image_path: images, caption });
      if (response.data.status === 'success') {
        window.location.reload();
      }
    } catch (error) {
      console.error('Failed to update project images', error);
    }
  };

  // const handleUpdateProjectImages = (projectId: string, images: string[]) => {
  //   setProjects(prev =>
  //     prev.map(project =>
  //       project.id === projectId ? { ...project, images } : project
  //     )
  //   );
  // };

  // Category CRUD operations
  // const handleCreateCategory = (categoryData: Omit<Category, 'id'>) => {
  //   const newCategory: Category = {
  //     ...categoryData,
  //     id: Date.now().toString()
  //   };
  //   setCategories(prev => [...prev, newCategory]);
  // };

  // const handleUpdateCategory = (id: string, categoryData: Omit<Category, 'id'>) => {
  //   setCategories(prev =>
  //     prev.map(category =>
  //       category.id === id ? { ...categoryData, id } : category
  //     )
  //   );
  // };
    

  const handleDeleteCategory = async (category: Category) => {
    if (window.confirm(`Are you sure you want to delete "${category.name}"?`)) {
      const response = await api.delete(`/categories/${category.id}`);
      if (response.data.status === 'success') {
        window.location.reload();
      }
    }
  };

  const handleViewProject = (project: Project) => {
    setCurrentPage('projects');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return (
          <Dashboard
            projects={projects.slice(0, 5)} // Show recent projects
            categories={categories}
            stats={generateStats()}
            onViewProject={handleViewProject}
          />
        );
      case 'projects':
        return (
          <Projects
            projects={projects}
            categories={categories}
            onCreateProject={handleCreateProject}
            onUpdateProject={handleUpdateProject}
            onDeleteProject={handleDeleteProject}
            onUpdateProjectImages={handleUpdateProjectImages}
          />
        );
      case 'categories':
        return (
          <Categories
            categories={categories}
            onDeleteCategory={handleDeleteCategory}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      
      <div className="flex-1 ">
        <Header toggleSidebar={toggleSidebar} />
        <main className="min-h-[calc(100vh-73px)]">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;