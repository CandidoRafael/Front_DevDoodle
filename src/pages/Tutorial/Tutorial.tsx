import { ContainerPost } from "../CreatePost/CreatePost.styled"
import { BsCodeSlash } from 'react-icons/bs'
import { ListTutorial, SectionTutorial, TitleTutorial } from "./Tutorial.styled"
import exampleCode from '../../assets/ExampleCode.png'
import Footer from "../../components/Footer/Footer"

function Tutorial() {
  return (
    <>
    <ContainerPost>
        <TitleTutorial>Essa são algumas dicas para a criação da sua publicação ;)</TitleTutorial>
        <p>
          Como esse é um blog de <b>programação</b> é necessário a 
          postagem de códigos para fins didáticos e com o 
          intuito de ensinar. Portanto essas são algumas 
          dicas de como você pode postar o seu código.
        </p>

        <ListTutorial>
          <li>
            <div>
            Procure esse ícone na barra de estilização do texto  
            <BsCodeSlash />
            </div>
            </li>

            <li>
              Quando for adicionar o seu código , 
              lembre sempre de deixar entre as tags <strong>{`<pre></pre>`}</strong> e <strong>{`<code></code>`}</strong>
            </li>

            <li>
              Adicione essa classe de acordo com a linguagem do código 
               <strong>{` <code class='language-javascript'>Código aqui dentro</code>`}</strong>
            </li>

            <li>
              Quando fizerem o envio da imagem da publicação, procurem imagem de tamanho médio, <strong>650x700</strong>
            </li>
        </ListTutorial>

            <SectionTutorial>
              <h2>Esse é um exemplo de como pode ser feito a postagem de código</h2>
              <figure>
                <img src={exampleCode} alt='Imagem explicando como postar seu código' />
              </figure>
            </SectionTutorial>
           
    </ContainerPost>
      <Footer />
      </>
  )
}

export default Tutorial