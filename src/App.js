import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import PrimarySearchAppBar from './components/topbarmenu';
import TitlebarBelowImageList from './components/listItems';

function App() {
  return (
    <div >
      <PrimarySearchAppBar> </PrimarySearchAppBar> 
      <TitlebarBelowImageList></TitlebarBelowImageList>
    </div>
  );
}

export default App;
