import { produkty } from "../models/productModel";

export function pobierzProdukty() {
    return produkty;
}

export function znajdzProdukt(id) {
    return produkty.find(produkt => produkt.id === id);
}

export function filtrujProdukty(kategoria) {
    if (kategoria === "wszystkie") {
        return produkty;
    }

    return produkty.filter(
        produkt => produkt.kategoria === kategoria
    );
}

export function wyszukajProdukty(lista, fraza) {
    return lista.filter(produkt =>
        produkt.nazwa.toLowerCase().includes(fraza.toLowerCase())
    )
}

export function sortujProdukty(lista, sposob) {
    const kopia = [...lista];

    if (sposob === "rosnaco") {
        return kopia.sort((a, b) => a.cena - b.cena)
    }
    if (sposob === "A-Z") { 
        return kopia.sort((a, b) => a.nazwa.localeCompare(b.nazwa, "pl")); 
    } 
    if (sposob === "Z-A") 
    { 
        return kopia.sort((a, b) => b.nazwa.localeCompare(a.nazwa, "pl")); 
    }

    return kopia;
}