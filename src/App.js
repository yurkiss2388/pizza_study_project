import { useState } from 'react';
import './App.css';
import AddProduct from './components/AddProduct';
import AddUserForm from './components/AddUserForm';
import ProductCard from './components/ProductCard';
import Header from './components/Header/Header';
function App() {
  const [nameProduct, setNameProduct] = useState('название продукта')
  const [price, setPrice] = useState('цена')
  const [description, setDescription] = useState('описание продукта')
  const [nameUser, setNameUser] = useState('Имя')
  const [surnameUser,setSurnameUser] = useState('Фамилия')
  const [phoneUser,setPhoneUser] = useState('телефон')
  const [addressUser,setAddressUser] = useState('адрес')

  return (
    <div className="App">
      <Header/>
      <AddProduct 
      setNameProduct={setNameProduct}
      nameProduct={nameProduct}
      setPrice ={setPrice}
      price = {price}
      description={description}
      setDescription={setDescription}/>
      <AddUserForm
        nameUser={nameUser}
        setNameUser={setNameUser}
        surnameUser={surnameUser}
        setSurnameUser={setSurnameUser}
        phoneUser={phoneUser}
        setPhoneUser={setPhoneUser}
        addressUser={addressUser}
        serAddressUser={setAddressUser}/>
        <ProductCard
        nameProduct={nameProduct}
        price = {price}
        description = {description}
        />
        
    </div>
  );
}

export default App;
