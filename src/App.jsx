import { ProjectList } from './project';
import { Cover, Footer } from './layouts';
import './index.css';

function App() {
  return (
    <div className="app">
      <Cover />
      <ProjectList />
      <Footer />
    </div>
  );
}

export default App;
