
// Use a self-executing function to catch any loading errors
(function() {
  try {
    // Import React dependencies
    const React = window.React || require('react');
    const ReactDOM = window.ReactDOM || require('react-dom/client');
    
    // Import application components
    import('./App.tsx')
      .then((App) => {
        import('./index.css')
          .then(() => {
            const root = document.getElementById('root');
            if (!root) {
              console.error('Root element not found');
              return;
            }
            
            // Create root and render app
            const createRoot = ReactDOM.createRoot || ReactDOM.default?.createRoot;
            if (!createRoot) {
              console.error('ReactDOM.createRoot not found');
              return;
            }
            
            const rootElement = createRoot(root);
            rootElement.render(React.createElement(App.default));
            
            console.log('Application successfully rendered');
          })
          .catch(err => console.error('Error loading CSS:', err));
      })
      .catch(err => console.error('Error loading App:', err));
  } catch (error) {
    console.error('Fatal error in application initialization:', error);
    // Display a user-friendly error message
    document.getElementById('root')?.innerHTML = '<div style="padding: 20px; text-align: center;"><h2>Application Error</h2><p>Sorry, we encountered an error loading the application. Please try refreshing the page.</p></div>';
  }
})();
