import styles from "./Home.module.css";

//ImagensDeCapa
import minhaImagem from "../Imagens/Homeart.png" ;

//Imagens LogoMarcas
import minhaImagem1 from "../Imagens/Git.png";
import minhaImagem2 from "../Imagens/twitter.png";

import WhatsAppFlutuante from  "../../components/WhatsAppFlutuante.js";

const Home = () => {
  return (
   <div className={styles.container}>
<div className={styles.home}>
    <div className={ styles.texto}>
    <p>
    Olá pessoas,</p>
  <h1>EU SOU UM 
       <br/> PROGRAMADOR</h1>
        <p>seja bem-vindo ao meu portifólio website</p>


 
       

        </div>
       

    <div className={styles.fotologo}>
    <img className={styles.image} src={minhaImagem}  alt="Imagem de entrada do Web-Site" />
    </div>


    <div className={styles.redes}>
      <p>Redes Socias</p>
      <a href="https://github.com/matheustak" target="_blank" rel="noreferrer">
        <img  className={styles.logo} src={minhaImagem1}  alt="Segua-me no github" />
      </a>


        <a href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2FAlecrimRoc3694.com%2F&amp;ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5AlecrimRoc3694&amp;region=follow_link&amp;screen_name=AlecrimRoc3694" target="_blank" rel="noreferrer"> 
        <img className={styles.logo} src={minhaImagem2}  alt="Segua-me no twitter"  />
        </a>
        </div> 
    




    

</div>

<WhatsAppFlutuante />
</div>





  );
};

export default Home;