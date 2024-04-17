import React, { useState, useEffect, memo } from "react";
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { useNotification } from "../../notification/hooks/useNotification"
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";


const ItemListMemoized = memo(ItemList)

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [render, setRender] = useState(false)

    const { categoryId } = useParams()

    const { showNotification } = useNotification()

    useEffect(() => {
        setTimeout(() => {
            setRender(prev => !prev)
        }, 2000)
    }, [])

    useEffect(() => {
        console.log("Valor de categoryId:", categoryId);
    
        const productsCollection = categoryId ? (
            query(collection(db, 'products'), where('category', '==', categoryId))
        ) : (
            collection(db, 'products')
        );
    
        console.log("Realizando consulta a Firestore...");
    
        getDocs(productsCollection)
            .then(querySnapshot => {
                console.log("Documentos encontrados:", querySnapshot.docs);
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    console.log("Datos del documento:", data);
                    return { id: doc.id, ...data }
                });
    
                console.log("Productos adaptados:", productsAdapted);
    
                setProducts(productsAdapted);
            })
            .catch(error => {
                console.error("Error al cargar los productos:", error);
                showNotification('error', 'Hubo un error cargando los productos');
            });   
    }, [categoryId]);
    

    return (
        <div style={{ background: 'red'}} onClick={() => console.log('hice click en itemlistcontainer')}>
            <h1>{ greeting }</h1>
            <ItemListMemoized products={products}/>
        </div>
    )
}

export default ItemListContainer