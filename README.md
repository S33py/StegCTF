# St3gS33py
- Salut à tous je vous présente la WriteUP de mon chall stéganographie, la WriteUP n'est pas encore terminée.
- Je suis l'auteur du script resolve, d'ailleurs j'ai pas encore fini de compléter les ToS de mon cipher Seepyrus que j'ai inventé, ça va venir vous inquiétez pas.
## Analyse image JPEGSnoop
- Tout d'abord, voici l'image qu'on devra analyser et exploiter<br/><br/>
<img src="https://raw.githubusercontent.com/S33py/WriteUP-St3gS33py/master/st3gs33py.jpg"/><br/><br/>
- J'ouvre l'image à l'aide de JPEGSnoop, je vous indique déjà les parties intéressantes.<br/><br/>
<img src="https://media.discordapp.net/attachments/745665491774996631/746070274230976552/unknown.png"/><br/><br/>
- En premier lieu on nous indique que la taille de de l'image est de 35514 octets.<br/>
- On a aussi l'attribut du Marker DQT notamment "xFFDB".<br/>
- L'offset de la table de quantification notamment "0x00000014"<br/>
- Ensuite on voit qu'il y a 7 rangées du Marker DQT avec comme ID "0" et une matrice néanmoins intéressante.<br/>
- Comme dernière information on a la taille de la table qui fait 67 octets, même si cette information nous sera inutile.<br/>
## Développement
- Le but étant de créer un script à fonctions arithmétiques on doit donc développer des fonctions sélectives qui finiront par correspondre à nos attentes.<br/>
- J'ai opté pour le langage Javascript car ça m'aura permis d'en apprendre plus vu que je suis encore en apprentissage.<br/>
### DQT Market xFFDB
- Pour résoudre le le marker DQT avec nom assigné xFFDB.<br/><br/>
<img src="https://media.discordapp.net/attachments/745665491774996631/746343389015965749/unknown.png?width=695&height=402"/><br/><br/>
- Dans les ToS il est affiché qu'on doit utiliser la méthode substr() pour sélectionner la partie DQT avec une incrémentation 0x0f tout en implémentant le tout en hexadécimal.<br/>
- On coffre la fonction et on passe directement au RGBBuffer<br/>  
### RGBBuffer
- Voici ce que j'ai fait pour résoudre le RGBBuffer<br/><br/>
<img src="https://media.discordapp.net/attachments/745665491774996631/746344192548012062/unknown.png"/><br/><br/>
- Je crée trois variables dupées par des valeurs hexadécimales, la première R je lui affectionne 0xff0000 et je la code en 16 octets.<br/>
- Ensuite G 0x00ff00 et je la code en 8 octets, puis B que j'affectionne en 0x0000ff mais cette fois-ci sans coder les octets.<br/>
- Puis il reste plus qu'à faire la fonction qui implémente le tout et on a notre résultat.<br/>
### Matrice
<img src="https://media.discordapp.net/attachments/745665491774996631/746092662448324699/unknown.png"/><br/>
- On doit employer le cipher Seepyrus que j'ai inventé, il a été présenté dans les ToS, je vous le remets ici.<br/>
#### Seepyrus
- 3#1 = 4>4|<br/>
- 3#5| = 3><br/>
- 9#7> = 5>5|<br/>
- 18#7|>8 = 7|<br/>
- 12#7|>2 = 6><br/>
#### Vulgarisation de la 1E instruction
- Première instruction : 3#1 = 4>4|<br/>
3 = Le chiffre<br/>
#1 = Définit la position.<br/>
On sait donc que c'est le premier 3 de la matrice<br/>
4> = 4 rangées à droite en comptant le fait que ce soit du zero-based.<br/>
4| = 4 rangées en bas en comptant le fait que ce soit du zero-based.<br/>
- Et hop on arrive au chiffre 5<br/>
- Maintenant vous n'avez plus qu'à suivre ce procédé en regardant les symboles.<br/>
- Voici ce que j'obtiens en complétant le tout<br/><br/>
<img src="https://media.discordapp.net/attachments/745665491774996631/746074224535273652/unknown.png"/><br/><br/>
- Ici la solution ultime des nombres obtenus<br/><br/>
<img src="https://media.discordapp.net/attachments/745665491774996631/746343648236535958/unknown.png?width=695&height=215"/><br/><br/>
- Selon les ToS du challenge, on doit suivre la concordation des couleurs tout en les inversant.<br/>
- Rouge > Rose > Vert > Orange > Bleu<br/>
- J'ai donc assemblé les numéros à l'aide de la méthode employée tout en prêtant attention aux couleurs.<br/>
Je crée 5 tableaux vu qu'il y a 5 flèches qui relient chacune 2 valeurs. J'utilise toString() sur chaque tableau pour convertir les chiffres en caractères car la fonction split() n'est pas compatible pour les nombres entiers (petite implé du langage pour pallier cette problématique ce serait bien javascript svp :] ?). Ensuite je concatène chaque tableau pour assembler les nombres. La variable "final" utilise split(',') SANS OUBLIER la virgule entre les guillemets pour excepter la virgule dans la réponse finale car c'est des tableaux. Puis j'utilise la méthode reverse() pour inverser chaque caractère et join('') pour rassembler les caractères inversés.<br/>
## Finalisation
- On a plus qu'à exécuter le script final et on obtient nos 3 flags.<br/><br/>
<img src="https://media.discordapp.net/attachments/745665491774996631/746346188978257960/Action_21-08-2020_14-30-23.gif"/><br/><br/>
- Marker DQT : St3g{0x7846464442}<br/>
- Buffer RGBHex : St3g{0x008aba}<br/>
- Key de la matrice : St3g{221112121879533}<br/>
