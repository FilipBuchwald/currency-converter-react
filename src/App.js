import Form from "./Form";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import { useState } from "react";
import { currencyBase } from "./Form/CurrencyBase";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencyBase.find(({ name }) => name === currency).rate;

    setResult({
      targetAmount: amount / rate,
      currency,
    });
  };


  return (
    <Container>
      <Header title="Kalkulator Walut" />
      <Form
        calculateResult={calculateResult}
        result={result}
      />
      <Footer title="Kurs z dnia 13.09.2022" />
    </Container>

  );
}

export default App;
