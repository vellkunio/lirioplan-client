//TODO Maybe wrap in index.js <Provider> <App.js/> </Provider>

import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import Container from '@mui/material/Container';
import themeFile from './util/theme';
import jwtDecode from 'jwt-decode';
import AuthRoute from './util/AuthRoute';
import axios from 'axios';
import PrivateRoute from './util/PrivateRoute';

//Components
import Navbar from './components/Navbar';

//Pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
import projects from './pages/projects';
import materials from './pages/materials';
import finance from './pages/finance';

//REDUX
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';

const theme = createTheme(themeFile);

axios.defaults.baseURL = 'https://us-central1-lirioplanapp.cloudfunctions.net/api';

const token = localStorage.FBIdToken;
  if(token){
    const decodedToken = jwtDecode(token);
    if(decodedToken.exp * 1000 < Date.now()){
      store.dispatch(logoutUser());
      window.location.href = '/login';
    } else {
      store.dispatch({ type: SET_AUTHENTICATED });
      axios.defaults.headers.common['Authorization'] = token;
      store.dispatch(getUserData());
    }
  }


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
      <Route exact path="/" component={home}/>
          <Navbar/>
          <div style={{marginTop: '80px'}}>
            <Container>
            {/* maxWidth="sm" */}
              <Switch>
                
                {/* <Route exact path="/" component={home}/> */}
                <AuthRoute exact path="/login" component={login}/>
                <AuthRoute exact path="/signup" component={signup}/>
                <PrivateRoute exact path="/projects" component={projects}/>
                <PrivateRoute exact path="/materials" component={materials}/>
                <PrivateRoute exact path="/finance" component={finance}/>
              </Switch>
            </Container>
          </div>
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
