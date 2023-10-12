import conseil_morpho from "../bdd/conseil_morpho.json"
import programme from "../bdd/program.json"

export function exerciceAssignation ( info){

    let morphologie = conseil_morpho;
    let program = programme;
    let morpho = info.generale

    if (morpho.cage === "epaisse"){
  
        info.conseils.cage = morphologie[2].cage.epais
        if(morpho.ligne === "longiligne" && morpho.epaule === "large"){
            info.conseils.ligne = morphologie[0].ligne.long
            info.conseils.epaule = morphologie[1].epaule.large
            info.conseils.pec = "De par vos bras long et de vos épaules large vous pourriez avoir une amplitude trop importante ce qui pourrait causer des blessures aux épaules ou aux pectoraux. Veillez à avoir une bonne exécutions des mouvements (cage thoracique sortie et omoplates resserées dans le dos). Si vous sentez malgré tout vos épaules trop entrer en jeu durant les mouvement, vous pouvez réduire un peu l'amplitude ou essayer le développé décliné."
            info.conseils.delto = "Vos épaules (deltoïdes) peuvent prendre l'ascendant sur vos pectoraux. Evitez de travailler en isolation l'avant de l'épaule."
            info.conseils.dorsaux = "Vos bras longs augmentent l'amplitude et les leviers, ce qui ne favorise pas le travail des dorsaux et aura tendance à favoriser le travail des bras. De plus, épaule large signifie souvent omoplates très mobiles et les trapèze peuvent, de part leur mouvements, prendre l'ascendant sur les dorsaux. Donc veiller à chercher à tirer le coude vers la hanche plutôt qu'à fléchir le bras et garder vos omoplates fixes dans le dos. Pour cela le mieux est de réduire l'amplitude, ne pas aller chercher l'étirement maximal que ça soit au tirage vertiacal, tractions et aux rowing mais aussi ne pas chercher la contractions maximale (en essayant par exemple de monter le menton au dessus de la barre aux tractions) car cela pourait vous forcer à utiliser vos bras plutot que votre dos. C'est pourquoi le tirage vertical est un bon exercice pour vous, il est plus simple de bien exécuter le mouvement que sur des tractions. Cependant rien ne vous empêche d'en faire."
            info.conseils.trapeze = "Pour bien recruter vos trapèzes is vous suffira simplement d'avoir une grande amplitude avec vos épaules durant les mouvement. Par exemple, aux rowing pour les trapèze, envoyer l'épaule en avant pendant la phase d'étirement, et bomber le torse en ramenant l'épaule vers l'arrière en contractant. Garder les coudes relativement écarté du corps (tirer avec les mains au niveau du torse plutôt que des hanches)"
            info.exercices.pec.push("Développé décliné", "Machine convergeante", "Ecarté à la poulie assis sur un banc", "Dips", "Machine convergeante", "Ecarté à la poulie assis sur un banc")
            info.exercices.dos.push("Tirage vertical prise pronation", "Tirage poulie basse unilatéral en supination", "Tirage poulie haute unilatéral", "Rowing pronation à la barre (barre au torse)", "Tirage vertical en supination", "Face pull")
        }
        else if(morpho.ligne === "breviligne" && morpho.epaule === "large"){
            info.conseils.ligne = morphologie[0].ligne.brev
            info.conseils.epaule = morphologie[1].epaule.large
            info.conseils.pec = "Vous ne devriez pas rencontrer de véritable difficultés à travailler vos pectoraux."
            info.conseils.delto = "Vous ne devriez pas rencontrer de problème à travailler vos deltoïdes."
            info.conseils.dorsaux = "Vos épaules larges peuvent signifier omoplates très mobile, veiller à les garder fixes lors de vos mouvement pour les dorsaux. Il est plus simple d'avoir une bonne exécution sur du tirage vertical mais rien ne vous empêche de faire des tractions."
            info.conseils.trapeze = "Pour bien recruter vos trapèzes is vous suffira simplement d'avoir une grande amplitude avec vos épaules durant les mouvement. Par exemple, aux rowing pour les trapèze, envoyer l'épaule en avant pendant la phase d'étirement, et bomber le torse en ramenant l'épaule vers l'arrière en contractant. Garder les coudes relativement écarté du corps (tirer avec les mains au niveau du torse plutôt que des hanches)"
            info.exercices.pec.push("Développé couché", "Machine convergeante", "Ecarté à la poulie assis sur un banc", "Dips", "Machine convergeante", "Ecarté à la poulie assis sur un banc")
            info.exercices.dos.push("Tirage vertical en pronation", "Tirage poulie basse unilatéral en supination", "Tirage poulie haute unilatéral", "Rowing pronation à la barre (barre au torse)", "Tirage vertical en supination", "Face pull")
        }
        else if(morpho.ligne === "longiligne" && morpho.epaule === "etroit"){
            info.conseils.ligne = morphologie[0].ligne.long
            info.conseils.epaule = morphologie[1].epaule.etroit
            info.conseils.pec = "Vous ne devriez pas rencontrer de véritable difficultés à travailler vos pectoraux."
            info.conseils.delto = "Votre faible largeur d'épaule peut favoriser le recrutement des trapèzes plutôt que des deltoïdes durant les mouvements. Veiller à ne lever que le bras durant tous mouvement d'élévations (élévations latérales par exemple). Dès que votre épaule (visible grâce au mouvement de la clavicule) commence à se lever, le mouvement devient inefficace."
            info.conseils.dorsaux = "Attention à ne pas chercher à fléchir les bras durant les mouvement pour le dos. Chercher à amener les coudes vers les hanches pour mieux travailler les dorsaux. Si vous avez quelconque difficulté sur les tractions (manque de force ou travail trop imporant des bras) vous pous pouvez faire du tirage vertical à la place, exercice plus simple à exécuter."
            info.conseils.trapeze = "Vos épaules étroites devraient faciliter le recturement de vos trapèze, vous avez probalement peu de mobilité d'omoplate mais cela faciltie leur recrutement naturel dans la plupart des mouvements car vous n'aurez pas à effeecturer une grande amplitude et vous pourrez donc produire bien plus de force avec vos trapèzes. Au rowing pour les trapèze, tirez au niveau du torse plutot qu'au niveau des hanches. Une prise pronation aide à garder les coude écarté du corps afin de moins recruter les dorsaux."
            info.exercices.pec.push("Développé couché", "Machine convergeante", "Ecarté à la poulie assis sur un banc", "Dips", "Machine convergeante", "Ecarté à la poulie assis sur un banc")
            info.exercices.dos.push("Tractions", "Tirage poulie basse unilatéral en supination", "Tirage poulie haute unilatéral", "Rowing pronation à la barre (barre aux hanche)", "Tirage vertical en supination", "Pullover à la poulie")

        }
        else if(morpho.ligne === "breviligne" && morpho.epaule === "etroit"){
            info.conseils.ligne = morphologie[0].ligne.brev
            info.conseils.epaule = morphologie[1].epaule.etroit
            info.conseils.pec = "Probablement la meilleur morphologie pour travailler les pectoraux, risque de blessure réduit de par une amplitude plus faible et pectoraux avantagé mécaniquement de part une cage thoracique épaisse et des leviers (bras + épaules) couts."
            info.conseils.delto = "Vos deltoïdes risque de prendre du retard. Vos pectoraux risquent de prendre l'ascendant sur vos deltoïdes antérieur et votre faible largeur d'épaule risque de faciliter l'activation des trapèzes au détriment des autres portions des deltoïdes. Il faut donc impérativement veiller à ne lever que le bras durant tous mouvement d'élévations (élévations latérales par exemple). Dès que votre épaule (visible grâce au mouvement de la clavicule) commence à se lever, le mouvement devient inefficace."
            info.conseils.dorsaux = "Le recrutement de vos dorsaux devrait être relativement simple, vos épaules étroites et vos bras cours réduisent l'amplitude et les leviers pour vos dorsaux favorisant leur recrutement. Veiller cependant à ne pas cherche à fléchir les bras lors de mouvement de tirage mais plutôt à amener les coudes aux hanches."
            info.conseils.trapeze = "Vos épaules étroites devraient faciliter le recturement de vos trapèze, vous avez probalement peu de mobilité d'omoplate mais cela faciltie leur recrutement naturel dans la plupart des mouvements car vous n'aurez pas à effeecturer une grande amplitude et vous pourrez donc produire bien plus de force avec vos trapèzes. Au rowing pour les trapèze, tirez au niveau du torse plutot qu'au niveau des hanches. Une prise pronation aide à garder les coude écarté du corps afin de moins recruter les dorsaux."
            info.exercices.pec.push("Développé couché", "Machine convergeante", "Ecarté à la poulie assis sur un banc" , "Développé incliné", "Machine convergeante", "Ecarté à la poulie assis sur un banc")
            info.exercices.dos.push("Tractions", "Tirage poulie basse unilatéral en supination", "Tirage poulie haute unilatéral", "Rowing pronation à la barre (barre aux hanche)", "Tirage vertical en supination", "Pullover à la poulie")

        }
    }
    else if(morpho.cage === "plate"){
        info.conseils.cage = morphologie[2].cage.plat
        if(morpho.ligne === "longiligne" && morpho.epaule === "large"){
            info.conseils.ligne = morphologie[0].ligne.long
            info.conseils.epaule = morphologie[1].epaule.large
            info.conseils.pec = "Pour bien recruter vos pectoraux, il est impératif de bien exécuter les mouvements. Omoplate resserrées dans le dos, torse bombé et très probablement amplitude réduite. Le mieux est de travailler sur des exercices qui compensent certains défaut comme le développé décliné ou les dips (dips dès lors où l'on se limite à une amplitude coude à hauteur d'épaule) ou travailler princiapelement avec les machines convergeantes (Remplacer votre premier exercice pectoraux par un exercice à la machine si peu de progrès aux exercice à charge libre). Il est même possible dans certains cas de commencer votre séance par un exercice d'isolation pour réussir à bien les recruter."
            info.conseils.delto = "Vous ne devriez pas avoir de mal à travailler vos épaules. Veillez à ne pas travailler le deltoïde antérieur en isolation." 
            info.conseils.dorsaux = "Vos bras longs augmentent l'amplitude et les leviers, ce qui ne favorise pas le travail des dorsaux et aura tendance à favoriser le travail des bras. De plus, épaule large signifie souvent omoplates très mobiles et les trapèze peuvent, de part leur mouvements, prendre l'ascendant sur les dorsaux. Donc veiller à chercher à tirer le coude vers la hanche plutôt qu'à fléchir le bras et garder vos omoplates fixes dans le dos. Pour cela le mieux est de réduire l'amplitude, ne pas aller chercher l'étirement maximal que ça soit au triage vertical, traction et aux rowing mais aussi ne pas chercher la contractions maximale (en essayant par exemple de monter le menton au dessus de la barre aux tractions) car cela pourait vous forcer à utiliser vos bras plutot que votre dos."
            info.conseils.trapeze = "Pour bien recruter vos trapèzes is vous suffira simplement d'avoir une grande amplitude avec vos épaules durant les mouvement. Par exemple, aux rowing pour les trapèze, envoyer l'épaule en avant pendant la phase d'étirement, et bomber le torse en ramenant l'épaule vers l'arrière en contractant. Garder les coudes relativement écarté du corps (tirer avec les mains au niveau du torse plutôt que des hanches)"
            info.exercices.pec.push("Développé décliné", "Machine convergeante", "Ecarté à la poulie assis sur un banc", "Dips", "Machine convergeante", "Ecarté à la poulie assis sur un banc")
            info.exercices.dos.push("Tirage vertical prise pronation", "Tirage poulie basse unilatéral en supination", "Tirage poulie haute unilatéral", "Rowing pronation à la barre (barre au torse)", "Tirage vertical en supination", "Face pull")
        }
        else if(morpho.ligne === "breviligne" && morpho.epaule === "large"){
            info.conseils.ligne = morphologie[0].ligne.brev
            info.conseils.epaule = morphologie[1].epaule.large
            info.conseils.pec = "Vos bras courts vous permettent d'avoir une amplitude plus complète, cependant votre cage thoracique et vos épaules ne placent pas vos pectoraux dans une positon de force, c'est pourquoi il est préférable d'adapter les exercices. Pour le développé décliné il n'est pas n'écessaire d'avoir une grande déclinaison du banc. En ce qui concerne les dips, descendez jusqu'à avoir les coudes à hauteur d'épaule."
            info.conseils.delto = "Ne pas travailler le deltoïde antérieur. Vous ne devriez pas avoir trop de difficulté à travailler vos épaules."
            info.conseils.dorsaux = "Vos épaules larges peuvent signifier omoplates très mobile, veiller à les garder fixes lors de vos mouvement pour les dorsaux. Il est plus simple d'avoir une bonne exécution sur du tirage vertical mais rien ne vous empêche de faire des tractions."
            info.conseils.trapeze = "Travail des trapèze facilité par une potentielle bonne mobilité d'omoplate grâce à votre largeur d'épaule. Il vous suffit d'avoir le mouvement d'épaule (omoplate) le plus ample. Au rowing pour les trapèze, tirez au niveau du torse plutot qu'au niveau des hanches. Une prise pronation aide à garder les coude écarté du corps afin de moins recruter les dorsaux."
            info.exercices.pec.push("Développé décliné", "Machine convergeante", "Ecarté à la poulie assis sur un banc", "Dips", "Machine convergeante", "Ecarté à la poulie assis sur un banc")

            info.exercices.dos.push("Tirage vertical en pronation", "Tirage poulie basse unilatéral en supination", "Tirage poulie haute unilatéral", "Rowing pronation à la barre (barre au torse)", "Tirage vertical en supination", "Face pull")
        }
        else if(morpho.ligne === "longiligne" && morpho.epaule === "etroite"){
            info.conseils.ligne = morphologie[0].ligne.long
            info.conseils.epaule = morphologie[1].epaule.etroit
            info.conseils.pec = "Votre cage plate et vos long bras augmentent concidérablement l'amplitude sur les mouvements pour les pecs, l'amplitude complète pourrait à la fois vous causer des blessures aux épaules mais aussi trop engager les deltoïdes. C'est pourquoi le Développé décliné est un bon exercice pour vous, il réduit un peu l'amplitude et place votre cage thoracique et donc vos pectoraux dans une position plus puissante. Notez qu'il n'est pas n'écessaire d'avoir une grande déclinaison du banc. En ce qui concerne les dips, descendez jusqu'à avoir les coudes à hauteur d'épaule."
            info.conseils.delto = "Ne pas travailler le dentoïde antérieur. Impératif, surtout avec vos épaules étroites, de faire attention à ne lever QUE le bras durant le mouvement car vos trapèzes pourraient facilement intervenir. Si votre omoplate bouge (facile à voir, si la clavicule se lèvre durant les élévations latérales), le mouvement n'est pas bon."
            info.conseils.dorsaux = "Attention à ne pas chercher à fléchir les bras durant les mouvement pour le dos. Chercher à amener les coudes vers les hanches pour mieux travailler les dorsaux. Si vous avez quelconque difficulté sur les tractions (manque de force ou travail trop imporant des bras) vous pous pouvez faire du tirage vertical à la place, exercice plus simple à exécuter."
            info.conseils.trapeze = "Vos trapèze pourraient naturellement se développer notamment la partie supérieure. C'est valable pour le reste également du fait du peu d'amplitude nécessaire pour effectuer le mouvement, vos trapèze sont naturllement plus fort. Pour les recruter un maximum, c'est le mouvement de l'épaule (omoplate) qui va être le plus important durant les mouvements. Veillez à ne pas vous concentrer sur la flexion de bras. Au rowing pour les trapèze, tirez au niveau du torse plutot qu'au niveau des hanches. Une prise pronation aide à garder les coude écarté du corps afin de moins recruter les dorsaux."
            info.exercices.pec.push("Développé décliné", "Machine convergeante", "Ecarté à la poulie assis sur un banc", "Dips", "Machine convergeante", "Ecarté à la poulie assis sur un banc")

            info.exercices.dos.push("Tractions", "Tirage poulie basse unilatéral en supination", "Tirage poulie haute unilatéral", "Rowing pronation à la barre (barre aux hanche)", "Tirage vertical en supination", "Pullover à la poulie")
        }
        else if(morpho.ligne === "breviligne" && morpho.epaule === "etroite"){
            info.conseils.ligne = morphologie[0].ligne.brev
            info.conseils.epaule = morphologie[1].epaule.etroit
            info.conseils.pec = "Grâce à vos bras couts et vos épaules étroites vous avez un risque de blessures réduit aux épaules durant les mouvements et plus de facilité à recruter vos pectoraux. Veillez quand même à avoir une bonne exécutions des mouvements. Développé couché: Omoplates resseré dans le dos et cage bien bombée, prise de la barre un peu supérieur à la largeur d'épaule et on descend la barre au milieu ou au bas des pectoraux. Dips: Mouvement un peu plus libre mais veiller à ne pas avoir une trop grande amplitude, descnedre jusqu'à avoir les coudes à hauteur d'épaules."
            info.conseils.delto = "Ne pas travailler le dentoïde antérieur. Impératif, surtout avec vos épaules étroites, de faire attention à ne lever QUE le bras durant le mouvement car vos trapèzes pourraient facilement intervenir. Si votre omoplate bouge (facile à voir, si la clavicule se lèvre durant les élévations latérales), le mouvement n'est pas bon."
            info.conseils.dorsaux = "Le recrutement de vos dorsaux devrait être relativement simple, vos épaules étroites et vos bras cours réduisent l'amplitude et les leviers pour vos dorsaux favorisant leur recrutement. Veiller cependant à ne pas cherche à fléchir les bras lors de mouvement de tirage mais plutôt à amener les coudes aux hanches."
            info.conseils.trapeze = "Vos trapèze pourraient naturellement se développer notamment la partie supérieure. C'est valable pour le reste également du fait du peu d'amplitude nécessaire pour effectuer le mouvement, vos trapèze sont naturllement plus fort. Pour les recruter un maximum, c'est le mouvement de l'épaule (omoplate) qui va être le plus important durant les mouvements. Au rowing pour les trapèze, tirez au niveau du torse plutot qu'au niveau des hanches. Une prise pronation aide à garder les coude écarté du corps afin de moins recruter les dorsaux."
            info.exercices.pec.push("Développé couché", "Machine convergeante", "Ecarté à la poulie assis sur un banc", "Dips", "Machine convergeante", "Ecarté à la poulie assis sur un banc")

            info.exercices.dos.push("Tractions", "Tirage poulie basse unilatéral en supination", "Tirage poulie haute unilatéral", "Rowing pronation à la barre (barre aux hanche)", "Tirage vertical en supination", "Pullover à la poulie")
        }
    }

    if(morpho.ligne === "breviligne" && morpho.hanche === "Large"){
        info.conseils.hanche = morphologie[4].hanche.etroite
        info.conseils.chaineAnterieur = "Vous avez la morphologie parfaite pour avoir de bons quadriceps, les jambes courtes vous permet de rester bien droit sur les exercices ce qui redirige la tensions sur les quadriceps et limite la flexion de hanche (qui répartirait davantage le travail sur les fessiers et ischios). Vous n'aurez a priori pas besoin de vous concentrer dessus."
        info.conseils.chainePosterieur = "Vous aurez probablement des difficultés à travailler vos fessiers, principalement dû au positionnement naturel durant les mouvements (comme au squat) qui favorise le travail des quadriceps. Pour tenter de maximiser le travail des fessiers au squat il faut: réussir à davantage se pencher en avant (pour cela mettre la barre un peu plus bas dans le dos), avoir un écartement des pieds plus imporant et descendre jusqu'à avoir les cuisses parallèle au sol. Au soulevé de terre jambe tendue, flechir davantage les genoux pour rediriger la tension sur les fessiers (attention à ne pas pousser avec les jambes, les genoux ne doivent pas bouger), écarter un peu plus les jambes aide également. Pour les ischios on gardera les jambes tendues. Vous pouvez faire de la presse à cuisse pour les fessiers en mettant les jambes plus haut sur le plateau, cela peut être une bonne alternative au squat pour les fessiers. Sachez que le corps est bien fait, ce que l'on perd quelque part, on le ré équilibre à un autre."
        info.conseils.mollets = "En général on retrouve sur les jambes courtes des mollets plus longs et donc potentiellement plus facile à développer car moins de tendons. Cependant évitez d'y aller comme un bourrin, je vous conseille de marquer 1 seconde d'arrêt en bas du mouvement (quand les mollets sont bien étiré) avant de remonter, puis 1 seconde en haut (quand les mollets sont contractés) afin de réduire la restitution d'énergie par les tendons et donc de laisser le muscle effectuer le mouvement."

        info.exercices.mollets.push("Extention mollet debout")
        info.exercices.jambe.push("Squat", "Soulevé de terre jambe tendue (version ischios)", "Leg extenstion", "Soulevé de terre jambe tendue (version fessiers)", "Presse pieds en haut du plateau", "Leg curl", "Extentions mollets debout")
    }
    if(morpho.ligne === "longiligne" && morpho.hanche === "Etroite"){
        info.conseils.hanche = morphologie[4].hanche.large
        info.conseils.chaineAnterieur = "Vous aurez probablement des difficultés à développer vos quadriceps, le fait d'avoir des jambes longues vous forcera naturellement à davantage vous pencher en avant durant la plupart des exercice, ce qui réduira la felxion de genoux et donc l'étirement des quadriceps et redirigera de travail sur les fessiers. Au squat il faut effectuer le mouvement barre haute, garder les pieds relativement proche (pas non plus collé) et effectuer des squat complet en descendant le plus bas possible afin d'avoir le plus de flexion de genoux possible (attention, si votre mobilité ne vous le permet pas, ne forcez pas). Malheureusement, la plupart des presses à cuisses ne sont pas très efficace pour les travailler, cependant pour pouvez quand même essayer de remplacer le squat par un exercice à la presse en mettant vos pieds en bas du plateau. Finalement, si vous avez des difficultés à travailler vos quadriceps sur des exercice de base, les machines à leg extention sont très efficaces car elles permettent d'isoler parfaitement les quadriceps. Rien n'empêche de commencer par cet exercice dans votre séance."
        info.conseils.chainePosterieur = "Vous aurez probablement des facilités à travailler vos fessiers, vos jambes longues vous forceront naturellement à vous pencher en avant et réduira votre flexion de genoux donc engafera davantage vos fessiers, de plus bien souvent lorsque l'on a un des hanches étroite, les fessiers seront généralement naturellement plus massif. Sachez que le corps est bien fait, ce que l'on perd quelque part, on le ré équilibre à un autre. Il est aussi probable que vos fessiers prennent le pas sur vos ischios, sachez que pour recruter un meximum vos ichios sur du soulevé de terre jambe tendue il faut garder ces dernièrebtendues et pieds pas relativement serrés. Les machines à leg curls sont vos amies si vous rencontrez de veritables difficultés sur vos ischios."
        info.conseils.mollets = "En général, lorqsue l'on a de longues jambes, cela signifie aussi long tibia, mollets plus courts et par conséquent tendons plus long. Tendons plus long sifnigie que vous aurez probablement beaucoup plus de difficulté à empêcher ces derniers de restituer l'énergie accumulée lors du mouvement et donc à laisser les mollets effectuer le mouvement. Il est donc impératif de marquer 1 seconde d'arrêt en bas du mouvement (quand les mollets sont bien étiré) avant de remonter, puis 1 seconde en haut (quand les mollets sont contractés). Effectuer un mouvement plus lent est aussi important, principalement la phase d'étirement (quand on descend)."
        info.exercices.mollets.push("Extention mollet debout")
        info.exercices.jambe.push("Squat", "Leg extensions", "Leg curl", "Extensions mollets debout", "Soulevé de terre jambe tendues (version ischios)", "Presse pieds en bas du plateau", "Leg curl", "Extensions mollets debout")
    }

    if(morpho.ligne === "breviligne" && morpho.hanche === "Etroite"){
        info.conseils.hanche = morphologie[4].hanche.etroite
        info.conseils.chaineAnterieur = "Il y a de grandes chances pour que vous ayez des facilités sur vos quadriceps car avoir les jambes courtes vous permettra de rester plus droit sur la plupart des exercices ce qui favorisera davantage la flexion de genoux et dirigera la tension sur les quadriceps."
        info.conseils.chainePosterieur = "Il est possible que vous ayez des difficultés à travailler vos fessiers, principalement dû au positionnement naturel durant les mouvements (comme au squat) qui favorise le travail des quadriceps. Pour tenter de maximiser le travail des fessiers au squat il faut: réussir à davantage se pencher en avant (pour cela mettre la barre un peu plus bas dans le dos), avoir un écartement des pieds plus imporant et descendre jusqu'à avoir les cuisses parallèle au sol. Au soulevé de terre jambe tendue, flechir davantage les genoux pour rediriger la tension sur les fessiers (attention à ne pas pousser avec les jambes, les genoux ne doivent pas bouger),  écarter un peu plus les jambes aide également. Pour les ischios on gardera les jambes tendues. Vous pouvez faire de la presse à cuisse pour les fessiers en mettant les jambes plus haut sur le plateau, cela peut être une bonne alternative au squat pour les fessiers. Sachez que le corps est bien fait, ce que l'on perd quelque part, on le ré équilibre à un autre."
        info.conseils.mollets = "En général on retrouve sur les jambes courtes des mollets plus longs et donc potentiellement plus facile à développer car moins de tendons. Cependant évitez d'y aller comme un bourrin, je vous conseille de marquer 1 seconde d'arrêt en bas du mouvement (quand les mollets sont bien étiré) avant de remonter, puis 1 seconde en haut (quand les mollets sont bien contractés) afin de réduire la restitution d'énergie par les tendons et donc de laisser le muscle effectuer le mouvement."
        info.exercices.mollets.push("Extention mollet debout")
        info.exercices.jambe.push("Squat", "Soulevé de terre jambe tendue (version ischios)", "Leg extenstion", "Soulevé de terre jambe tendue (version fessiers)", "Presse pieds en haut du plateau", "Leg curl", "Extentions mollets debout")
    }
    if(morpho.ligne === "longiligne" && morpho.hanche === "Large"){
        info.conseils.hanche = morphologie[4].hanche.large
        info.conseils.chaineAnterieur = "Vous aurez probablement des difficultés à développer vos quadriceps, le fait d'avoir des jambes longues vous forcera naturellement à davantage vous pencher en avant durant la plupart des exercice, ce qui réduira la felxion de genoux et donc l'étirement des quadriceps et redirigera de travail sur les fessiers. Au squat il faut effectuer le mouvement barre haute, garder les pieds relativement proche (pas non plus collé) et effectuer des squat complet en descendant le plus bas possible afin d'avoir le plus de flexion de genoux possible (attention, si votre mobilité ne vous le permet pas, ne forcez pas). Malheureusement, la plupart des presses à cuisses ne sont pas très efficace pour les travailler, cependant pour pouvez quand même essayer de remplacer le squat par un exercice à la presse en mettant vos pieds en bas du plateau. Finalement, si vous avez des difficultés à travailler vos quadriceps sur des exercice de base, les machines à leg extention sont très efficaces car elles permettent d'isoler parfaitement les quadriceps. Rien n'empêche de commencer par cet exercice dans votre séance."
        info.conseils.chainePosterieur = "Vous aurez probablement des facilités à travailler vos fessiers, vos jambes longues vous forceront naturellement à vous pencher en avant et réduira votre flexion de genoux donc engafera davantage vos fessiers, de plus bien souvent lorsque l'on a un des hanches étroite, les fessiers seront généralement naturellement plus massif. Sachez que le corps est bien fait, ce que l'on perd quelque part, on le ré équilibre à un autre. Il est aussi probable que vos fessiers prennent le pas sur vos ischios, sachez que pour recruter un meximum vos ichios sur du soulevé de terre jambe tendue il faut garder ces dernières tendues et pieds relativement serrés. Les machines à leg curls sont vos amies si vous rencontrez de veritables difficultés sur vos ischios."
        info.conseils.mollets = "En général, lorqsue l'on a de longues jambes, cela signifie aussi long tibia, mollets plus courts et par conséquent tendons plus long. Tendons plus long sifnigie que vous aurez probablement beaucoup plus de difficulté à empêcher ces derniers de restituer l'énergie accumulée lors du mouvement et donc à laisser les mollets effectuer le mouvement. Il est donc impératif de marquer 1 seconde d'arrêt en bas du mouvement (quand les mollets sont bien étiré) avant de remonter, puis 1 seconde en haut (quand les mollets sont contractés). Effectuer un mouvement plus lent est aussi important, principalement la phase d'étirement (quand on descend)."
        info.exercices.mollets.push("Extention mollet debout")
        info.exercices.jambe.push("Squat", "Leg extensions", "Leg curl", "Extensions mollets debout", "Soulevé de terre jambe tendues (version ischios)", "Presse pieds en bas du plateau", "Leg curl", "Extensions mollets debout")
    }


    
    info.conseils.biceps = "Le travail des biceps peut être optionnel en cas de développement suffisant (par les exercices de base ou isolation). Cependant, voici comment je vous conseille de réfléchir: 1-Je veux juste travailler un peu plus mes biceps, dans ce cas je peux effectuer au moins un exercice pour le dos en prise supination (bonne alternative tant que ça ne perturbe pas le travail du dos en même temps, cela mettra un peu plus l'accent sur la portion courte du biceps cependant, dû au positionnement du bras), ou simplement ajouter un curl en supination (à savoir que le biceps étant composé de 2 portions, il arrive souvent qu'une des deux prenne le pas sur l'autre). 2-Je veux mettre l'accent sur la longue portion du biceps, alors dans ce cas ajoutez du curl incliné (ou remplacez l'exercice biceps que vous avez déjà par celui ci). 3- Je veux accentuer le travail de la courte portion, dans ce cas vous pouvez vous référer au 1 ou ajouter (ou rempalcer votre exo biceps actuel) par du curl pupitre (à effectuer sur un 'pupitre' vertical !) ou du curl spider."
    info.conseils.triceps = "Le travail des triceps peut être également optionnel en cas de développement suffisant (de part les exercices de base ou isolation). Cependant, voici comment je vous conseille de réfléchir: 1-Je veux travailler mes triceps dans leur ensemble au maximum, alors de la barre au front suffirait (à savoir que le muscle triceps étant composé de 3 portions, il arrive souvent que une des portion prenne le pas sur les autres). 2- Je veux travailler ma longue portion du triceps, alors effectuez des extentions triceps au dessus de la tête si possible à la poulie. 3-Je veux travailler mon chef latéral, dans ce cas la effectuez des pushdown à la poulie, si possible avec une corde."

    info.conseils.program = program[morpho.training - 1].program

}