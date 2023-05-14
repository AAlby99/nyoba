import React from 'react';
import Content from './pages/Content';
import Sidebar from './pages/nav';




function App() {
  document.title = "Tugas Siswa";
    return (
    <div className="flex">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
