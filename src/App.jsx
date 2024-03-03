import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header title='Adopta un Perrito'/>
      <div className='galeria'>
        <MyCard
        image='../public/teddy.jpg'
        name='Teddy'
        description='Soy muy cariñoso y me encanta dormir. No soy muy fanatico de correr pero me encantan los paseos tranquilos.'
        backgroundColor='warning'
        textBadge='Bulldog ingles'
        />
        <MyCard
        image='../public/firulais.jpg'
        name='Firulais'
        description='Estoy lleno de energía, no me canso de jugar. Seré el mejor compañero que puedas tener.'
        backgroundColor='primary'
        textBadge='Bulldog'
        />
        <MyCard
        image='../public/princesa.jpg'
        name='Princesa'
        description='Soy cariñosa, me encanta jugar. Mi actividad favorita es ir a pasear al parque.'
        backgroundColor='danger'
        textBadge='Maltes'
        />
        <MyCard
        image='../public/leah.jpg'
        name='Leah'
        description='Estoy ansiosa por conseguir una nueva familia. Aunque aún hago pis dentro de la casa, prometo aprender rápido.'
        backgroundColor='success'
        textBadge='Yorkshire terrier'
        />
      </div>
      <Footer/>
    </>
  )
}

export default App
