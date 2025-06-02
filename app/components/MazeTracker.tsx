import { useEffect } from 'react';

interface MazeTrackerProps {
  apiKey: string;
}

export function MazeTracker({ apiKey }: MazeTrackerProps) {
  useEffect(() => {
    // Store session timestamp
    let t;
    try {
      t = window.sessionStorage.getItem('maze-us');
    } catch (err) {
      // Handle sessionStorage access errors
    }

    if (!t) {
      t = new Date().getTime().toString();
      try {
        window.sessionStorage.setItem('maze-us', t);
      } catch (err) {
        // Handle sessionStorage access errors
      }
    }

    // Create and append script element
    const script = document.createElement('script');
    script.src = `https://snippet.maze.co/maze-universal-loader.js?apiKey=${apiKey}`;
    script.async = true;
    document.head.appendChild(script);
    
    // Set global API key
    window.mazeUniversalSnippetApiKey = apiKey;

    // Clean up when component unmounts
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      delete window.mazeUniversalSnippetApiKey;
    };
  }, [apiKey]); // Only re-run if apiKey changes

  return null; // This component doesn't render anything
}