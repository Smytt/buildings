import { Container } from 'react-bootstrap';
import Footer from './components/common/Footer';
import { Switch, Route } from 'react-router-dom';
import Buildings from './components/pages/buildings/Buildings';
import Home from './components/pages/home/Home';

function App() {
  return (
    <Container>
      <div className="my-4">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/buildings" component={Buildings} />
          </Switch>
      </div>
      <Footer />
    </Container>
  );
}

export default App;
