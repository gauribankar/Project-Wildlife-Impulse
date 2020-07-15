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

    var correctAnswers = [3,2,1,2,0,2,3,0,2,3];

    var quizQuestions  = [
        {
            type: "text",
            text: "What is lifespan of White Shark?",
            possibilities: [
                {
                    answer: "20 years"
                },
                {
                    answer: "50 years"
                },
                {
                    answer: "80 years"
                },
                {
                    answer: "70 years"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of this is omnivore marine animal?",
            possibilities: [
                {
                    answer: "Angel Shark"
                },
                {
                    answer: "Blue Marlin"
                },
                {
                    answer: "Porcupine Fish"
                },
                {
                    answer: "Clown Anemonefish"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these is the Blue Marlin?",
            possibilities: [
                {
                    answer: "images/spotfin_lionfish.png"
                },
                {
                    answer: "images/blue_marlin.png"
                },
                {
                    answer: "images/sawshark.png"
                },
                {
                    answer: "images/mightyfin_whale.png"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Where does the Sawshark live?",
            possibilities: [
                {
                    answer: "Worldwide oceans"
                },
                {
                    answer: "Indian & Atlantic Ocean"
                },
                {
                    answer: "Indian & Pacific Ocean"
                },
                {
                    answer: "South America"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the second largest animal on Earth?",
            possibilities: [
                {
                    answer: "Mighty Fin Whale"
                },
                {
                    answer: "Great Blue Whale"
                },
                {
                    answer: "Humpback Whale"
                },
                {
                    answer: "White Shark"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of these is fish is used in Chinese medicine?",
            possibilities: [
                {
                    answer: "Blue Marlin"
                },
                {
                    answer: "Electric Eel"
                },
                {
                    answer: "Porcupine Fish"
                },
                {
                    answer: "Spotfin Lionfish"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of these shark is found to be located at Continental Shelves?",
            possibilities: [
                {
                    answer: "Angel Shark"
                },
                {
                    answer: "White Shark"
                },
                {
                    answer: "Sawshark"
                },
                {
                    answer: "Hammerhead Shark"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of these marine life is found at Atlantic ocean?",
            possibilities: [
                {
                    answer: "Angel Shark"
                },
                {
                    answer: "Porcupine Fish"
                },
                {
                    answer: "Sawshark"
                },
                {
                    answer: "Spotfin Lionfish"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How heavy can a Humpback Whale be?",
            possibilities: [
                {
                    answer: "1,16000 & above pounds"
                },
                {
                    answer: "39,6832 pounds"
                },
                {
                    answer: "80,000 pounds"
                },
                {
                    answer: "1,146 & above pounds"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of these marine life is omnivore ?",
            possibilities: [
                {
                    answer: "Sawshark"
                },
                {
                    answer: "Angel Shark"
                },
                {
                    answer: "Blue Marlin"
                },
                {
                    answer: "Humpback Whale"
                }
            ],
            selected: null,
            correct: null
        }
    ];

    var turtlesData = [
       {
            type: "Angel Shark",
            image_url: "images/angel_shark.png",
            locations: "Atlantic Ocean",
            size: "5 feet, 77 pounds",            
            lifespan: "25 to 35 years",
            diet:"Carnivore",
            description: "Angel shark has a flat body. Due to wing-like fins, it looks like a species of rays. Body of angel shark is covered with black, brown, reddish, grey or greenish sandpaper-like skin.  Angel Sharks mainly live on sandy and muddy bottoms. They are most active at night. Angel shark is an ambush predator that lays motionless hidden in the sand and waits for the prey to appear. When the prey approaches close enough, angel shark grabs it in a tenth of a second. Angel Sharks need to swim to breathe. They have been declared as one of the  most threatened species of all sharks. The main threat to the common angel shark is commercial fishing."
        },

       {
            type: "Blue Marlin",
            image_url: "images/blue_marlin.png",
            locations: "Tropical ocean,Atlantic",
            size: "14 feet, 1,985 pounds",
            lifespan: "27 years",
            diet: "Carnivore",
            description: "Blue marlins are among the largest, fastest, and most recognizable fish in the world. Their cobalt blue and silvery white bodies and spear-shaped upper jaws make this big fish stand out in a big ocean.Blue marlin uses its spear-shaped jaw to catch food. It feeds on crustaceans, fish (mackerel, tuna), dolphins and squids.Blue marlins are solitary creatures. Sometimes they swim in pairs. Rarely, they will gather in larger groups (schools).Because of their large size and sharp spear-shaped jaw, blue marlins have only couple of predators: white sharks, mako sharks and humans.Blue marlins are migratory species. They will move from one location to another to escape low water temperatures (they prefer life in warm waters)."
        },

        {
            type: "Clown Anemonefish",
            image_url: "images/clownfish.png",
            locations: "Indian & Atlantic Ocean",
            size: "0.35 feet,0.44 pounds",
            lifespan: "6 - 10 years",
            diet: "Carnivore",
            description: "Clownfish get their name from the bold color strokes on their body, like a clown's face paint.Bright orange with three distinctive white bars, clown anemonefish are among the most recognizable of all reef-dwellers.Clownfish perform an elaborate dance with an anemone before taking up residence, gently touching its tentacles with different parts of their bodies until they are acclimated with the host. A layer of mucus on the clownfish's skin makes it immune to the fish-eating anemone's lethal sting. In exchange for safety from predators and food scraps, the clownfish drives off intruders and preens its host, removing parasites."
        },
       
       {
            type: "Electric Eel",
            image_url: "images/electric_eel.png",
            locations: "South America",
            size: " 6 - 8 feet, 44 pounds",
            lifespan: "15 years",
            diet: "Carnivore",
            description: "These famous freshwater predators get their name from the enormous electrical charge they can generate to stun prey and dissuade predators. Their bodies contain electric organs with about 6,000 specialized cells called electrocytes that store power like tiny batteries. When threatened or attacking prey, these cells will discharge simultaneously. They have long, cylindrical bodies and flattened heads and are generally dark green or grayish on top with yellowish coloring underneath.Human deaths from electric eels are extremely rare. However, multiple shocks can cause respiratory or heart failure, and people have been known to drown in shallow water after a stunning jolt."
       },
  
       {
            type: "Great Blue Whale",
            image_url: "images/blue_whale.png",
            locations:"Worldwide oceans",
            size: "98 feet, 39,6832 pounds",
            lifespan:"80- 90 years",
            diet: "Carnivore",
            description: "The Blue Whale is the largest animal ever to have lived on earth.Despite being so massive, this giant of the ocean feeds on some of the smallest marine life – tiny shrimp like animals called krill.These marine marvels are a species of ‘baleen’ whale. Instead of teeth, they have baleen, a fibrous material used to filter their food. When eating, the whale lets a huge volume of water and krill into its mouth. A single adult blue whale can consume 36,000 kg of krill a day.Blue whales have been found in every ocean of the world. Blue whales swim individually or in small groups. Pairs are very commonly seen.  To communicate with each other, blue whales make a series of super-loud vocal sounds. Their calls are the loudest of any creature on the planet, in fact, and can be heard underwater for hundreds of kilometres."
        },
  
        {
            type: "Hammerhead Shark",
            image_url: "images/hammerhead.png",
            locations: "Continental Shelves",
            size: "14 feet,185.18 pounds",
            lifespan: "35 years",
            diet:"Carnivore",
            description: "They are named for the unusual and distinctive structure of their heads, which are flattened and laterally extended into a hammer shape. The eyes of this shark are placed on the outer edges of the hammer. This allows them a vertical 360 degree view, which means the Hammer head shark is able to see both above and below quite easily. Hammerheads are usually brownish-gray or olive green in color and have a whitish belly. Hammerhead sharks are believed to be cannibalistic, eating their own species if need be. Just like other sharks, hammerhead sharks have special organ which detects electrical signals emitted by living creatures in the water. That way, hammerhead can find a prey even in the murky water."
        },

        {
            type: "Humpback Whale",
            image_url: "images/humpback_whale.png",
            size:"48 - 62.5 feet, 80,000 pounds",
            locations:"Worldwide oceans",
            lifespan:"45 - 50 years",
            diet: "Omnivore",
            description: "Humpback whales are found in every ocean in the world.They have dark backs, light bellies, pleats on their throats, and a small hump in front of their dorsal fin, leading to the common name of humpback. Humpback whales are known for their magical songs, which travel for great distances through the world's oceans. These sequences of moans, howls, cries, and other noises are quite complex and often continue for hours on end.Humpbacks are powerful swimmers, and they use their massive tail fin, called a fluke.They love to jump out of the water called breaching and perform acrobatic twirls. They also enjoy poking just their heads out of the water, or slapping their tail around."
        },

        {
            type: "Mighty Fin Whale",
            image_url: "images/mightyfin_whale.png",
            locations:"Worldwide oceans",
            size: "65 feet,1,16000 above pounds",
            lifespan: "94 years",
            diet: "Carnivore",
            description: "The fin whale is a huge baleen whale. It is the second largest animal on Earth (the blue whale is the biggest). This whale is sometimes called the greyhound of the sea because of its fast swimming speed; it can swim up to 23 mph (37 km/hr) in short bursts. The fin whale is also called the finback, finner, razorback, common rorqual, and herring whale.Fin whales are one of the most sociable of whale species, often congregating in family groups of 6 to 10 members. It is found in the Pacific, Indian, Atlantic and Arctic Oceans.Fin whales can survive more than 80 years in the wild. "
        },

       {
            type: "Porcupine Fish",
            image_url: "images/porcupine.png",
            locations: "Tropical Seas",
            size: "1.31 feet, 6 pounds",      
            lifespan: "12 - 15 years",
            diet:"Omnivore",	    
            description: "The members of the porcupinefish family have evolved an interesting means of defense. When threatened by a predator, they fill their bodies with water until they swell like a balloon. This makes them too large for the predator to swallow. The spines of the porcupinefish only stick out when the fish is inflated. They are generally slow-moving. It is used in Chinese medicine,and is captured at the surface with a hand net. It is poisonous if not prepared correctly."
        },

        {
            type: "Sawshark",
            image_url: "images/sawshark.png",
            locations: "Indian & Pacific Ocean",
            size: "1.1 - 3 feet,18.7 pounds",
            lifespan: "15 years",
            diet:"Carnivore",
            description: "Saw shark has yellowish-brown skin, covered with dark blotches and spots. Skin coloration provides camouflage. Sawsharks are named for their long snouts, which have sharp teeth protruding from either side. They attack their prey by slashing these “saws” from side to side, cutting into the fish they intend to eat. Be careful not to confuse sawsharks with sawfish, which are actually a type of ray. There are eight different types of a sawsharks. Saw shark can live as a solitary creature, or be a part of a group called school."
        },
       
        {
            type: "Spotfin Lionfish",
            image_url: "images/spotfin_lionfish.png",
            locations: "Lagoons and Reefs",
            size: "0.41 feet, 1 - 2 pounds",        
            lifespan: "15 years",
            diet:"Carnivore",  	    
            description: "Lionfishes are among the most beautiful fish species on the coral reef. But as is often the case in nature, this beauty is actually a warning of danger. The sharp spines of the lionfish are coated with a venomous mucous and are capable of delivering a painful sting. The venom of some of the larger species is strong enough to kill a human. By day, it takes shelter in rocky or coral crevasses, where it rests against the vertical wall or upside down, with its head toward the floor. At night, it hunts shrimp and crabs. They can cause damage, direct or indirect, to coral reefs, due to their growth, and voracious feeding capacity."
        },

        {
            type: "White Shark",
            image_url: "images/white_shark.png",
            locations: "All Major Oceans",
            size: "11 - 20 feet, 1,146 - 2,425 pounds",
            lifespan: "70 Years",
            diet:"Carnivore",
            description: "The great white shark is notable for its size. Great white sharks can swim at speeds of over 56 km/h (35 mph). The great white shark has no known natural predators other than, on very rare occasions, the killer whale. When the shark bites, it shakes its head side-to-side, helping the teeth saw off large chunks of flesh. They can detect the electromagnetic field emitted by the movement of living animals. Great White Sharks don't have eyelids, but they can roll their eyeballs during attack to prevent eye injury. Great Whites don't produce sounds. They communicate using body language and scents. Great White Sharks may attack people, but they will not eat them"
        }
    ];

})();
