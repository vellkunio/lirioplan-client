//TODO Maybe wrap in index.js <Provider> <App.js/> </Provider>

import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import Container from '@mui/material/Container';
import themeFile from './util/theme';
import jwtDecode from 'jwt-decode';
import AuthRoute from './util/AuthRoute';

//Components
import Navbar from './components/Navbar';

//Pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
import projects from './pages/projects';
import materials from './pages/materials';
import finance from './pages/finance';


const theme = createTheme(themeFile);

let authenticated;
const token = localStorage.FBIdToken;
  if(token){
    const decodedToken = jwtDecode(token);
    if(decodedToken.exp * 1000 < Date.now()){
      window.location.href = '/login'
      authenticated = false;
    } else {
      authenticated = true;
    }
  }


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Navbar/>
          <div style={{marginTop: '80px'}}>
      <Container maxWidth="sm">
          <Switch>
            <Route exact path="/" component={home}/>
            <AuthRoute exact path="/login" component={login} authenticated={authenticated}/>
            <AuthRoute exact path="/signup" component={signup} authenticated={authenticated}/>
            <Route exact path="/projects" component={projects}/>
            <Route exact path="/materials" component={materials}/>
            <Route exact path="/finance" component={finance}/>
          </Switch>
        </Container>
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
