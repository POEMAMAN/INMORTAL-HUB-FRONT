const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const BookHungerGames = require('../../api/models/models.HungerGames/books.HungerGames.model');


const arrayBooksHungerGames = [
    {
        title: 'Los Juegos del hambre',
        publication_year: 2008,
        saga_index: 1,
        author: 'Suzanne Collins',
        resume: 'Los Juegos del Hambre se desarrolla en un país llamado Panem, lo que es en realidad una civilización postapocalíptica ubicada en lo que antes era América del Norte. El territorio se comprende de El Capitolio, que es la central del país, y trece estados que están bajo su control, los cuales son llamados distritos. Hace cerca de 100 años, el Distrito 13 inició una rebelión ante El Capitolio, donde se perdieron una enorme cantidad de vidas, además de la destrucción total de dicho distrito. Como castigo para evitar otros futuros levantamientos, El Capitolio creó un evento llamado «Los Juegos del Hambre», en donde anualmente los doce distritos restantes deben enviar dos "tributos", un chico y una chica con edades entre los doce y los dieciocho para que lucharan a muerte en una arena hasta que solamente quedara uno, mientras todo Panem los observa a través de televisión.                                                                                                  La historia es narrada en primera persona desde la perspectiva de Katniss Everdeen, una adolescente de dieciséis años que vive en el Distrito 12, el más pobre de todos y el encargado de la actividad minera. Tiene una hermana menor llamada Primrose Everdeen, la cual acaba de cumplir doce años y es su primer año como potencial tributo para los juegos, que en esta ocasión son los 74.os El día que toca escoger a los tributos, llamado «Día de cosecha», Prim resulta ser elegida como tributo femenino del Distrito 12. Sin embargo, la actitud protectora de Katniss hacia su hermana provoca que ella se ofrezca como tributo para salvar la vida de Prim. Peeta Mellark, quien fue compañero de clases de Katniss en la infancia, resulta ser elegido como tributo masculino, así que ambos se dirigen a El Capitolio para su preparación. En el viaje, conocen a su mentor Haymitch Abernathy, único ganador de los juegos con vida salido del Distrito 12. Él los aconseja y empieza a explicarles todo lo que deberán hacer en los días posteriores. Haymitch resalta el hecho de que deben conseguir patrocinadores para recibir ayuda en la arena. Previo a los entrenamientos, Katniss conoce a su estilista Cinna, quien es la única persona de El Capitolio con quien ella se siente bien. Él le explica que se acerca el desfile de los tributos, un evento donde los participantes de los juegos son presentados ante el público. Cinna planea que Katniss y Peeta utilicen un traje que emane fuego para así llamar la atención y conseguir patrocinadores. Luego de que ambos aparecieran en el desfile, recibieron una ovación de pie por parte del público, y Katniss en concreto fue apodada como «la chica en llamas». Posteriormente, todos los tributos deben ser entrevistados por Caesar Flickerman, un animador de El Capitolio. Allí Peeta revela que durante un largo tiempo ha estado enamorado de Katniss, aunque ella cree que es solo una estrategia para conseguir patrocinadores.                                                                                           Tras varios días de entrenamiento, los tributos deben dar un espectáculo para los Vigilantes de El Capitolio. Esto con el fin de recibir una puntuación del uno al doce para orientar a los patrocinadores. En su presentación, Katniss arroja una flecha a una manzana ubicada en la boca de un cerdo del área restringida de los Vigilantes, lo que los deja atónitos. Si bien atentó contra la vida de los miembros de El Capitolio, Katniss recibe una puntuación casi perfecta de once, la más alta obtenida por alguno de los veinticuatro tributos de ese año. Al día siguiente, todos son transportados a la arena, la cual este año resultó ser un gran bosque con un río que atraviesa el centro. El evento inicia con todos los tributos alrededor de un centro de armamento llamado la Cornucopia, una estructura dorada con forma de cuerno donde yacen todo tipo de armas, incluyendo arco y flecha, la principal maestría de Katniss. Ella, siguiendo consejos de Haymitch, toma una mochila y rápidamente se adentra en el bosque para buscar agua y comida. No obstante, es descubierta por un grupo de tributos, quienes formaron una alianza para hacer más fácil la competencia. Antes de que la alcancen, ella escala un árbol para refugiarse y pasa la noche allí. Mientras los demás tributos duermen en la parte inferior del árbol esperando que baje, Katniss nota que Rue, el tributo femenino del Distrito 11, comienza a hacerle señales de que corte una rama del árbol que tiene un nido de avispas. Caesar informa al público que son en realidad rastrevíspulas, un grupo de avispas genéticamente modificadas cuyo veneno es realmente mortal. Luego de que Katniss hiciera caer el nido encima de los demás tributos, las avispas los espantan y matan a Glimmer, el tributo femenino del Distrito 1 que posee el arco tan anhelado por Katniss. Ella lo roba y decide huir. Sin embargo, recibió una dosis de veneno suficiente para dejarla inconsciente.                                                                                             Mientras Katniss se encuentra dormida, Rue cuida de ella. Ambas deciden formar una alianza e idean un plan para destruir las provisiones de los tributos que seguían a Katniss. Si bien funcionó, Rue es capturada mientras está escapando de ellos, pero Katniss la encuentra a tiempo. Sin embargo, otro tributo asesina a Rue clavándole una lanza en el pecho mientras simultáneamente Katniss lo asesina a él lanzándole una flecha al cuello. Antes de que Rue muera, Katniss se queda a su lado mientras le canta una canción. Al morir, le hace una cama de flores alrededor para simular respeto hacia ella, acción que enfurece a El Capitolio. Para tranquilizar al público que quedó conmovido y enfurecido por la muerte de Rue, El Capitolio hace un cambio de reglas para llamar la atención de Katniss. Esta consiste en que ahora puede haber dos ganadores, pero solo si ambos pertenecen al mismo distrito. En seguida, Katniss comienza a buscar a Peeta, quien yace malherido en el río, así que cuida de él. Sin embargo, Peeta posee una grave herida en su pierna, por lo que necesita una medicina. El Capitolio aprovechó la ocasión para invitar a los seis tributos restantes a un «festín» en la Cornucopia. Dado que todos necesitan algo con urgencia, se ven en la necesidad de enfrentarse a los demás tributos para conseguirlo. Allí Clove, el tributo femenino del Distrito 2, tiene una batalla contra Katniss donde casi gana. Sin embargo, aparece Thresh, el tributo masculino del Distrito 11, y mata a Clove creyendo que fue ella quien asesinó a Rue, su compañera de distrito. Debido a que Katniss y Rue formaron una alianza, Thresh le perdona la vida y escapa.                                                                                                Habiendo muerto dos tributos más, solo quedan con vida Katniss, Peeta y Cato, el tributo masculino del Distrito 2 que ha tenido el control de los juegos desde el inicio. Debido a que nadie quiere arriesgarse, El Capitolio crea mutaciones de lobos con el ADN de los tributos caídos, a los que apodan mutos. Estos persiguen a Katniss y a Peeta hasta llegar a la Cornucopia, donde se encuentran a Cato y tienen una feroz batalla hasta que finalmente Cato cae y es devorado por los mutos. En un acto de misericordia, Katniss le dispara a Cato una flecha en su cabeza para acabar con su dolor. Creyendo ya haber ganado, Katniss y Peeta esperan ansiosamente a que anuncien que son los ganadores. Sin embargo, El Capitolio revoca la regla de que dos personas podían ganar si pertenecían al mismo distrito, obligando a Katniss y a Peeta a luchar entre sí. Si bien Peeta cede para que Katniss lo asesine, ella se niega y saca unas bayas venenosas para que ambos cometan un doble suicidio y dejen a El Capitolio sin un vencedor. Antes de que ambos se traguen las bayas, se anuncia que han ganado los juegos, así que son retirados de la arena. Al salir, Haymitch advierte a Katniss de que se ha convertido en una amenaza para El Capitolio por haberlos dejado en evidencia ante todo Panem. Luego Peeta se entera de que en realidad Katniss no lo ama y solo estuvo fingiendo su amor para conseguir patrocinadores. El libro termina con ambos volviendo al Distrito 12 y reencontrándose con sus familias.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710439308/JuegosDelHambre/Books/1_book_JuegosDelHambre_fkuqdj.jpg',
    },
    {
        title: 'Los Juegos del Hambre, En Llamas',
        publication_year: 2009,
        saga_index: 2,
        author: 'Suzanne Collins',
        resume: 'Contra todo pronóstico, Katniss Everdeen ha ganado los Juegos del Hambre anuales junto con el otro tributo de su distrito, Peeta Mellark. Pero fue una victoria conseguida mediante el desafío al Capitolio y a sus crueles reglas. Katniss y Peeta deberían estar contentos. Después de todo, acaban de conseguir para ellos y sus familias una vida de seguridad y abundancia. Pero hay rumores de rebelión, y Katniss y Peeta, para su horror, son la cara de esa rebelión. El Capitolio está furioso y quiere venganza.                                                                                                Durante su "Tour de la Victoria", son testigos de que los distritos empiezan a rebelarse. El Distrito 8 se defiende de los agentes de la paz, así como el 11, en el que se inicia una revuelta después de que Katniss recuerde a Rue y a Thresh, los tributos del Distrito 11 asesinados en los anteriores juegos. El Capitolio aumenta la seguridad en todos los distritos, electrificando la cerca de la Veta, cambiando al nuevo jefe de paz en el Distrito 12 por alguien mucho más cruel y sanguinario. Gale es encontrado vendiendo el pavo que había cazado y es torturado en público, siendo azotado en la plaza. Darius, un agente de paz que siempre ha vivido en la Veta, intenta parar al nuevo agente pero éste le da un golpe.                                                                                                    Pasan los días y el antiguo jefe y Darius desaparecen del Distrito 12. Entre tanto, Katniss se encuentra con dos mujeres, Bonnie y Twill, que han conseguido huir del Distrito 8 que estaba en guerra contra el Capitolio, y que están convencidas de que el Distrito 13 todavía existe, y que está habitado por rebeldes. Katniss informa de esto a Haymitch Abernathy, pero este le dice que no es más que una leyenda. Mientras, los nuevos Juegos, donde este año Katniss será la mentora, anuncian que serán especiales, pues celebran el Vasallaje de los 25 (ya que cada 25 años hacen unos Juegos especiales). Y este año los tributos que jugarán en la arena serán antiguos vencedores. Entonces Katniss sabe que ella deberá volver a los Juegos, porque es la única vencedora del Distrito 12. El hombre elegido es Haymitch, pero Peeta se presenta voluntario.                                                                                                    Al volver al Capitolio como tributo de nuevo, sus estilistas están muy tristes, porque se habían encariñado. Una vez allí Katniss descubre que Darius ha sido convertido en un avox (un esclavo cuya lengua ha sido cortada). Durante el segmento de entrevistas, Peeta miente diciendo que Katniss está embarazada y como los antiguos planes de boda habían quedado atrás por el hecho de que ambos tienen que volver a la arena, ellos en una ceremonia ficticia en el Distrito 12, con pan y estando los 2 presentes se casaron.                                                                                                      Cinna le prepara los vestidos pero el presidente del Capitolio quiere que vaya con el vestido de novia, así que este le hace unos retoques. Durante la entrevista, el vestido se enciende y deja ver otro vestido debajo, de plumas negras y alas blancas, como el sinsajo. Ese ahora es el símbolo de la revolución y a Cinna, mientras Katniss entra en la plataforma para entrar a Los Juegos, es golpeado por agentes de la paz, muriendo.                                                                                                Durante los juegos, que esta vez es una isla donde suceden cosas extrañas y tiene forma de reloj, en la que dependiendo de la zona y de la hora, suceden catástrofes o peligros diferentes, desde niebla venenosa, hasta unos pájaros que imitan las voces de sus seres queridos (charlajos), pasando por olas gigantes y bestias sanguinarias. Katniss sale malherida ya que Johanna le hizo una herida con un cuchillo para desactivar su rastreador. Entonces se entera de que había un plan para huir de la arena e ir al Distrito 13, que realmente existe pero ella lo desconocía. Peeta no tiene la misma suerte y es capturado por el Capitolio, al igual que Johanna y Enobaria (dos tributos de diferentes distritos). Entonces, al final del libro, recibe una visita de Gale. Éste le comunica que su familia está a salvo, pero el Distrito 12 ha sido bombardeado y destruido.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710439306/JuegosDelHambre/Books/2_book_JuegosDelHambreEnLlamas_vldstz.jpg',
    },
    {
        title: 'Los Juegos del Hambre, Sinsajo',
        publication_year: 2010,
        saga_index: 3,
        author: 'Suzanne Collins',
        resume: 'Todo empieza cuando Katniss Everdeen logra salir del tercer "Vasallaje de los Veinticinco", los septuagésimo quintos Juegos del Hambre. Ella empieza con un recorrido al distrito 12, su antiguo hogar el cual ha sido bombardeado por el Capitolio como venganza por haber escapado de la arena de los últimos juegos, mientras Peeta Mellark, el tributo masculino del distrito 12, es capturado por el Capitolio. Katniss ha sido protegida y, en cierto modo sometida por el distrito 13, el cual todo Panem creía que había sido destruido hace muchos años. El distrito 13 está preparando un ataque contra el Capitolio, liderados por la presidenta Alma Coin, y necesitan a una persona que anime a los demás distritos a levantarse contra el Capitolio. Necesitan una imagen. Necesitan un símbolo. Necesitan a Katniss, "El Sinsajo".                                             Después de su rescate por los rebeldes del distrito 13, Katniss está convencida de convertirse en "El Sinsajo": un símbolo de la rebelión contra el Capitolio. Como parte de un acuerdo, se exige que el líder del Distrito 13, la presidenta Coin, otorgue inmunidad a todos los vencedores de los Juegos del Hambre que fueron capturados por el Capitolio. También exige el derecho a matar al presidente Snow por sí misma. En un audaz rescate de Gale y otros rebeldes, Peeta, Annie y Johanna, previamente capturados, son rescatados desde el Capitolio. Sin embargo, Peeta ha sido "secuestrado", un método de tortura que consiste en lavarle el cerebro con veneno de rastrevíspula (un insecto creado en laboratorio), para creer que Katniss es el enemigo, y trata de matarla en su primer encuentro en el hospital del distrito 13.                                                                                                           Los rebeldes, como Katniss, Gale y la comandante Paylor (del distrito 8), toman el control de los distritos y finalmente comienzan un asalto en el propio Capitolio. Sin embargo, un asalto a un barrio "seguro" del Capitolio va mal y Katniss y su equipo deben huir atravesando lugares peligrosos de este con la intención de encontrar y matar al presidente Snow. Muchos miembros del equipo de Katniss son asesinados, incluyendo a Finnick y Boggs. Con el tiempo, Katniss y Gale junto a los miembros vivos de su equipo se encuentran dirigiéndose hacia la mansión de Snow, que supuestamente ha sido abierta para albergar a los niños del Capitolio (pero en realidad la intención es proporcionar escudos humanos para Snow). Después, unos paracaídas caen desde un aerodeslizador del Capitolio con lo que aparentemente eran alimento y medicina para los niños, pero contenían bombas, y al llegar al suelo estallan matando a muchos de estos niños y a un equipo médico rebelde que llegaba para auxiliarlos, en el que se encontraba la hermana de Katniss, Prim. La muerte de Prim hace que Katniss se encuentre psicológicamente inestable.                                                                                                  El presidente Snow es juzgado y declarado culpable, pero antes de su sentencia, él le dice a Katniss que el asalto final que mató a Prim fue ordenado por la presidenta Coin, no por el Capitolio. Katniss se da cuenta de que si esto es cierto, la bomba usada por Coin fue diseñada por su mejor amigo Gale y por el genio informático Beetee (un vencedor de Juegos pasados el cual es el encargado de realizar armas para el distrito 13), ambos desarrollaron armamento para atacar al Capitolio y a Snow, pero Coin, quien quiere hacerse con el poder, según Snow, las usa para desestabilizar a Katniss y evitar así que ella sea una oponente en su futuro gobierno. Katniss se da cuenta de que, aunque es consciente de que Gale no diseñó la bomba para su hermana, nunca será capaz de mirar a Gale de la misma manera, independientemente de si estaba o no directamente involucrado en la muerte de Prim. Katniss recuerda una conversación con el presidente Snow en el que se comprometió a no mentirse unos a otros, y por lo tanto, se convence más de que Snow no miente y que probablemente el atentado que había matado a su hermana había sido dirigido por el distrito 13. Cuando se supone que se prepara para ejecutar a Snow, se da cuenta de que estaba diciendo la verdad y mata a la presidenta Coin en su lugar, clavándole la flecha que iba dirigida a Snow. Un alboroto sobreviene y Snow es encontrado muerto pues, posiblemente, se ahogó con su propia sangre o fue pisoteado por la multitud. La comandante Paylor, una líder rebelde del distrito 8, se convierte en la nueva presidente de Panem después de una votación de emergencia. Katniss es absuelta debido a su aparente locura y vuelve a su casa en el distrito 12, junto con otros que están tratando de reconstruir el distrito el cual se encuentra en cenizas. Peeta regresa poco después tras haber recuperado gran parte de su memoria. Por último, Katniss admite que haberse enamorado de Peeta era inevitable, ya que siempre ha representado para ella la promesa de un futuro mejor en vez de la destrucción que ahora se asocia con Gale. Afirma que no necesita el fuego y odio de Gale, pues ya tiene suficiente con lo vivido y que necesita al diente de león de color amarillo, que significa esperanza y no destrucción, y que la vida puede seguir por duras que sean nuestras pérdidas... Haymitch, Peeta y Katniss crean un libro lleno de buenos recuerdos y pequeños detalles y fotografías de personajes que fueron asesinados a lo largo de la guerra, los cuales no deberán de ser olvidados: Finnick, Boggs, Prim, Rue...                                                                                                        En el epílogo, Katniss habla como un adulto, más de veinte años después. Katniss mantiene una relación amorosa con Peeta y tienen dos hijos. Un niño (el menor), de ojos grises (como Katniss) y pelo rubio (como Peeta) y una niña (la mayor) de pelo oscuro (como Katniss) y ojos azules (como Peeta). Los Juegos del Hambre han terminado, las arenas han sido destruidas, y se les construyeron monumentos a los tributos muertos (ganadores o perdedores), pero ella teme el día en que sus hijos aprendan los detalles de la participación de sus padres, tanto en los Juegos como en la guerra. Peeta y Katniss a veces tienen recuerdos y pesadillas de las experiencias vividas en los Juegos. Peeta tiene flashbacks. Cuando se siente angustiada, Katniss se recuerda a sí misma de todo el bien en la que está rodeada, de todos los que murieron para que ellos pudieran vivir así; suele hacer listas mentales de esto, ella lo ve como un juego angustioso y repetitivo, pero pese a todo, se recuerda a sí misma que siempre puede haber juegos peores. Su última frase del libro y el epílogo dice: "Aun así, sé que hay juegos mucho peores."',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710439310/JuegosDelHambre/Books/3_book_JuegosDelHambreSinsajo_qjmei3.jpg',
    },
    {
        title: 'Los Juegos del Hambre, Balada de Pájaros Cantores y Serpientes',
        publication_year: 2020,
        saga_index: 4,
        author: 'Suzanne Collins',
        resume: 'Coriolanus Snow es seleccionado para guiar un tributo en los 10.os Juegos del Hambre y se le asigna una tributo del Distrito 12 (Lucy Gray). Las cosas se vuelven difíciles antes de que comiencen los juegos, ya que uno de los mentores muere a manos de su propio tributo y varios tributos y mentores resultan heridos y muertos porque había bombas en la Arena y fueron estalladas por Coriolanus.                                                                                           Coriolanus Snow hace todo lo posible para ayudar a su tributo, pero también se ve envuelto en los problemas. Coriolanus termina en la Arena él mismo, a las órdenes de la Vigilante Jefe. Este hace todo lo posible por salvar a Lucy. Lucy llega a los tres últimos hasta que finalmente es declarada ganadora de los 10º Juegos del Hambre. Pero a Coriolanus lo obligan a inscribirse en los agentes de la paz.                                                                                                      Este lo hace y pide ser asignado al Distrito 12, ya que se ha enamorado perdidamente de Lucy. En el Distrito 12, las cosas se complican rápidamente, ya que Sejanus esta empeñado en ayudar a los rebeldes del Distrito 12. Coriolanus se entera de esto, mientras intenta formar una nueva vida con Lucy. También toma la prueba, como Sejanus, para convertirse en oficial de los agentes de la paz. Las cosas llegan a un punto crítico cuando Coriolanus descubre que Sejanus ayuda a los rebeldes y de forma encubierta informa al Capitolio de la actividad y trama un plan desesperado con Lucy para huir hacia el norte, antes de enterarse de que pasó la prueba de Oficial.                                                                                               Coriolanus huye con Lucy, pero luego descubre que puede deshacerse de las pruebas. Al mismo tiempo, Lucy Gray se da cuenta de su traición a Sejanus y su lealtad al Capitolio. Ella huye y le tiende una trampa. Él trata de localizarla, pero es mordido por una serpiente en el bosque. Él dispara al bosque, con la esperanza de matarla. Al día siguiente, viaja para convertirse en oficial, pero la Dr. Gaul lo desvía de regreso al Capitolio. Ella ha decidido tomarlo como su protegido. Comienza a estudiar en la Universidad, en el Capitolio y también asume un puesto como aprendiz de Vigilante Jefe, aunque los demás lo tratan como un miembro mas. Luego, Coriolanus implementó muchas de sus ideas en los Juegos que veremos en años posteriores. Los Plinth financian sus estudios y estilo de vida, convencidos de que era un gran amigo de su hijo. Coriolanus envenena a Casca Highbottom, la primera víctima de su método característico de despachar a sus enemigos, reflejando que "¡Los Snow siempre caen de pie!".',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710439313/JuegosDelHambre/Books/4_book_JuegosDelHambreBaladaPajarosSerpientes_mookxh.jpg',
    },
]
mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allBooksHungerGames = await BookHungerGames.find();
        if (allHungerGames.length > 0) {
            await BookHungerGames.collection.drop();
            console.log('Libros borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Libros', err);
    })
    .then(async() => {
        const booksHungerGames = arrayBooksHungerGames.map((book) => new BookHungerGames(book));
        await BookHungerGames.insertMany(booksHungerGames);
        console.log('Libros insertados');
    })
    .catch((err) => {
        console.log('error insertando los Libros', err);
    })
    .finally(() => mongoose.disconnect());