import { useState } from 'react'
import { filtrujProdukty, sortujProdukty, wyszukajProdukty } from './controllers/productController'
import ProductList from './views/productList'
import './App.css'

function App() {
  const [kategoria, setKategoria] = useState("wszystkie");
  const [szukaj, setSzukaj] = useState("");
  const [sortowanie, setSortowanie] = useState("domyslne");
  const produktyPoKategorii = filtrujProdukty(kategoria);
  const produktyPoWyszukiwaniu = wyszukajProdukty(produktyPoKategorii, szukaj)
  const produkty = sortujProdukty(produktyPoWyszukiwaniu, sortowanie)

  // map
  // const ceny = [10, 20, 30];
  // const noweCeny = ceny.map(cena => cena * 2);

  // filter
  // const ceny = [10, 20, 30, 40];
  // const tanie = ceny.filter(cena => cena < 30); 

  // find
  // const ceny = [10, 20, 30, 40];
  // const wynik = ceny.filter(cena => cena > 15); 

  // sort
  // const ceny = [30, 5, 100, 40];
  // liczby.sort((a,b) => a-b)

  return (
    <div>
      <h1>Sklep konkurencyjny dla wszystkich</h1>

      <input type='text' placeholder='Wyszukaj produkt' value={szukaj} onChange={(e) => setSzukaj(e.target.value)} />
      <div>
        <label htmlFor='filtr'>Wybierz kategorie: </label>
        <select id="filtr" value={kategoria} onChange={(e) => setKategoria(e.target.value)}>
          <option value={"wszystkie"}>Wszystkie</option>
          <option value={"eco"}>ECO</option>
          <option value={"bio"}>BIO</option>
          <option value={"pojazd"}>Pojazd</option>
        </select>
      </div>

      <div>
        <label htmlFor='sortowanie'>Sortuj według ceny: </label>
        <select id='sortowanie' value={sortowanie} onChange={(e) => setSortowanie(e.target.value)}>
          <option value={"domyslne"}>Domyślne</option>
          <option value={"rosnaco"}>Rosnąco</option>
          <option value={"malejaco"}>Malejąco</option>
        </select>
      </div>


      <ProductList produkty={produkty} />
    </div>
  )
}

export default App


// kilka komponentów 

// index.html strona główna
// indexCon.html 

// header -> jakaś treść zależna od podstrony -> footer

// npm run dev