const products = [
    {
        id: 1,
        image: "https://images.fravega.com/f300/06a954e71440bb8d28f5acb15055a9b5.jpg.webp",
        name: 'Smart TV 50" 4K UHD Hitachi',
        price: 72999
    },
    {
        id: 2,
        image: "https://images.fravega.com/f300/afc61f065b275d00515d3ae9e8de84e7.jpg.webp",
        name: 'Celular Samsung Galaxy S21 FE 5G 128 GB Lavanda',
        price: 124999
    },
    {
        id: 3,
        image: "https://images.fravega.com/f300/d6eee2e2bbc616e18a0f5f4df77c0d3b.jpg.webp",
        name: 'Lavarropas Carga Frontal Inverter Samsung 7 Kg Plateado',
        price: 89999
    },
    {
        id: 4,
        image: "https://images.fravega.com/f300/ac2f33ad54632ced410ee56402e078a3.jpg.webp",
        name: 'Aire Acondicionado Split Frío/Calor Hisense 2750W 2300F',
        price: 52999
    },

];
export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(products)
        }, 2000)
    })
}