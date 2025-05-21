import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

const SomaDoisValores = () => {
  // Estados para armazenar os valores dos inputs
  const [valor1, setValor1] = useState<string>('');
  const [valor2, setValor2] = useState<string>('');
  const [resultado, setResultado] = useState<number | null>(null);

  // Função para atualizar valor1
  const handleValor1Change = (e: ChangeEvent<HTMLInputElement>) => {
    const novoValor = e.target.value;
    setValor1(novoValor);
  };

  // Função para atualizar valor2
  const handleValor2Change = (e: ChangeEvent<HTMLInputElement>) => {
    const novoValor = e.target.value;
    setValor2(novoValor);
  };

  // Função para calcular a soma ao enviar o formulário
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // evita o reload da página
    // Converte para número e soma (se campo vazio, considera 0)
    const num1 = parseFloat(valor1) || 0;
    const num2 = parseFloat(valor2) || 0;
    setResultado(num1 + num2);
  };

  return (
    <div style={{ maxWidth: 300, margin: 'auto', padding: 20 }}>
      <h2>Somar Dois Valores</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Valor 1:</label><br />
          <input
            type="number"
            value={valor1}
            onChange={handleValor1Change}
            placeholder="Digite o primeiro número"
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <label>Valor 2:</label><br />
          <input
            type="number"
            value={valor2}
            onChange={handleValor2Change}
            placeholder="Digite o segundo número"
          />
        </div>
        <button type="submit" style={{ marginTop: 15 }}>
          Somar
        </button>
      </form>
      {resultado !== null && (
        <p style={{ marginTop: 20, fontWeight: 'bold' }}>
          Resultado: {resultado}
        </p>
      )}
    </div>
  );
};

export default SomaDoisValores;