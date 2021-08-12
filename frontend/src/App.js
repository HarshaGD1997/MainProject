import { Container } from 'react-bootstrap';
import './App.css';
import './index.css'
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import Footer from './components/Footer'; 

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
