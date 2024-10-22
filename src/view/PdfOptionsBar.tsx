import { useEffect, useState } from 'react';
import { CaretDownIcon, CaretUpIcon, ZoomOutIcon, ZoomInIcon } from './icon.js';
import { zoomLevels } from '../hooks/usePdfViewer.js';
import type { PdfDocument } from '../types/document.js';

interface PDFOptionsBarProps {
  file: PdfDocument;
  scrolledIndex: number;
  numPages: number;
  scaleText: string;
  nextPage: () => void;
  prevPage: () => void;
  handleZoomIn: () => void;
  handleZoomOut: () => void;
  goToPage: (n: number) => void;
  setZoomLevel: (percent: string) => void;
  zoomInEnabled: boolean;
  zoomOutEnabled: boolean;
}

const PDFOptionsBar: React.FC<PDFOptionsBarProps> = ({
  file,
  scrolledIndex,
  numPages,
  scaleText,
  nextPage,
  prevPage,
  handleZoomIn,
  handleZoomOut,
  goToPage,
  setZoomLevel,
  zoomInEnabled,
  zoomOutEnabled,
}: PDFOptionsBarProps) => {
  const [inputValue, setInputValue] = useState(`${scrolledIndex + 1}`);

  useEffect(() => {
    setInputValue(`${scrolledIndex + 1}`);
  }, [scrolledIndex]);

  const handleZoomSelection = (zoom: string) => {
    setZoomLevel(zoom);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const value = parseInt(inputValue, 10);
      if (!isNaN(value) && value > 0) {
        scrollToPage(value - 1);
      }
    }
  };

  const scrollToPage = (page: number) => {
    goToPage(page);
  };

  return (
    <div className="optionBar">
      <div className="title truncate">File ID: {file.id}</div>
      <div className="control">
        <div className="pageControl">
          <button className="pageUp" onClick={prevPage} disabled={scrolledIndex === 0}>
            <CaretUpIcon />
          </button>
          <input
            className="pageInput"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button className="pageDown" onClick={nextPage} disabled={scrolledIndex === numPages - 1}>
            <CaretDownIcon />
          </button>
        </div>
        <div className="zoomControl">
          <button className="zoomOut" onClick={handleZoomOut} disabled={!zoomOutEnabled}>
            <ZoomOutIcon />
          </button>
          <select
            className="zoomSelect"
            value={scaleText}
            onChange={(e) => handleZoomSelection(e.target.value)}
          >
            {zoomLevels.map((zoom, index) => (
              <option key={index} value={zoom}>
                {zoom}
              </option>
            ))}
          </select>
          <button className="zoomIn" onClick={handleZoomIn} disabled={!zoomInEnabled}>
            <ZoomInIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

PDFOptionsBar.displayName = 'PDFOptionsBar';

export default PDFOptionsBar;
