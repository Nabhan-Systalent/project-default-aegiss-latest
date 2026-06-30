export interface DocumentProcessorProps {
  onUpload: (files: File[]) => Promise<void>;
  isUploading?: boolean;
}
