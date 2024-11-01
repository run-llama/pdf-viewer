# PDF viewer for RAG applications

PDF viewer component as used by [secinsights](https://github.com/run-llama/sec-insights). Using [react-pdf](https://github.com/wojtekmaj/react-pdf).

## Installation

```bash
npm install @llamaindex/pdf-viewer
```

## Usage

```jsx
import React from 'react';

import '@llamaindex/pdf-viewer/index.css';
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

## Next.js

NextJs applications may need to update their configuration to be compatible with react-pdf v9 and pdfjs v4
If you have issues related to canvas, you can add the following to your `next.config.js`:

```diff
module.exports = {
+ webpack: (config) => {
+   config.resolve.alias.canvas = false;

+   return config;
+ },
}
```

Another common issue is: `TypeError: Promise.withResolvers is not a function`
To fix this issue, you need to use dynamic imports for the PDF component (to indicate to NextJs to use it for client-side rendering only).

```diff
- import { PDFViewer, PdfFocusProvider } from "@llamaindex/pdf-viewer";

+ import dynamic from "next/dynamic";

+ // Dynamic imports for client-side rendering only
+ const PDFViewer = dynamic(
+   () => import("@llamaindex/pdf-viewer").then((module) => module.PDFViewer),
+   { ssr: false },
+ );

+ const PdfFocusProvider = dynamic(
+   () =>
+     import("@llamaindex/pdf-viewer").then((module) => module.PdfFocusProvider),
+   { ssr: false },
+ );
```

## Contributing

When making changes to this project, please follow these steps:

1. Make your code changes
2. Create a changeset to document your changes:
   ```bash
   yarn changeset
   ```
3. Commit your changes and the changeset
4. When ready to release a new version:
   ```bash
   yarn new-version
   ```
5. To publish the new version:
   ```bash
   yarn release
   ```

## 🙏 Thanks

Thanks to the developers of the following dependencies that we're using:

- [react-pdf](https://github.com/wojtekmaj/react-pdf)
- @wojtekmaj/react-hooks
- react-window
- react-intersection-observer
- lodash
- fuse.js
