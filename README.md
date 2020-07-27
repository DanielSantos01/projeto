# projeto
Weather app repository - an mobile app developed by using React Native tecnology

Uso do aplicativo:

Tela inicial: Ao abrir o aplicativo, você irá se deparar com uma tela simples e intuitiva, contando apenas com um botão interativo para procurar lugares.

Tela de pesquisa: A tela de pesquisa é raoávelmente mais cheia do que a tela inicial, então aqui vai uma breve descrição.

	º Você pode querer procurar por uma cidade que não sabe onde fica exatamente, para isso, você tem a possibilidade de digitar o nome da cidade na caixa de texto e o marcador do mapa irá se encarregar de te mostrar onde fica;

	º Você pode querer navegar pelo mapa e escolher uma cidade através dessa navegação. dê zoom in, zoom out, ou deslize sobre o mapa e, quando quiser selecionar um local para obter a temperatura, é só clicar sobre ele e o marcador irá mostrar qual a área que você escolheu;

	º No canto inferior você conta com 2 blocos de botões, cada bloco contendo 2 botões. O bloco da esquerda é referente ao marcador vermelho do mapa. Você pode escolher favoritar a o local mostrado pelo marcador vermelho para consultas futuras, ou apenas observar como está o clima naquele local no momento.

	º No canto esquerdo você conta com o bloco de botões associados à sua posição (bolinha azul no mapa), onde também pode favoritar o local ou apenas ver como está o clima no local onde você se encontra.

Tela de registro: Caso escolha favoritar algum lugar (sua posição ou qualquer outro local no mapa), você será levado a uma tela de registro, onde deverá escolher um nome para esse local. Após escolher o nome, você deve clicar no botão de registrar, para confirmar o registro. *Vale a pena notar que você será notificado caso escolha um nome que já faz parte da sua lista*. Após registrar, você será levado de volta à tela principal, onde poderá ver seu item com o nome por você escolhido.

Lista de locais - Tela principal: De volta à tela principal, você consegue ver seu item listado. O item em si é composto por 3 botões:
	º O primeiro botão conta com o nome que você escolheu e uma nuvem. Clicando sobre ele, você será levado à tela de visualização dos dados climáticos da região a qual o nome se refere. (ex. se você marcou Recife no mapa e salvou com o nome de casa, quando clicar sobre o nome casa, você receberá os dados climáticos de Recife).

	º O segundo é o botão de edição, onde você pode renomear o nome que deu para o local. *Vale a pena lembrar que você será alertado caso queira renomear para um nome que já consta na sua lista*

	º O terceiro é o botão de exclusão. Clicando sobre ele, você será perguntado se deseja realmente excluir aquele item da sua lista. Caso a resposta seja sim, ele será removido.

Adendos: 
1 - Você pode chegar à tela de visualização de dados climáticos tanto clicando no nome do local (caso tenha desejado favoritar), ou apenas clicando sobre o nome 'weather' na tela de pesquisa.

2 - Na tela dos dados climáticos você conta com a descrição do clima, humidade, temperatura, nome do local, imagem ilustrativa sobre o clima da região, além da visualização da posição real do lugar em questão através de um mapa estático.

3 - Os itens favoritados depois são mostrados primeiro na sua lista. Ou seja, se você salvou 'casa' e depois 'trabalho', a sua lista será mostrada 'trabalho' e 'casa'.

4 - Após atingir um certo número de locais salvos, você pode não ver mais o último item. Mas Calma! Isso foi feito para que o botão de pesquisa não deixasse de estar facilmente acessível para você e, rolando a lista para baixo, você poderá ver todos os seus itens salvos listados.

5 - Paciência: a primeira consulta pelos dados climáticos pode levar alguns segundos, mas eles vão aparecer ;)



