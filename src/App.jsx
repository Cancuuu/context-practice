import Container from './components/container';
import QtyProvider from './context/QtyProvider';


function App() {


  return (
    <QtyProvider>
        <Container/>
    </QtyProvider>
  );


}

export default App;