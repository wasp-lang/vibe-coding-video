import { useState, useEffect } from 'react';

export function useTheme() {
  const [colors, setColors] = useState({
    brand: '#050c1d',
    brandAccent: '#050c1d',
    submitButtonText: 'white',
  });

  useEffect(() => {
    // Check if the system preference is dark
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Get the stored theme preference
    const storedTheme = localStorage.getItem('vite-ui-theme');

    // Determine effective theme
    const effectiveTheme = storedTheme === 'system' ? (systemPrefersDark ? 'dark' : 'light') : storedTheme;

    // Set colors based on effective theme
    if (effectiveTheme === 'dark') {
      setColors({
        brand: 'white',
        brandAccent: 'white',
        submitButtonText: 'black',
      });
    } else {
      setColors({
        brand: '#050c1d',
        brandAccent: '#050c1d',
        submitButtonText: 'white',
      });
    }

  }, []);

  return { colors };
}
