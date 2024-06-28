// src/App.jsx

// import './App.css';
// import MyTable from './Dash/table';

// function App() {
//     return (
//         <div className="App">
//             <h1>School student data</h1>
//             <MyTable />
//         </div>
//     );
// }

// export default App;

import './App.css'
// import WelcomePage from "./Dash/welcome";
import {BrowserRouter as Router,Route,Routes}   from 'react-router-dom';
import MyTable from './Dash/table';
import WelcomePage from './Dash/welcome';

// function App() {
//     return (
//         <div className="App">
//             <h1>School student data</h1>
//             <WelcomePage />
//         </div>
//     );
// }

// export default App;




const App = () => {
  return (
      <Router>
          <div>
            
              <Routes>
                    <Route path="/" element = {<WelcomePage/> } />
                    <Route path="/table" element = {<MyTable/>} />
              </Routes>
          </div>
      </Router>
  );
};
export default App;