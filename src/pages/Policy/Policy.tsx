import Footer from "../../components/Footer/Footer"
import { ContainerPolicy, SectionPolicy } from "./Policy.styled"

const Policy = () => {

  return (
    <>
    <ContainerPolicy>
      <h1>Política de conteúdo da DevDoodle</h1>
      <p>
      Bem-vindo à nossa plataforma de blogs focada em programação
      e tecnologia. Estamos comprometidos em criar um ambiente online
      seguro e informativo para todos os nossos leitores e colaboradores. 
      Para garantir a qualidade do nosso conteúdo e manter a integridade
      da nossa comunidade, estabelecemos as seguintes políticas de conteúdo:
      </p>

      <SectionPolicy>
        <h2>Precisão e Qualidade</h2>
        <ul>
          <li>Todos os artigos e postagens devem ser precisos e baseados em informações verificáveis.</li>
          <li>Os autores são encorajados a citar fontes confiáveis e a dar créditos apropriados quando necessário.</li>
          <li>O conteúdo deve ser claro e de alta qualidade, fornecendo informações úteis e relevantes.</li>
        </ul>
      </SectionPolicy>

      <SectionPolicy>
        <h2>Respeito e Diversidade</h2>
        <ul>
          <li>Respeitamos a diversidade de opiniões e experiências. Portanto, não toleramos conteúdo discriminatório, ofensivo, ou que incite o ódio.</li>
          <li>É importante manter um tom respeitoso nos comentários e interações com outros membros da comunidade.</li>
        </ul>
      </SectionPolicy>

      <SectionPolicy>
        <h2>Plágio e Direitos Autorias</h2>
        <ul>
          <li>Não é permitido copiar, plagiar ou reutilizar conteúdo de terceiros sem permissão ou sem fornecer a devida atribuição.</li>
          <li>Os autores são responsáveis por garantir que seus artigos respeitem os direitos autorais e estejam em conformidade com as leis aplicáveis.</li>
        </ul>
      </SectionPolicy>

      <SectionPolicy>
        <h2>Evitar Conteúdo Enganoso</h2>
        <ul>
          <li>Não é permitido criar conteúdo que possa induzir em erro, como notícias falsas, informações enganosas ou sensacionalismo.</li>
          <li>Os autores devem ser transparentes sobre qualquer conflito de interesses.</li>
        </ul>
      </SectionPolicy>

      <SectionPolicy>
        <h2>Moderação e Responsabilidade:</h2>
        <ul>
          <li>Nossa equipe de moderação reserva-se o direito de revisar, editar ou remover conteúdo que viole estas políticas.</li>
          <li>Os autores e colaboradores são responsáveis por seu próprio conteúdo e devem estar preparados para ajustá-lo conforme necessário.</li>
        </ul>
      </SectionPolicy>

    </ContainerPolicy>
    <Footer />
    </>
  )
}

export default Policy