const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterIndianaJones = require('../../api/models/models.IndianaJones/characters.IndianaJones.model');

const arrayCharactersIndianaJones = [{
        name: "Harry Potter",
        actor: "Daniel Radcliffe",
        house: "Gryffindor",
        type: "Hechicero",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a27ff6b895a65c202859fb7dd178542/asset/a6a4f20562e4190bf7c81e8c92f70fc7/manage?view_mode=mosaic&context=manage",
        resume: "El protagonista principal de la serie, famoso por sobrevivir al ataque de Lord Voldemort cuando era un bebé."
    },
    {
        name: "Hermione Granger",
        actor: "Emma Watson",
        house: "Gryffindor",
        type: "Hechicera",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a27ff6b895a65c202859fb7dd178542/asset/da27e1c8db5ac5499f27914bb6d852bf/manage?view_mode=mosaic&context=manage",
        resume: "Una brillante estudiante de magia, amiga cercana de Harry y Ron, y una de las heroínas principales de la serie."
    },
    {
        name: "Ron Weasley",
        actor: "Rupert Grint",
        house: "Gryffindor",
        type: "Hechicero",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a27ff6b895a65c202859fb7dd178542/asset/101c9dcb4f0faf0c005e91f03b285e41/manage?view_mode=mosaic&context=manage",
        resume: "Mejor amigo de Harry, miembro de la familia Weasley, conocido por su lealtad y sentido del humor."
    },
    {
        name: "Albus Dumbledore",
        actor: "Richard Harris",
        house: "Gryffindor",
        type: "Hechicero",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a27ff6b895a65c202859fb7dd178542/asset/5b34ab42caf35beb15d37908c972023f/manage?view_mode=mosaic&context=manage",
        resume: "Director de Hogwarts, considerado uno de los magos más poderosos y sabios de su tiempo."
    },
    {
        name: "Rubeus Hagrid",
        actor: "Robbie Coltrane",
        house: "Ninguna",
        type: "Hechicero",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a27ff6b895a65c202859fb7dd178542/asset/d050d5058c3661d34eb9c439d6fbe1a8/manage?view_mode=mosaic&context=manage",
        resume: "Guardián de las llaves y terrenos de Hogwarts, amigo cercano de Harry y sus amigos, y amante de las criaturas mágicas."
    }, ,
    {
        name: "Sirius Black",
        actor: "Gary Oldman",
        house: "Gryffindor",
        type: "Hechicero",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a27ff6b895a65c202859fb7dd178542/asset/ad10ee30ae393a5370f157df7f06d26b/manage?view_mode=mosaic&context=manage",
        resume: "Un animago y amigo cercano de los padres de Harry, injustamente encarcelado en Azkaban por crímenes que no cometió."
    },
    {
        name: "Severus Snape",
        actor: "Alan Rickman",
        house: "Slytherin",
        type: "Hechicero",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a27ff6b895a65c202859fb7dd178542/asset/41d7fdfc4d0616fdf9ba91b70415d47a/manage?view_mode=mosaic&context=manage",
        resume: "Profesor de Pociones en Hogwarts y miembro de la Orden del Fénix, con una historia compleja y ambigua."
    },
    {
        name: "Remus Lupin",
        actor: "David Thewlis",
        house: "Gryffindor",
        type: "Hechicero",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a27ff6b895a65c202859fb7dd178542/asset/8d96d01b615c299e86e48eedbf8866d7/manage?view_mode=mosaic&context=manage",
        resume: "Un hombre lobo y amigo cercano de los padres de Harry, que enseña Defensa Contra las Artes Oscuras en Hogwarts."
    },
    {
        name: "Peter Pettigrew",
        actor: "Timothy Spall",
        house: "Gryffindor",
        type: "Hechicero",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a27ff6b895a65c202859fb7dd178542/asset/4a340c1507aa00c0a1a84d1a16859826/manage?view_mode=mosaic&context=manage",
        resume: "Antiguo amigo de James Potter y traidor que se convierte en seguidor de Lord Voldemort, también conocido como Colagusano."
    },
    {
        name: "Neville Longbottom",
        actor: "Matthew Lewis",
        house: "Gryffindor",
        type: "Hechicero",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a27ff6b895a65c202859fb7dd178542/asset/c3fc309789a0b14e685e711c7924f60d/manage?view_mode=mosaic&context=manage",
        resume: "Un estudiante torpe al principio, que demuestra coraje y valentía a lo largo de la serie, convirtiéndose en un miembro importante de la Orden del Fénix."
    },
    {
        name: "Nymphadora Tonks",
        actor: "Natalia Tena",
        house: "Hufflepuff",
        type: "Hechicera",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a27ff6b895a65c202859fb7dd178542/asset/06e6222e9ee1ee926a9ad8479000865d/manage?view_mode=mosaic&context=manage",
        resume: "Auror y miembro de la Orden del Fénix, conocida por su habilidad metamorfomaga y su personalidad excéntrica."
    },
    {
        name: "Minerva McGonagall",
        actor: "Maggie Smith",
        house: "Gryffindor",
        type: "Hechicera",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a27ff6b895a65c202859fb7dd178542/asset/83cb8ddd9a4e2ecbb244144310a0623f/manage?view_mode=mosaic&context=manage",
        resume: "Subdirectora y luego directora de Hogwarts, profesora de Transformaciones y miembro destacado de la Orden del Fénix."
    },
    {
        name: "Lord Voldemort",
        actor: "Ralph Fiennes",
        house: "Slytherin",
        type: "Hechicero",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a27ff6b895a65c202859fb7dd178542/asset/1487dafe65a7ad86bc2ae29e6d177258/manage?view_mode=mosaic&context=manage",
        resume: "El mago tenebroso más poderoso de todos los tiempos, obsesionado con la sangre pura y la inmortalidad."
    },
    {
        name: "Lucius Malfoy",
        actor: "Jason Isaacs",
        house: "Slytherin",
        type: "Hechicero",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a27ff6b895a65c202859fb7dd178542/asset/4a9c6793864637d21ab597d6a835970c/manage?view_mode=mosaic&context=manage",
        resume: "Padre de Draco Malfoy, seguidor leal de Lord Voldemort y miembro prominente de la familia Malfoy."
    },
    {
        name: "Draco Malfoy",
        actor: "Tom Felton",
        house: "Slytherin",
        type: "Hechicero",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a27ff6b895a65c202859fb7dd178542/asset/84276d553d6e6117e276566b3870aae4/manage?view_mode=mosaic&context=manage",
        resume: "Estudiante de Slytherin en Hogwarts, conocido por su arrogancia y sus intentos de ganarse el favor de Lord Voldemort."
    },
    {
        name: "Ginny Weasley",
        actor: "Bonnie Wright",
        house: "Gryffindor",
        type: "Hechicera",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a27ff6b895a65c202859fb7dd178542/asset/803280e378f70d9e0067b787d86445b9/manage?view_mode=mosaic&context=manage",
        resume: "Hermana menor de Ron, destacada jugadora de Quidditch y miembro de la Armada de Dumbledore."
    },
    {
        name: "Dobby",
        actor: "Toby Jones (voz)",
        house: "Ninguna",
        type: "Hechicero",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a27ff6b895a65c202859fb7dd178542/asset/768c610292ccca24e58c7c631b466b6c/manage/analysis?view_mode=mosaic&context=manage",
        resume: "Un elfo doméstico que inicialmente sirve a la familia Malfoy, pero más tarde se convierte en un aliado leal de Harry Potter."
    },
    {
        name: "Bellatrix Lestrange",
        actor: "Helena Bonham Carter",
        house: "Slytherin",
        type: "Hechicero",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a27ff6b895a65c202859fb7dd178542/asset/0de3a76743f370ee219d79fe04b891f7/manage?view_mode=mosaic&context=manage",
        resume: "Una bruja extremadamente peligrosa y fanática de Lord Voldemort, conocida por su crueldad y devoción."
    },
    {
        name: "Dolores Umbridge",
        actor: "Imelda Staunton",
        house: "Slytherin",
        type: "Hechicero",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a27ff6b895a65c202859fb7dd178542/asset/168bfa88956d6653d0645e210ff4c25a/manage?view_mode=mosaic&context=manage",
        resume: "Una funcionaria del Ministerio de Magia con una agenda autoritaria, conocida por su comportamiento opresivo hacia los estudiantes de Hogwarts."
    },
    {
        name: "Alastor Moody",
        actor: "Brendan Gleeson",
        house: "Ninguna",
        type: "Hechicero",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a27ff6b895a65c202859fb7dd178542/asset/e091880ed09850e195691795f128114f/manage?view_mode=mosaic&context=manage",
        resume: "Un famoso auror y profesor de Defensa Contra las Artes Oscuras en Hogwarts, conocido por su enfoque vigilante y sus métodos extremos."
    },
    {
        name: "Luna Lovegood",
        actor: "Evanna Lynch",
        house: "Ravenclaw",
        type: "Hechicera",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a27ff6b895a65c202859fb7dd178542/asset/5ddbe20554646b2cc8989ed6fee158ae/manage?view_mode=mosaic&context=manage",
        resume: "Una estudiante de Hogwarts inusual y excéntrica, conocida por su creencia en criaturas mágicas y su perspectiva única del mundo."
    }
];

mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allCharactersIndianaJones = await CharacterIndianaJones.find();
        if (allCharactersIndianaJones.length > 0) {
            await CharacterIndianaJones.collection.drop();
            console.log('Personajes borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Personajes', err);
    })
    .then(async() => {
        const charactersIndianaJonesMap = arrayCharactersIndianaJones.map(
            (character) => new CharacterIndianaJones(character)
        );
        await CharacterIndianaJones.insertMany(charactersIndianaJonesMap);
        console.log('Personajes insertados');
    })
    .catch((err) => {
        console.log('error insertando los Personajes', err);
    })
    .finally(() => mongoose.disconnect());