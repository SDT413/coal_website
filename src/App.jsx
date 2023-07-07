import React from 'react';
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
<BrowserRouter>
    <AppRouter/>
</BrowserRouter>
  )
}
export default App;

