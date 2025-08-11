import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Category } from '@/app/(admin)/admin/page';
import { api } from '../lib/api';

interface CategoryFormProps {
  type: 'create' | 'edit';
  category?: Category;
  onClose: () => void;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ type, category, onClose }) => {

  const saveData = async () => {
    if (type === 'create') {
      const response = await api.post('/categories/store', {
        name: formData.name,
      })
      if (response.data.status === 'success') {
        onClose();
        window.location.reload();
      }
    } else if (type === 'edit' && category) {
      const response = await api.put(`/categories/${category.id}`, {
        name: formData.name,
      });
      if (response.data.status === 'success') {
        onClose();
      }
    }
  }
  const [formData, setFormData] = useState({
    name: '',
  });

  const predefinedColors = [
    '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', 
    '#06b6d4', '#84cc16', '#f97316', '#ec4899', '#6b7280'
  ];

  useEffect(() => {
    if (category) {
      setFormData({
        name: category.name,
      });
    }
  }, [category]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveData();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full m-4">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              {category ? 'Edit Category' : 'Create Category'}
            </h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-md transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          
          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
            >
              {category ? 'Update' : 'Create'} Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryForm;