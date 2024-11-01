import React from 'react';
import usePDFViewer from '../hooks/usePdfViewer.js';
import type { PdfDocument } from '../types/document.js';
import MemoizedVirtualizedPDF from './VirtualizedPdf.js';
import PDFOptionsBar from './PdfOptionsBar.js';
import { clsx } from 'clsx';

interface PDFViewerProps {
  file: PdfDocument;
  hideOptionBar?: boolean;
  containerClassName?: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ file, hideOptionBar, containerClassName }) => {
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
    <div className={clsx('pdf-viewer-container', containerClassName)}>
      {!hideOptionBar && (
        <PDFOptionsBar
          file={file}
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
      )}
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

export default PDFViewer;
