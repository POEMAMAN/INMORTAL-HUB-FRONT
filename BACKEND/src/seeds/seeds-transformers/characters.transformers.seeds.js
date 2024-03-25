const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Charactertransformers = require('../../api/models/models.Transformers/characters.Transformers.model');

const arrayCharacterstransformers = [{
        name: "Charlie",
        actor: "Hailee Steinfeld",
        profession: "Mecánica",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711386731/segundo%20spring/transformers/characters/charlie_myvqpa.jpg",
        resume: "Charlie Watson es una talentosa mecánica que descubre a Bumblebee, un Autobot disfrazado como un Volkswagen Beetle, y forma un vínculo cercano con él."
    },
    {
        name: "Carly",
        actor: "Rosie Huntington-Whiteley",
        profession: "Asistente y modelo",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711386687/segundo%20spring/transformers/characters/carly_m2qhax.jpg",
        resume: "Carly Spencer es una modelo que trabaja como asistente en la empresa de Dylan Gould. Se convierte en el interés romántico de Sam Witwicky y termina involucrada en la lucha entre los Autobots y los Decepticons."
    },
    {
        name: "Cade Yeager",
        actor: "Mark Wahlberg",
        profession: "Mecánico e inventor",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711386681/segundo%20spring/transformers/characters/cade_yeager_amxlxz.jpg",
        resume: "Cade Yeager es un mecánico e inventor que descubre a Optimus Prime y otros Autobots, uniéndose a su causa para proteger a la humanidad de los Decepticons y otros peligros."
    },
    {
        name: "Bumblebee",
        actor: "Erik Aadahl",
        profession: "Explorador Autobot",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711386675/segundo%20spring/transformers/characters/bumblebee_pgo5fg.jpg",
        resume: "Bumblebee es un Autobot amigable y leal que actúa como explorador y mensajero para Optimus Prime. A menudo se relaciona con los humanos y forma lazos cercanos con ellos, especialmente con Charlie Watson en una de sus encarnaciones."
    },
    {
        name: "Edmund Burton",
        actor: "Anthony Hopkins",
        profession: "Señor de la Sociedad de los Witwiccans",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711386668/segundo%20spring/transformers/characters/anthony_dolpqh.jpg",
        resume: "Edmund Burton es un miembro altamente conocedor e influyente de la Sociedad de los Witwiccans, dedicado a estudiar la historia y los secretos de los Transformers en la Tierra."
    },
    {
        name: "William Lennox",
        actor: "Josh Duhamel",
        profession: "Militar",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711386662/segundo%20spring/transformers/characters/william_lenox_hw3mn4.jpg",
        resume: "William Lennox es un valiente líder militar que ha luchado junto a los Autobots en numerosas batallas, demostrando su lealtad y habilidades en combate."
    },
    {
        name: "Tessa Yeager",
        actor: "Nicola Peltz",
        profession: "Estudiante universitaria",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711386656/segundo%20spring/transformers/characters/tessa_eidsd2.jpg",
        resume: "Tessa Yeager es la hija de Cade Yeager y una estudiante universitaria. Se ve envuelta en la lucha entre Autobots y Decepticons cuando su padre descubre a Optimus Prime y los otros Autobots."
    },
    {
        name: "Anthony Dolph",
        actor: "Jason Drucker",
        profession: "Estudiante",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711386620/segundo%20spring/transformers/characters/ramos_w0pq32.jpg",
        resume: "Anthony Dolph es un estudiante de secundaria y amigo de Charlie, que se involucra en la aventura con Bumblebee y ayuda a Charlie en su búsqueda."
    },
    {
        name: "Shane Dyson",
        actor: "Jack Reynor",
        profession: "Corredor de carreras",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711386650/segundo%20spring/transformers/characters/shane_ttvz5e.jpg",
        resume: "Shane Dyson es el novio de Tessa Yeager y un talentoso corredor de carreras. Se une a la lucha junto a los Autobots para proteger a su familia y al mundo de la amenaza Decepticon."
    },
    {
        name: "Seymour Simmons",
        actor: "John Turturro",
        profession: "Agente del gobierno",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711386644/segundo%20spring/transformers/characters/seymour_jex1gh.jpg",
        resume: "Seymour Simmons es un excéntrico agente del gobierno que ha estado investigando la existencia de los Transformers y su impacto en la historia humana. A menudo actúa como un aliado poco convencional para los Autobots."
    },
    {
        name: "Sentinel Prime",
        actor: "Leonard Nimoy",
        profession: "Líder Autobot",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711386638/segundo%20spring/transformers/characters/sentinel_bvzgpx.jpg",
        resume: "Sentinel Prime es un antiguo líder de los Autobots y mentor de Optimus Prime. Su regreso a la Tierra trae consigo consecuencias inesperadas y desafía la lealtad de Optimus."
    },
    {
        name: "Sam Witwicky",
        actor: "Shia LaBeouf",
        profession: "Estudiante",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711386632/segundo%20spring/transformers/characters/sam_witwiky_mcsppz.jpg",
        resume: "Sam Witwicky es un estudiante de secundaria que se ve envuelto en la guerra entre Autobots y Decepticons después de descubrir la verdad sobre su abuelo y los Transformers. Se convierte en un aliado clave de los Autobots y desempeña un papel crucial en varias batallas."
    },
    {
        name: "Robert Epps",
        actor: "Tyrese Gibson",
        profession: "Sargento",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711386626/segundo%20spring/transformers/characters/robert_t1lqcq.jpg",
        resume: "Robert Epps es un sargento de la Fuerza Aérea de los Estados Unidos que se une a NEST, una unidad especializada en combatir a los Decepticons. Es un valiente y leal aliado de los Autobots en la lucha contra sus enemigos."
    },
    {
        name: "Optimus Prime",
        actor: "Peter Cullen",
        profession: "Líder Autobot",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711386614/segundo%20spring/transformers/characters/optimus_sdwoja.jpg",
        resume: "Optimus Prime es el valiente líder de los Autobots, dedicado a proteger la paz en el universo y a defender a los inocentes de la amenaza de los Decepticons. Es un poderoso guerrero y un símbolo de esperanza para su pueblo."
    },
    {
        name: "Mikaela Banes",
        actor: "Megan Fox",
        profession: "Mecánica",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711386608/segundo%20spring/transformers/characters/mikaela_z1xwrg.jpg",
        resume: "Mikaela Banes es una experta mecánica y estudiante que se une a Sam Witwicky en sus aventuras con los Autobots. Es valiente, inteligente y una valiosa aliada en la lucha contra los Decepticons."
    },
    {
        name: "Memo",
        actor: "Jorge Lendeborg Jr.",
        profession: "Estudiante",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711386602/segundo%20spring/transformers/characters/memo_lu0ypj.jpg",
        resume: "Memo es un amigo cercano de Charlie Watson. Aunque inicialmente se muestra escéptico hacia Bumblebee, finalmente se une a la lucha junto a Charlie y los Autobots contra los Decepticons."
    },
    {
        name: "Megatron",
        actor: "Hugo Weaving",
        profession: "Líder Decepticon",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711386596/segundo%20spring/transformers/characters/megatron_e6dqm8.jpg",
        resume: "Megatron es el temible líder de los Decepticons, cuyo principal objetivo es conquistar y dominar el universo. Es un poderoso y astuto guerrero que no duda en destruir todo a su paso para lograr sus objetivos."
    },
    {
        name: "Vivian Wembley",
        actor: "Laura Haddock",
        profession: "Historiadora",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711386570/segundo%20spring/transformers/characters/laura_haddock_izysx1.jpg",
        resume: "Laura Haddock es una historiadora especializada en arqueología, cuya investigación la lleva a descubrir secretos ocultos relacionados con los Transformers y su historia en la Tierra. Se une a los Autobots en su lucha contra los Decepticons."
    },
    {
        name: "Joshua Joyce",
        actor: "Stanley Tucci",
        profession: "Empresario",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711386564/segundo%20spring/transformers/characters/joshua_ao6p0x.jpg",
        resume: "Joshua Joyce es un exitoso empresario y científico que se involucra en el desarrollo de tecnología avanzada, incluidos los Transformers. Inicialmente aliado con los humanos, sus lealtades se vuelven ambiguas a medida que la historia se desarrolla."
    },
    {
        name: "John Keller",
        actor: "Jon Voight",
        profession: "Agente del gobierno",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711386558/segundo%20spring/transformers/characters/john_keller_zym0cn.jpg",
        resume: "John Keller es un agente gubernamental que trabaja para la seguridad nacional y se involucra en la lucha contra los Decepticons junto a los Autobots."
    },
    {
        name: "Isabella",
        actor: "Isabela Moner",
        profession: "Refugiada",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711386553/segundo%20spring/transformers/characters/isabella_nkklli.jpg",
        resume: "Isabella es una joven refugiada que vive en una zona de guerra donde los Autobots son perseguidos. Se convierte en una aliada clave de los Autobots en su lucha contra los Decepticons."
    },
    {
        name: "Harold Attinger",
        actor: "Kelsey Grammer",
        profession: "Director de la CIA",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711386547/segundo%20spring/transformers/characters/harold_zewn41.jpg",
        resume: "Harold Attinger es el director de la CIA que lidera un equipo especializado en la caza de Autobots y Decepticons. Tiene una agenda secreta y hará todo lo necesario para eliminar a los Transformers de la Tierra."
    },
];

mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allCharacterstransformers = await Charactertransformers.find();
        if (allCharacterstransformers.length > 0) {
            await Charactertransformers.collection.drop();
            console.log('Personajes borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Personajes', err);
    })
    .then(async() => {
        const characterstransformersMap = arrayCharacterstransformers.map(
            (character) => new Charactertransformers(character)
        );
        await Charactertransformers.insertMany(characterstransformersMap);
        console.log('Personajes insertados');
    })
    .catch((err) => {
        console.log('error insertando los Personajes', err);
    })
    .finally(() => mongoose.disconnect());