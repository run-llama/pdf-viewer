React PDF viewer for LLM applications

## Installation

```bash
npm install @llamaindex/pdf-viewer
```

## Usage

```jsx
import React from 'react';

import { PDFViewer, PdfFocusProvider } from '@llamaindex/pdf-viewer';

const file = {
  id: 'sample-document',
  url: 'https://d687lz8k56fia.cloudfront.net/sec-edgar-filings/0001045810/10-Q/0001045810-22-000147/filing-details.pdf',
};

function App() {
  return (
    <div className="AppContainer">
      <PdfFocusProvider>
        <PDFViewer file={file} />
      </PdfFocusProvider>
    </div>
  );
}
```

## Custom Styles

```jsx
<PdfFocusProvider>
  <PDFViewer containerClassName="your-container-class-name" file={file} />
</PdfFocusProvider>
```

## Multiple PDF Files

```jsx
<PdfFocusProvider>
  <div className="your-layout-class-name">
    <PDFViewer file={file1} />
    <PDFViewer file={file2} />
    <PDFViewer file={file3} />
  </div>
</PdfFocusProvider>
```

## Dependencies

- react-pdf
- @wojtekmaj/react-hooks
- react-window
- react-intersection-observer
- lodash
- fuse.js
