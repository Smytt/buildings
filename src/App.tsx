import { Container } from 'react-bootstrap';
import Footer from './components/common/Footer';
import { Switch, Route } from 'react-router-dom';
import Buildings from './components/pages/Buildings';
import Home from './components/pages/Home';

function App() {
  return (
    <Container>
      <div>
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
