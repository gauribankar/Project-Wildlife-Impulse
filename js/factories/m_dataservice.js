/*
 * IIFE to keep code safe and outside the global namespace
 */
(function(){

    /*
     * Declaring a factory service as part of the existing turtleFacts Module.
     */
    angular
        .module("turtleFacts")
        .factory("DataService", DataService);

    /*
     * Actual definition of the function used for this factory
     */
    function DataService(){
        /*
         * dataObj is used to simulate getting the data from a backend server
         * The object will hold data which will then be returned to the other
         * factory declared in js/factory/quiz.js which has this factory
         * as a dependency
         */

        var dataObj = {
            turtlesData: turtlesData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

        // returning the dataObj to anything that uses this factory as a
        // dependency
        return dataObj;
    }

    /*
     * all of the below variables are simulating data that would typically be
     * retrieved using an HTTP call to an API endpoint.
     *
     * For simplicity sake this data is hardcoded into the app as this tutorial
     * is about building the angular app, not the backend.
     *
     * The correctAnswers variable would be retrieved when the user has
     * finished the quiz and would be used to mark the users answers against
     * the correct answers
     *
     * the quizQuestions is an array of objects, each containing data
     * pertaining to a single question. This includes:
     *                          - The type of question: image or text
     *                          - Text of the question (aka the actual question)
     *                          - A set of 4 possible answers, either text or
     *                              images as indicated above
     *                          - a selected flag which will be used to know if
     *                              the user has selected
     *                          an answer yet.
     *                          - Whether the user got the question correct or
     *                              not
     *
     * The final turtleData variable hold the information that will be
     * displayed in the list view when the app loads. This includes the name
     * and an image of each turtle as well as other information such as the
     * location and the size of the turtles
     *
     */

    var correctAnswers = [3,0,2,3,2,0,2,1,2,3];

    var quizQuestions  = [
        {
            type: "text",
            text: "Which of these animal is found in Eurasia?",
            possibilities: [
                {
                    answer: "Koala"
                },
                {
                    answer: "Mountain Gorilla"
                },
                {
                    answer: "Giraffe"
                },
                {
                    answer: "Gray Wolf"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the typical lifespan of a Mountain Lion?",
            possibilities: [
                {
                    answer: "8 - 13 years"
                },
                {
                    answer: "10 - 14 years"
                },
                {
                    answer: "8 - 12 years"
                },
                {
                    answer: "10 - 15 years"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of these is animal is omnivore?",
            possibilities: [
                {
                    answer: "Mountain Lion"
                },
                {
                    answer: "Kangaroos"
                },
                {
                    answer: "Giant Panda"
                },
                {
                    answer: "Koala"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How heavy can be an African Elephant?",
            possibilities: [
                {
                    answer: "2,800 pounds & above"
                },
                {
                    answer: "3000 pounds"
                },
                {
                    answer: "900 - 1,600 pounds"
                },
                {
                    answer: "5000 pounds & above"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Where does the Amur Leopard live?'",
            possibilities: [
                {
                    answer: "Central China"
                },
                {
                    answer: "Eastern Australia"
                },
                {
                    answer: "Russia"
                },
                {
                    answer: "Canada"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who has its own unique pattern of distinctive stripes, just as humans have their own unique pattern of fingerprints?",
            possibilities: [
                {
                    answer: "Zebra"
                },
                {
                    answer: "Tiger"
                },
                {
                    answer: "Giraffe"
                },
                {
                    answer: "Amur Leopard"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who is social creature?",
            possibilities: [
                {
                    answer: "Giant Panda"
                },
                {
                    answer: "Koala"
                },
                {
                    answer: "African Elephant"
                },
                {
                    answer: "Mountain Gorilla"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of these is known as cougar, catamount, panther, red tiger, deer tiger, and puma?",
            possibilities: [
                {
                    answer: "Amur Leopard"
                },
                {
                    answer: "Mountain Lion"
                },
                {
                    answer: "Tiger"
                },
                {
                    answer: "Gray Wolf"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of these mammal can eat one kilogram of eucalyptus leaves in a day?",
            possibilities: [
                {
                    answer: "Mountain Gorilla"
                },
                {
                    answer: "Giant Panda"
                },
                {
                    answer: "Koala"
                },
                {
                    answer: "African Elephant"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of these mammal has black skin under their fur ?",
            possibilities: [
                {
                    answer: "Amur Leopard"
                },
                {
                    answer: "Tiger"
                },
                {
                    answer: "Zebra"
                },
                {
                    answer: "Polar Bear"
                }
            ],
            selected: null,
            correct: null
        }
    ];

    var turtlesData = [
         {
            type: "African Elephant",
            image_url: "images/african_elephant.png",
            locations: "Africa",
            size: "8.2-13 ft,5000 pounds & above",
            lifespan: "Up to 70 years",
            diet: "Herbivore",
            description: "An adult African elephant's trunk is about seven feet (two meters) long! It's actually an elongated nose and upper lip. Like most noses, trunks are for smelling.Elephants are social creatures. They sometimes hug by wrapping their trunks together in displays of greeting and affection. Elephants also use their trunks to help lift or nudge an elephant calf over an obstacle, to rescue a fellow elephant stuck in mud, or to gently raise a newborn elephant to its feet.One elephant can eat 300 pounds (136 kilograms) of food in one day. Since African elephants live where the sun is usually blazing hot, they use their trunks to help them keep cool. First they squirt a trunkful of cool water over their bodies. Then they often follow that with a sprinkling of dust to create a protective layer of dirt on their skin."
        },
        {
            type: "Amur Leopard",
            image_url: "images/amur_leopard.png",
            locations:"Russia",
            lifespan:"10 - 15 years",
            size: "6 - 7 ft, 70 - 105 pounds",
            diet: "Carnivore",
            description: "Most people think of leopards prowling the savannas of Africa, but these spotted predators thrive in many different countries and habitats. Amur leopards can be found in the mountainous forests of eastern Russia and northern China. Named after the Amur River, a body of water that runs along the border of both countries, these cats are well adapted to this harsh environment. Their soft, dense fur keeps them warm in the bitter cold, and their large paws work like snowshoes to let them walk on snow without sinking."
        },
    
        {
            type: "Giraffe",
            image_url: "images/giraffe.png",
            locations: "Africa",
            size: "14-19 ft, 1,750-2,800 pounds",
            lifespan: "25 years",
            diet: "Herbivore",
            description: "Giraffes grow about 4 feet (1.2 meters) in their first year of life. A newborn giraffe is about 6 feet (1.9 meters) tall at birth and weighs about 150 pounds (68 kilograms).Many young giraffes, called calves, die from lion attacks during their first year of life. Once a giraffe reaches adulthood its height is often enough to protect it from lions. Adult giraffes, however, must still be careful of lions when they are bending down to drink water or rest. Usually giraffes will drink or rest in shifts so that at least one giraffe is always on the lookout for approaching predators.​"
        },
        {
            type: "Giant Panda",
            image_url: "images/panda.png",
            locations: "Central China",
            size: "4 - 5 ft,300 pounds",
            lifespan: "20 years",
            diet: "Omnivore",
            description: "High in dense bamboo forests in the misty, rainy mountains of southwestern China lives one of the world's rarest mammals: the giant panda, also called the panda. Only about 1,500 of these black-and-white relatives of bears survive in the wild. Pandas eat almost nothing but bamboo shoots and leaves. Occasionally they eat other vegetation, fish, or small animals, but bamboo accounts for 99 percent of their diets. Pandas eat fast, they eat a lot, and they spend about 12 hours a day doing it. The reason: They digest only about a fifth of what they eat. Overall, bamboo is not very nutritious. To stay healthy, they have to eat a lot—up to 15 percent of their body weight in 12 hours—so they eat fast.Pandas are shy; they don't venture into areas where people live. This restricts pandas to very limited areas."
        },
        {
            type: "Gray Wolf",
            image_url: "images/grey_wolf.png",
            locations: "Eurasia & North America.",
            size: "3 - 5.25 ft, 40 - 175 pounds",
            lifespan: "6 - 8 years",
            diet: "Carnivore",
            description: "Wolves live in groups called packs. A pack is a family of seven to eight wolves with a mom, dad, and offspring. The wolves' communication skills are very important to the pack's survival. Wolves communicate with more than howls. They whimper and whine, growl and bark, yelp and snarl. They also use scents produced by their bodies to communicate. A wolf’s sense of smell is 100 times stronger than a human’s.Wolves and dogs are closely related, and the ways they communicate are similar.In some areas, gray wolfs are classified as endangered, but in most places, they are seen to have healthy population numbers."
        },
        {
            type: "Kangaroos",
            image_url: "images/kangaroo.png",
            locations:"Australia",
            lifespan:"Up to 23 years",
            size: "9.18 ft,200 pounds",
            diet: "Herbivore",
            description: "Kangaroos possess powerful hind legs, a long, strong tail, and small front legs.Thanks to their large feet, kangaroos can leap some 30 feet (9 meters) in a single bound, and travel more than 30 ​miles (48 ​kilometers)​ per hour​. Kangaroos live in Eastern Australia. They live in small groups called troops or herds, typically made up of 50 or more animals.Fighting kangaroos kick opponents, and sometimes bite.​Female kangaroos sport a pouch on their belly, made by a fold in the skin, to cradle baby kangaroos called joeys. Newborn joeys are just one inch long (2.5 centimeters) at birth, or about the size of a grape.At 10 months, the joey is mature enough to leave the pouch for good."
        },
        {
            type: "Koala",
            image_url: "images/koala.png",
            locations: "Eastern Australia",
            size: "1.95 - 2.79 ft, 20 pounds",
            lifespan: "20 years",
            diet: "Herbivore",
            description: "Koalas are found in the eucalyptus forests and have grey fur with a cream-coloured chest, and strong, clawed feet, perfect for living in the branches of trees!. Cuddly critters, koalas measure about 60cm to 85cm long, and weigh about 14kg. Koala’s grow up to become big eaters, shifting up to one kilogram of eucalyptus leaves in a day! They are fussy, too, and will select the most nutritious and tastiest leaves from the trees where they live.During the day they doze, tucked into forks or nooks in the trees, sleeping for up to 18 hours.Koalas do not drink much water and they get most of their moisture from these leaves."
        },

        {   
           type: "Mountain Gorilla",
            image_url: "images/gorilla.png",
            locations: "Africa",
            size: "4 - 6 ft,300 - 485 pounds",
            lifespan: "35 years",
            diet: "Omnivore",
            description: "There are about a thousand mountain gorillas remaining on Earth, and about half live in the forests of the Virunga mountains in central Africa.Gorillas can climb trees, but are usually found on the ground in communities of up to 30 individuals. These troops are organized according to fascinating social structures. Troops are led by one dominant, older adult male, often called a silverback because of the swath of silver hair that adorns his otherwise dark fur. Troops also include several other young males, some females, and their offspring.While gorillas are adaptive, moving to higher elevations to adapt to warmer temperatures, those areas are densely populated with little forest remaining.In the thick forests of central and west Africa, troops find plentiful food for their vegetarian diet. They eat roots, shoots, fruit, wild celery, and tree bark and pulp."
        },
        
        {
            type: "Mountain Lion",
            image_url: "images/mountain_lion.png",
            locations: "America",
            size: "3.25 - 5.25 ft,136 pounds",
            lifespan: "8 - 13 years",
            diet: "Carnivore",
            description: "The mountain lion goes by many names, including cougar, catamount, panther, red tiger, deer tiger, and puma. This cat can be found throughout much of South and North America. Unlike other big cats, however, the cougar cannot roar. Instead, the large feline purrs like a house cat.Like most species of the cat family, the mountain lion is mostly solitary. Mothers will live with the kittens until they grow up while other adults will be met with on rare occasions. However, they can share their kills with other adults.Because of their size, strength, and predatory skills, mountain lions are considered one of the “big cats.” Tigers, leopards, cheetahs, and jaguars are also part of this grouping."
        },
        
       {
            type: "Polar Bear",
            image_url: "images/polar_bear.png",
            locations: "Arctic,Canada, Russia",
            size: "7.25 - 8 ft, 900 - 1,600 pounds",
            lifespan: "25 - 30 years",
            diet: "Carnivore",
            description: "Polar bears live along shores and on sea ice in the icy cold Arctic. When sea ice forms over the ocean in cold weather, many polar bears, except pregnant females, head out onto the ice to hunt seals. Polar bears primarily eat seals. Polar bears often rest silently at a seal's breathing hole in the ice, waiting for a seal in the water to surface. A polar bear may also hunt by swimming beneath the ice. But climate change is making it harder for polar bears to hunt. Ice melts earlier and re-forms later than it has in the past. Polar bears live in one of the planet's coldest environments and depend on a thick coat of insulated fur, which covers a warming layer of fat. Fur even grows on the bottom of their paws, which protects against cold surfaces and provides a good grip on ice. The bear's stark white coat provides camouflage in surrounding snow and ice. But under their fur, polar bears have black skin - the better to soak in the sun's warming rays."
        },

        {
            type: "Tiger",
            image_url: "images/tiger.png",
            locations:"Asia",
            lifespan:"8 - 10 years",
            size: " 5 - 6 ft, 240 - 500 pounds",
            diet: "Carnivore",
            description: "Easily recognized by its coat of reddish-orange with dark stripes, the tiger is the largest wild cat in the world. The big cat's tail is three feet long. On average the big cat weighs 450 pounds, about the same as eight ten-year-old kids. It stands three feet tall with teeth four inches long and claws as long as house keys.Tigers live far apart from each other. A tiger knows if it is in another tiger’s territory based on the trees around him. Each tiger marks the trees in its area with urine and special scratches.Unlike most members of the cat family, tigers seem to enjoy water and swim well.Some tigers live where it gets very cold—in India and parts of southeast Asia. The whole species is endangered throughout its range."
        }, 
               
        {
            type: "Zebra",
            image_url: "images/zebra.png",
            locations: "Africa",
            size: "3.5 - 5 ft,440 - 990 pounds",
            lifespan: "25 years",
            diet: "Herbivore",
            description: "Each zebra has its own unique pattern of distinctive stripes, just as humans have their own unique pattern of fingerprints. Zebras stick together in herds. Within a herd, zebras tend to stay together in smaller family groups. Families are generally made up of a male, several females, and their young. As a zebra grazes, it uses its sharper front teeth to bite the grass, and then uses its duller back teeth to crush and grind. A zebra's teeth keep growing for its entire life, because constant grazing and chewing wears them down. Zebras are constantly on the move to find fresh grass and water. Sometimes they gather in huge herds of thousands as they migrate to better feeding grounds. They often travel in mixed herds with other grazers and browsers, such as wildebeest."
        }   
    ];

})();
