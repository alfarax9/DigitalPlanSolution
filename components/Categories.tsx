import React, { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import CategoryTable from '../components/Categories/CategoryTable';
import CategoryForm from '../components/Categories/CategoryForm';
import { Category } from '@/app/(admin)/admin/page';

interface CategoriesProps {
  categories: Category[];
  onDeleteCategory: (category: Category) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  categories,
  onDeleteCategory
}) => {
  const [showForm, setShowForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
    setShowForm(true);
  };

  const handleSave = (categoryData: Omit<Category, 'id'>) => {
    // if (editingCategory) {
    //   onUpdateCategory(editingCategory.id, categoryData);
    // } else {
    //   onCreateCategory(categoryData);
    // }
    setShowForm(false);
    setEditingCategory(null);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingCategory(null);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Categories</h1>
          <p className="text-gray-600 mt-1">Organize your projects with custom categories.</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors flex items-center"
        >
          <Plus size={16} className="mr-1" />
          Create Category
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
            />
          </div>
          <p className="text-sm text-gray-600">
            {filteredCategories.length} of {categories.length} categories
          </p>
        </div>
        
        <CategoryTable
          categories={filteredCategories}
          onEdit={handleEdit}
          onDelete={onDeleteCategory}
        />
      </div>
      
      {showForm && (
        <CategoryForm
          type={editingCategory ? 'edit' : 'create'}
          category={editingCategory || undefined}
          onClose={handleCloseForm}
        />
      )}
    </div>
  );
};

export default Categories;