import { Container } from 'react-bootstrap';
import Footer from './components/common/Footer';
import { Switch, Route } from 'react-router-dom';
import Buildings from './components/pages/buildings/Buildings';
import Home from './components/pages/Home';
import BuildingsProvider from './providers/BuildingsProvider';

function App() {
  return (
    <Container>
      <div className="my-4">
        <BuildingsProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/buildings" component={Buildings} />
          </Switch>
        </BuildingsProvider>
      </div>
      <Footer />
    </Container>
  );
}

export default App;
