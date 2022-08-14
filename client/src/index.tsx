import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './components/Navbar';
import App from "./pages/App";
import TodoList from './pages/TodoList';
import Container from 'react-bootstrap/Container';
import {RecoilRoot} from 'recoil';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
  <RecoilRoot>
  <NavBar></NavBar>
   <Container>
    <Routes >
      <Route path="/" element={<App />}></Route>
      <Route path="/todo" element={<TodoList />}></Route>
    </Routes>
  </Container>
  </RecoilRoot>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
