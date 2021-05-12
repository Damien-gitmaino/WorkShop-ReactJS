import logo from './logo.svg';
import './App.css';
import {Button} from '@material-ui/core'
import LoginPage from "./Components/Exo1/LoginPage";
import {BrowserRoute as Router, Route, useHistory} from 'react-router-dom';
import CoreExo2 from "./Components/Exo2/CoreExo2";

const data = [
  {
    name: 'Exercice 1',
    component: <div>Hello World!</div>,
    path: '/Exo1-1',
  },
    {
        name: 'Exercice 2',
        component: <LoginPage dataClient={[]}/>,
        path: '/Exo1-2',
    },
    {
        name: 'Exercice 3',
        component: <CoreExo2 />,
        path: '/Exo1-3',
    },
];

function App() {
  const history = useHistory();

  return (
      <>
        <Route path={"/"} exact>
          <div>
            {data.map((item, i) => <Button key={`${item.name} - ${i}`} variant={"container"}

                                           onClick={() => history.push(item.path)}>
              {item.name}
            </Button>)}
          </div>
        </Route>
        {data.map((item, i) => <Route key={`${item.name} - ${i} - ${item.path}`} path={item.path}>
          {item.component}
        </Route>)}
      </>
  );
}

export default App;
