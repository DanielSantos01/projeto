# WeatherApp
_WeatherApp repository - a mobile app developed by using React Native tecnology!_

*Uso do aplicativo:*

*Tela inicial:*
	Ao abrir o aplicativo, você irá se deparar com uma tela simples e intuitiva. A tela
dispõe apenas de um botão de pesquisa (Através do qual você pode ter acesso
à tela de pesquisa) e uma lista contendo os locais salvos por você para futuras
visualizações climáticas. Ao acessar pela primeira vez o aplicativo, esta lista estará
vazia.

*Tela de Pesquisa:*
	Você pode chegar nela através do botão de pesquisa da tela principal. Aqui você
conta com um input de texto na parte superior, na qual você pode procurar pelos mais
diversos locais ao redor do mundo através de seus nomes. Além disso a tela conta com um mapa interativo onde o usuário pode interagir livremente marcando os locais, dando zoom, etc.
	Ainda nessa tela, na parte inferior, encontra-se um modal semi-aberto, onde, para abrí-lo
totalmente, basta arrastar a parte visível para cima. Através deste modal o usuário
pode verificar os dados climáticos da região marcada no mapa, além de poder salvar
o local para uma visualização posterior mais fácil. Ao salvar o local, o mesmo será
adicionado à lista de favoritos!

*Adendos:*

1º) Você pode ter acesso aos dados climáticos através do modal na tela de pesquisa, ou
clicando sobre o card que contém o nome do local na tela principal
(caso ele esteja na sua lista de favoritos);

2º) Cada local da lista de favoritos pode ser renomeado ou deletado;

3º) Não é possível salvar dois ou mais locais com o mesmo nome;

4º) Dependendo da conexão com a rede, o modal de dados climáticos pode apresentar uma tela
de carregamento. Mas fique tranquilo, assim que os dados forem carregados, eles serão
mostrados;

5º) Em caso de pesquisar a cidade pelo nome e ser levado a um local diferente, apague a última letra e adicione novamente em seguida;

6º) Testado nos seguintes dispositivos: 
- Moto G8 plus - Moto G7 Play - Samsung A30S - Samsung Galaxy J8
- Samsung Galaxy S8 - Samsung Galaxy S8 Plus - Xiaomi MiA1 - Xiaomi Redmi note 8 - Xiaomi Redmi note 7
- Xiaomi Redmi 6 pro - Xiaomi Redmi S2 - Zenfone 3 Max

**Para rodar o aplicativo em modo de debug, clone este repositório e, antes de tentar executar,
rode o comando yarn install para instalar localmente todas as dependências :D

