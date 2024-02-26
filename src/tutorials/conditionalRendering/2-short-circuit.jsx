import { useState, useFetch } from "react";
// shor-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [exists, setExists] = useState('Existe');
  const [dontExists, setDontExists] = useState('')
  return (
    <>
      <h2>{exists && 'O valor existe'}</h2> { /* Sei qua variável e quero renderizá-la caso contrario não quero renderizar nada */}
      <h2>{dontExists || "Não existe um valor"}</h2> {/* Quero mostrar o valor da variável se ela existe se não um valor default */}
    </>
  );
};

export default ShortCircuit;
