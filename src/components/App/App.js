import React from 'react';
import ItemList from '../ItemList/Itemlist';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer'

const App = () => (<div>
  <h1>Todos</h1>
  <InputItem />
  <ItemList />
  <Footer />
</div>);

export default App;