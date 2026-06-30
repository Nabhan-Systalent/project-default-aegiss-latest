'use client';

import React, { useCallback } from 'react';
import { DocumentProcessorProps } from './DocumentProcessor.types';

export const DocumentProcessor: React.FC<DocumentProcessorProps> = ({ onUpload, isUploading }) => {
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files?.length) {
      onUpload(Array.from(e.dataTransfer.files));
    }
  }, [onUpload]);

  return (
    <div className="w-full p-8 border-2 border-dashed border-[var(--color-border)] rounded-2xl bg-[var(--color-bg-subtle)] flex flex-col items-center justify-center min-h-[300px]">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Upload Requirements</h2>
        <p className="text-[var(--color-text-muted)] mb-6">Drag and drop BRDs here to process</p>
        <button 
          disabled={isUploading}
          className="px-6 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:opacity-90 disabled:opacity-50"
        >
          {isUploading ? 'Processing...' : 'Select Files'}
        </button>
      </div>
    </div>
  );
};
