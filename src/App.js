import Form from "./Form";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";

function App() {
 
  return (
    <Container>
      <Header title="Kalkulator Walut" />
      <Form/>
      <Footer title="Kurs z dnia 13.09.2022" />
    </Container>
  );
};

export default App;
