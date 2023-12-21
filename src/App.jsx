import React,{useState} from 'react'
import Card from './components/Card'
import TopBar from './components/TopBar'
import Header from './components/Header'

function App() {
  let product = [{
    title:"Fancy Product",
    price:"$40.00 - $80.00"
},
{
    title:"Special Item",
    price:"$20.00 $18.00"
},
{
    title:"Sale Item",
    price:"$50.00 $25.00"
},
{
    title:"Popular Item",
    price:"$40.00"
},
{
    title:"Sale Item",
    price:"$50.00 $25.00"
},
{
    title:"Fancy Product",
    price:"$120.00 - $280.00"
},
{
    title:"Special Item",
    price:"$20.00 $18.00"
},
{
    title:"Popular Item",
    price:"$40.00"
},
]
  let [cart,setCart] = useState(0)
  return <>
    <TopBar cart={cart} setCart={setCart}/>
    <Header/>
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            
            <Card cart={cart} setCart={setCart}/>
            <Card cart={cart} setCart={setCart}/>
            <Card cart={cart} setCart={setCart}/>
            <Card cart={cart} setCart={setCart}/>
            <Card cart={cart} setCart={setCart}/>
            <Card cart={cart} setCart={setCart}/>
            <Card cart={cart} setCart={setCart}/>
            <Card cart={cart} setCart={setCart}/>
          </div>
      </div>
    </section>
  </>
}

export default App
