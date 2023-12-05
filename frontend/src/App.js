import { Button } from '@mui/material'
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = 'Ecommerce Home'
  })
  return (
    <div className="App">
      <Button>Test</Button>
    </div>
  );
}

export default App;
