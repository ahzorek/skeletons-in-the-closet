import React from 'react';
import './App.css';
import { SkeletonImage } from '@/components/ui/skeleton-image';
import { SkeletonText } from '@/components/ui/skeleton-text';

function App() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Skeleton Loading Components</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Image Skeleton</h2>
          <SkeletonImage className="rounded-lg" />
          <div className="mt-4 flex space-x-4">
            <SkeletonImage width={100} height={100} aspectRatio={1} className="rounded-full" />
            <SkeletonImage width={100} height={100} aspectRatio={1} className="rounded-full" />
            <SkeletonImage width={100} height={100} aspectRatio={1} className="rounded-full" />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Text Skeleton</h2>
          <SkeletonText />
          <SkeletonText lines={1} className="mt-4 text-2xl" />
          <SkeletonText 
            lines={4} 
            fontSize="1.125rem" 
            lineHeight={1.7} 
            lastLineLength={60}
            className="mt-4" 
          />
          <SkeletonText 
            lines={5}
            enableLineBreaks={false}
            className="mt-4"
          />
          <SkeletonText 
            lines={6}
            lineBreaks={[true, 80, false, true, 90, false]}
            className="mt-4 p-4 border-2 border-red-500 border-dotted"
          />
        </section>
      </div>
    </div>
  );
}

export default App;