import React from 'react';
import usePDFViewer from '../hooks/usePdfViewer.js';
import type { PdfDocument } from '../types/document.js';
import MemoizedVirtualizedPDF from './VirtualizedPdf.js';
import PDFOptionsBar from './PdfOptionsBar.js';

interface PDFViewerProps {
  file: PdfDocument;
}

export const PDFViewer: React.FC<PDFViewerProps> = ({ file }) => {
  const {
    scrolledIndex,
    setCurrentPageNumber,
    scale,
    setScaleFit,
    numPages,
    setNumPages,
    handleZoomIn,
    handleZoomOut,
    nextPage,
    prevPage,
    scaleText,
    pdfFocusRef,
    goToPage,
    setZoomLevel,
    zoomInEnabled,
    zoomOutEnabled,
  } = usePDFViewer(file);

  return (
    <div className="relative">
      <span>abc</span>
      <PDFOptionsBar
        scrolledIndex={scrolledIndex}
        numPages={numPages}
        scaleText={scaleText}
        nextPage={nextPage}
        prevPage={prevPage}
        handleZoomIn={handleZoomIn}
        handleZoomOut={handleZoomOut}
        goToPage={goToPage}
        setZoomLevel={setZoomLevel}
        zoomInEnabled={zoomInEnabled}
        zoomOutEnabled={zoomOutEnabled}
      />
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
