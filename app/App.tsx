import React from 'react';
import { SurveyBuilder } from './components/SurveyBuilder';
import { Toaster } from 'sonner';
import { MazeTracker } from './components/MazeTracker';

export default function App() {
  return (
    <div className="size-full flex flex-col">
      {/* Add Maze tracking if needed */}
      <MazeTracker apiKey="69e0b013-3760-41d3-b9fa-da2d6ea757c4" />
      
      <header className="p-4 border-b">        
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <h1 className="font-bold">Survey Builder for Teachers</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">May 29, 2025</span>
            <div className="size-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <span>TU</span>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1 overflow-hidden">
        <SurveyBuilder />
      </main>
      
      <footer className="border-t p-3 text-center text-sm text-muted-foreground">
        <p>© 2025 Education Survey Platform | Privacy Policy | Terms of Service</p>
      </footer>
      
      <Toaster position="top-right" richColors closeButton />
    </div>
  );
}