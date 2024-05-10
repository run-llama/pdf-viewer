import React from 'react';
import usePDFViewer from '../hooks/usePdfViewer.js';
import type { PdfDocument } from '../types/document.js';
import MemoizedVirtualizedPDF from './VirtualizedPdf.js';

interface PDFViewerProps {
  file: PdfDocument;
}

export const PDFViewer: React.FC<PDFViewerProps> = ({ file }) => {
  const { setCurrentPageNumber, scale, setScaleFit, setNumPages, pdfFocusRef } = usePDFViewer(file);

  return (
    <div className="relative">
      <MemoizedVirtualizedPDF
        key={`${file.id}`}
        ref={pdfFocusRef}
        file={file}
        setIndex={setCurrentPageNumber}
        scale={scale}
        setScaleFit={setScaleFit}
        setNumPages={setNumPages}
      />
    </div>
  );
};
