

function Accueil(){
  return <>
  <div className="bloc presentation">
    <h2>Qui suis-je ?</h2>
    <p>
      Je m'appelle Albin Poutrain, je suis développeur web Front-end. Ce site portfolio 
      est développé avec ReactJS.
    </p>

  </div>
  <div className="bloc presentation">
    <h2>Comment ai-je appris ?</h2>
    <p>
      Je suis autodidacte, j'ai donc, en toute autonomie, appris grâce à internet par l'intermédiaire de vidéos,
      de recherches Google afin de trouver une solution à un problème donné, et bien évidemment par la pratique.
      Un cheminement classique d'apprentissage se présente ainsi:
      <ul>
        <li>Acquisition des base (d'un langage, library, framework)</li>
        <li>Mise en pratique des compétences apprise en développant de petits projets</li>
        <li>Ces probjets soulèvent bien souvent de nouveaux problème qu'il faut apprendre à résoudre</li>
        <li>
          Ces problèmes se résolvent d'abord par la réflexion et, au cas échéant, par l'aide d'informations trouvées
          sur internet donc soit grâce aux documentations, soit sur des forums dans le cas où quelqu'un a déjà été confronté
          à ce problème, soit grâce à des vidéos, soit grâce à TchatGPT.
          Dans tous les cas, la solution doit être comprise avant de l'utiliser.
        </li>
      </ul>
      <p>
          D'abord HTML et CSS puis Javacript pendant une longue periode afin de savoir l'utiliser convenablement. J'ai également touché
          au Back-end avec NodeJS et fastify afin principalement de comprendre le fonctionnement d'une requête avec fetch, donc le
          fonctionnement d'un GET, d'un POST notamment. Tout ceci afin de comprendre un minimum le fonctionnement global d'un site web.
          J'ai également permi à mon serveur d'être accessible au monde en ouvrant le port 80 et en redirigeant le trafic sur mon serveur.
          Cela m'a permi de comprendre le fonctionnement d'internet au global, requête, dns... J'avais utilisé Freenom pour avoir un nom de
          domaine gratuit.
          J'ai ensuite appris ReactJS, le principe de composant me plaît beaucoup, cela permet d'avoir une application bien organisée 
          dont l'affichage est géré dynamiquement directement avec la library et son système d'état.
          J'avais également "connecté" la partie Front-end en React avec mon Back-end NodeJS grâce au proxy afin de faire quelque requêtes
          avec fetch.
      </p> 
    </p>

  </div>
  <div className="bloc presentation">
    <h2>Comment tout cela a commencé ?</h2>
    <p>
      J'ai écris ma première ligne de code à l'age de 11 ans. A l'époque je voulais développéer des jeux vidéos, type RPG
      alors je me suis mis a apprendre le C++. Cela ma permi de comprendre assez tôt le fonctionnement d'un algorithme, et bien
      entendu de me familiariser au code ( c'était quand même déjà du C++ ). <br></br>
      J'ai finalement arrêté puisque je savais que je ne pourrai pas atteindre mon objectif seul. Développer un RPG en 3D seul 
      m'aurait demandé d'avoir des compétences bien trop variées, que ce soit en code ou en modélisation 3D (pour ne citer que ça),
      en plus de requérir énormément de temps.<br></br><br></br>
      C'est finalement à la fin du lycée pour un projet technique que j'ai de nouveau re touché au code. Pour le coté développement
      web avec du développement Back-end en utilisant php, Front-end uniquement HTML et CSS mais aussi logiciel en utilisant du C++.
      J'ai remarqué ne pas avoir perdu ma capacité de code, et passer d'un langage a un autre n'était pas si compliqué.
      Après le lycée, recherchant un peu de que je voulais faire, j'ai finalement décidé de continuer dans le développement web Front-end
      et d'apprendre par moi-même.<br></br>

    </p>

  </div>
  </>
}
  
export default Accueil