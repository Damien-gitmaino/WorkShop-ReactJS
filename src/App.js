import logo from './logo.svg';
import './App.css';
import {Button} from '@material-ui/core'
import LoginPage from "./Components/Exo02/LoginPage";
import {BrowserRoute as Router, Route, useHistory} from 'react-router-dom';
import CoreExo2 from "./Components/Exo03/CoreExo2";
import GetApiClassic from "./Components/Exo04/getApiClassic";

const data = [
  {
    name: 'Exercice 1',
    component: <div>Hello World!</div>,
    path: '/Exo01',
  },
    {
        name: 'Exercice 2',
        component: <LoginPage dataClient={[]}/>,
        path: '/Exo02',
    },
    {
        name: 'Exercice 3',
        component: <CoreExo2 />,
        path: '/Exo03',
    },
    {
        name: 'Exercice 4',
        component: <GetApiClassic />,
        path: '/Exo04',
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
