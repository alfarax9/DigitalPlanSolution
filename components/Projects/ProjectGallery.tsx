import React, { useState } from 'react';
import { X, Upload, Trash2, Plus } from 'lucide-react';
import { Project } from '@/app/(admin)/admin/page';
import { api } from '../lib/api';
import axios from 'axios';
import { on } from 'node:events';

interface ProjectGalleryProps {
  project: Project;
  onClose: () => void;
  onUpdateImages: (projectId: number, images: string, caption?:string) => void;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ project, onClose, onUpdateImages }) => {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [caption, setCaption] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!cloudName || !uploadPreset) {
      setUploadError('Cloudinary env vars missing (check NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME & NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET)');
      return;
    }
    if (!file.type.startsWith('image/')) {
      setUploadError('File must be an image');
      return;
    }
    setUploadError(null);
    setUploading(true);
    setUploadProgress(0);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', uploadPreset);
      // Optional folder:
      // formData.append('folder', 'dips/projects');

      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData,
        {
          onUploadProgress: (p) => {
            if (p.total) setUploadProgress(Math.round((p.loaded / p.total) * 100));
          }
        }
      );
      setNewImageUrl(res.data.secure_url);
    } catch (err: any) {
      setUploadError(err?.response?.data?.error?.message || 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleAddImage = () => {
    if (newImageUrl.trim()) {
      onUpdateImages(project.id, newImageUrl.trim(), caption.trim() || undefined);
      setNewImageUrl('');
      setCaption('');
      setShowUploadModal(false);
      setUploadProgress(0);
    }
  };

  const handleDeleteImage = (index: number) => {
    const updatedImages = project.galleries?.filter((_, i) => i !== index);
    const updatedImagePaths = updatedImages?.[0].image_path || '';
    onUpdateImages(project.id, updatedImagePaths);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full m-4 max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {project.title} - Gallery
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {project.galleries?.length} images
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowUploadModal(true)}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors flex items-center"
              >
                <Plus size={16} className="mr-1" />
                Add Image
              </button>
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 bg-black rounded-md transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {project.galleries?.length === 0 ? (
            <div className="text-center py-12">
              <Upload size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500 mb-4">No images in this project gallery</p>
              <button
                onClick={() => setShowUploadModal(true)}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
              >
                Add First Image
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.galleries?.map((image, index) => (
                <div key={index} className="relative group">
                  <img
                    src={image.image_path}
                    alt={`Project ${project.title} - Image ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg shadow-sm"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                    <button
                      onClick={() => handleDeleteImage(index)}
                      className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-60">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full m-4">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-gray-900">Add Image</h4>
                <button
                  onClick={() => {
                    setShowUploadModal(false);
                    setNewImageUrl('');
                  }}
                  className="p-1 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Image (Cloudinary)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="w-full mb-4 text-sm"
                    disabled={uploading}
                  />
                  {uploading && (
                    <div className="mb-4">
                      <div className="h-2 bg-gray-200 rounded">
                        <div
                          className="h-2 bg-blue-600 rounded transition-all"
                          style={{ width: `${uploadProgress}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        Uploading {uploadProgress}%
                      </p>
                    </div>
                  )}
                  {uploadError && (
                    <p className="text-xs text-red-600 mb-3">{uploadError}</p>
                  )}
                  {newImageUrl && !uploading && (
                    <div className="mb-4">
                      <p className="text-xs text-gray-600 mb-1">Preview:</p>
                      <img
                        src={newImageUrl}
                        alt="Preview"
                        className="w-full h-40 object-cover rounded border"
                      />
                    </div>
                  )}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Or Paste Image URL
                    </label>
                    <input
                      type="url"
                      value={newImageUrl}
                      onChange={(e) => setNewImageUrl(e.target.value)}
                      placeholder="https://res.cloudinary.com/..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={uploading}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Caption (optional)
                    </label>
                    <input
                      type="text"
                      value={caption}
                      onChange={(e) => setCaption(e.target.value)}
                      placeholder="Short caption"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={uploading}
                    />
                  </div>
                </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => {
                    setShowUploadModal(false);
                    setNewImageUrl('');
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddImage}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors disabled:opacity-60"
                  disabled={!newImageUrl.trim() || uploading}
                >
                  {uploading ? 'Uploading...' : 'Add Image'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;