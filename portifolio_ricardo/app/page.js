import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
    
      <header className={styles.header}>
        <Image
          src="/imagens/foto.jpeg"
          alt="Minha foto"
          width={200}
          height={220}
          className={styles.profilePic}
          priority
        />

        <h1 className={styles.title}>Saudações cordiais, eu sou Ricardo Nery</h1>

        <p className={styles.subtitle}>
          Graduando em Ciencia da computacao,Técnico em eletrotécnica e apaixonado por dubstep. Este é meu portfólio.
        </p>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.heading}>Skills</h2>

          <ul className={styles.skills}>
            <li>java/python/c</li>
            <li>Robótica / Automação</li>
            <li>HTML / CSS </li>
            <li>Arduino</li>
            <li>Git / GitHub</li>
          </ul>
        </section>

        
        <section className={styles.section}>
          <h2 className={styles.heading}>Projetos</h2>
          <div className={styles.projects}>
            <article className={styles.projectCard}>
              
              <h3>Projeto barco</h3>
              <p>barco autonomo desenvolido para analize de agua e batimetria</p>
              <a href="https://g1.globo.com/pe/pernambuco/ne2/video/pesquisadores-da-unicap-desenvolvem-barco-para-medir-qualidade-da-agua-dos-rios-12947765.ghtml" target="_blank">
                Acessar
              </a>
            </article>

            <article className={styles.projectCard}>
              
              <h3>Vitrina</h3>
              <p>Este projeto tem como objetivo promover a indústria criativa e sustentável em espaços urbanos.</p>
              <a href="https://github.com/Williansilva2207/Vitrina" target="_blank">
                Ver no GitHub
              </a>
            </article>

            
    <article className={styles.projectCard}>
      
      <h3>Jogo da Forca</h3>
      <p>Mini game da forca feito em React/Next.</p>
      <Link href="/forca" className={styles.linkInterno}>
        Jogar agora
      </Link>
    </article>

          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} Ricardo – Todos os direitos reservados
      </footer>
    </div>
  );
}
