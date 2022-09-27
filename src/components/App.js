import { useState } from 'react';
import './App.css';

function App() {
  const [placa, setPlaca] = useState('');
  const [modelo, setModelo] = useState('');
  const [marca, setMarca] = useState('');
  const [ano, setAno] = useState('');
  
  const [placaPesquisa, setPlacaPesquisa] = useState('');
  const [modeloPesquisa, setModeloPesquisa] = useState('');
  const [marcaPesquisa, setMarcaPesquisa] = useState('');
  const [anoPesquisa, setAnoPesquisa] = useState('');

  const [veiculos, setVeiculos] = useState([]);

  function cadastrar() {
    let veiculo = {
      placa,
      modelo,
      marca,
      ano
    }

    //veiculos.push(veiculo);
    //setVeiculos(veiculos)

    setVeiculos([...veiculos, veiculo])

    limparForm()
  }

  function limparForm() {
    setPlaca('');
    setModelo('');
    setMarca('');
    setAno('');
  }

  function pesquisar(){
    if(!placaPesquisa){
      alert('Digite a placa que deseja pesquisar')
    } else {
    
      veiculos.forEach((v)=>{
        if(v.placa == placaPesquisa){
          setPlacaPesquisa(v.placa);
          setMarcaPesquisa(v.marca);
          setModeloPesquisa(v.modelo);
          setAnoPesquisa(v.ano);
        }
      })
    }
  }

  return (
    <div className="container">
      <div className="layout">
        <h1>Loja de seminovos</h1>

        <h3>Cadastro de Veículo</h3>
        <input
          onChange={(e) => { setPlaca(e.target.value) }}
          value={placa}
          placeholder='Placa'>
        </input>

        <input
          onChange={(e) => { setModelo(e.target.value) }}
          value={modelo}
          placeholder='Modelo'>
        </input>

        <input
          onChange={(e) => { setMarca(e.target.value) }}
          value={marca}
          placeholder='Marca'>
        </input>

        <input
          onChange={(e) => { setAno(e.target.value) }}
          value={ano}
          placeholder='Ano'>
        </input>

        <button className="btn-cadastrar" onClick={cadastrar} >Cadastrar</button>

        <h3>Pesquisar Veículo</h3>
        <input
          onChange={(e) => { 
              setPlacaPesquisa(e.target.value) 
          }}
          value={placaPesquisa}
          placeholder='Placa'>
        </input>
        <button onClick={pesquisar}>Pesquisar</button>

        <h4>Placa: {placaPesquisa}</h4>
        <h4>Modelo: {modeloPesquisa}</h4>
        <h4>Marca: {marcaPesquisa}</h4>
        <h4>Ano: {anoPesquisa}</h4>

      </div>
      <div className="">
        <table>
          <tr>
            <th>Placa</th>
            <th>Modelo</th>
            <th>Marca</th>
            <th>Ano</th>
          </tr>

          {veiculos.map((veiculo) => {
            return (<tr>
              <td>{veiculo.placa}</td>
              <td>{veiculo.modelo}</td>
              <td>{veiculo.marca}</td>
              <td>{veiculo.ano}</td>
            </tr>
            );
          })}

        </table>
      </div>
    </div>
  );
}

export default App;
