React PDF viewer for LLM applications

## Installation

```bash
npm install pdf-viewer
```

## Usage

```jsx
import React from 'react';

import { PDFViewer, PdfFocusProvider } from 'pdf-viewer';

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
