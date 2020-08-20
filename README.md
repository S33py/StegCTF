# StegCTF
- Salut à tous je vous présente la WriteUP de mon chall stéganographie.
- Voici les ToS à respecter et à suivre pour résoudre le challenge
## Analyse image JPEGSnoop
- J'ouvre l'image à l'aide de JPEGSnoop, je vous indique déjà les parties intéressantes.<br/><br/>
<img src="https://media.discordapp.net/attachments/745665491774996631/746070274230976552/unknown.png"/><br/><br/>
- En premier lieu on nous indique que la taille de de l'image est de 35514 octets.<br/>
- On a aussi l'attribut du Marker DQT notamment "xFFDB".<br/>
- L'offset de la partie de la table de quantification notamment "0x00000014"<br/>
- Ensuite on voit qu'il y a 7 rangées du Marker DQT avec comme ID "0" et une matrice néanmoins intéressante.<br/>
- Comme dernière information on a taille de la table qui fait 67 octets, même si cette information nous sera inutile.<br/>
## Développement
- Le but étant de créer un script à fonctions arithmétiques on doit donc développer des fonctions sélectives qui finiront par correspondre à nos attentes.<br/>
- J'ai opté pour le langage Javascript car ça m'aura permis d'en apprendre plus vu que je suis encore en apprentissage.<br/>


### Fonction Matrice
<img src="https://media.discordapp.net/attachments/745665491774996631/746074224535273652/unknown.png"/><br/><br/>
- Voici ce que j'ai fait pour résoudre cette matrice<br/><br/>
<img src="https://media.discordapp.net/attachments/745665491774996631/746078634091217027/unknown.png"/><br/><br/>
- Selon les ToS du challenge, on doit suivre la concordation des couleurs.
J'ai donc assemblé les numéros à l'aide de la méthode employée tout en prêtant attention aux couleurs.
Je crée donc 5 tableaux vu qu'il y a 5 flèches qui relient chacune 2 valeurs. 
J'ai utilisé toString() sur chaque tableau pour convertir les chiffres en caractères car la fonction split() ne marche pas sur des nombres entiers.
Ensuite j'ai concatené chaque tableau pour assembler les nombres.
La variable "final" utilise split(',') SANS OUBLIER la virgule entre les guillemets pour excepter la virgule dans la réponse finale car c'est des tableaux.
Puis la méthode reverse() pour inverser chaque caractère et join('') pour rassembler les caractères inversés.
