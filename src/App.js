import './App.scss';
import { useState } from "react";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SmallCard from './components/CardPost/SmallCard/SmallCard';
import BigCard from './components/CardPost/BigCard/BigCard';
import GiantCard from './components/CardPost/GiantCard/GiantCard';

async function getNewsLetter() {
  let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=37cb9ac7c9e44ebeb00925812f5501d0';
  let response = await fetch(url);
  let data = await response.json();
  return await data;
}

const bigPost = [
  {
    id: 1,
    title: "long established",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
    date: "May 20th 2020",
    image: "https://images.pexels.com/photos/3473411/pexels-photo-3473411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "teste de imagem",
    link: "#",
  }
]

const smallPosts = [
  {
    id: 1,
    image: "https://www.paho.org/sites/default/files/styles/max_1500x1500/public/2022-10/coronavirus.jpg?itok=Qbu4crX3",
    alt: "teste de imagem",
    title: "long established",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
    date: "May 20th 2020",
    link: "#"
  },
  {
    id: 2,
    image: "https://midias.correiobraziliense.com.br/_midias/jpg/2021/07/27/675x450/1_pri_2807_1202_l_21_cor-6778764.jpg?20220808174313?20220808174313",
    alt: "teste de imagem",
    title: "long established",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
    date: "May 20th 2020",
    link: "#"
  },
  {
    id: 3,
    image: "https://imagens.ebc.com.br/ZhUijoKP3e360zeup3gC1bhjCa8=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/eleicoes-1170x700-destaque-materia_2022-08-08.jpg?itok=vXp7O_yo",
    alt: "teste de imagem",
    title: "long established",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
    date: "May 20th 2020",
    link: "#"
  }
]

const giantPosts = [
  {
    id: 1,
    image: "https://www.paho.org/sites/default/files/styles/max_1500x1500/public/2022-10/coronavirus.jpg?itok=Qbu4crX3",
    alt: "teste de imagem",
    title: "What is Lorem Ipsum?",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution...",
    date: "May 20th 2020",
    link: "#"
  },
]

function App() {

  return (
    <div className="container">
      <Nav />
      <Header />
      <section className="container_small_big">
        {
          bigPost.map(post => {
            return <BigCard key={post.id} title={post.title} description={post.text} alt={post.alt} href={post.link} date={post.date} imageSrc={post.image} />
          })
        }
      </section>
      <section className="container_small_post">
        {
          smallPosts.map(post => {
            return <SmallCard key={post.id} title={post.title} description={post.text} date={post.date} srcImage={post.image} alt={post.alt} href={post.link} />
          })
        }
      </section>
      <section>
        {
          giantPosts.map(post => {
            return <GiantCard key={post.id} title={post.title} description={post.text} alt={post.alt} href={post.link} date={post.date} srcImage={post.image} />
          })
        }

      </section>
      <Footer />
    </div>
  );
}

export default App;
