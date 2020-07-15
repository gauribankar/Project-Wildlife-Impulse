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

   var correctAnswers = [3, 0, 1, 3, 0, 2, 3, 1, 0, 1];

    var quizQuestions  = [
        {
            type: "text",
            text: "How long can a Desert Tortoise survive without water?",
            possibilities: [
                {
                    answer: "1 week"
                },
                {
                    answer: "1 month"
                },
                {
                    answer: "6 months"
                },
                {
                    answer: "1 year"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Whose eyes can move in two different directions?",
            possibilities: [
                {
                    answer: "Chameleon"
                },
                {
                    answer: "Alligator"
                },
                {
                    answer: "Komodo Dragon"
                },
                {
                    answer: "Regal Horned Lizard"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these is the Green Sea Turtle?",
            possibilities: [
                {
                    answer: "images/loggerhead_turtle.png"
                },
                {
                    answer: "images/green_turtle.png"
                },
                {
                    answer: "images/tortoise.png"
                },
                {
                    answer: "images/leatherback_turtle.png"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Where are King Cobras mostly found?",
            possibilities: [
                {
                    answer: "Australia"
                },
                {
                    answer: "Amazon Rainforest"
                },
                {
                    answer: "Africa"
                },
                {
                    answer: "Asia"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Whose shell is somewhat flexible and almost rubbery?'",
            possibilities: [
                {
                    answer: "Leatherback Sea Turtle"
                },
                {
                    answer: "Desert Tortoise"
                },
                {
                    answer: "Green Sea Turtle"
                },
                {
                    answer: "Loggerhead Sea Turtle"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How many Rattlesnake species are there?",
            possibilities: [
                {
                    answer: "7"
                },
                {
                    answer: "10"
                },
                {
                    answer: "24"
                },
                {
                    answer: "37"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who got it's name because of it's oversized head?",
            possibilities: [
                {
                    answer: "Regal Horned Lizard"
                },
                {
                    answer: "Leatherback Sea Turtle"
                },
                {
                    answer: "Komodo Dragon"
                },
                {
                    answer: "Loggerhead Sea Turtle"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is a unique feature of a Regal Horned Lizard?",
            possibilities: [
                {
                    answer: "It's eyes move in different directions"
                },
                {
                    answer: "It sprays blood from it's eye"
                },
                {
                    answer: "It's neck can rotate upto 270 degrees"
                },
                {
                    answer: "It can detect prey hiding underground"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who is clumsy on land, but great in water?",
            possibilities: [
                {
                    answer: "Alligator"
                },
                {
                    answer: "Komodo Dragon"
                },
                {
                    answer: "Chameleon"
                },
                {
                    answer: "Leatherback Sea Turtle"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Whose saliva contains poison?",
            possibilities: [
                {
                    answer: "Alligator"
                },
                {
                    answer: "Komodo Dragon"
                },
                {
                    answer: "Regal Horned Lizard"
                },
                {
                    answer: "Chameleon"
                }
            ],
            selected: null,
            correct: null
        }
    ];

    var turtlesData = [
	{
            type: "Alligator",
          /*image_url: "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1579707709/shape/mentalfloss/56093-gettyimages-1171368832.jpg?itok=3fL4_GQG",*/
	    image_url: "images/alligator.png",
            diet: "Carnivore",
            lifespan: "35 to 50 years",
            size: "10 to 15 feet",
            weight: "1,000 pounds",
            description: "Brought back from the brink of extinction, over a million of these reptiles survive today. Now the main threat to alligators is habitat destruction, caused by such human activities as draining and developing wetlands. These reptiles are kind of clumsy on land, but they're built for life in the water. Great swimmers, they are equipped with webbed feet and strong tails that propel them through the water. Newly hatched young are only about six to eight inches (15 to 20 centimeters) long, and very vulnerable. Their mother protects them from predators, which include raccoons, bobcats, birds, and even other alligators. The young alligators stay with their mother for up to two years. After that, they're able to fend for themselves."
        },
	{
            type: "Chameleon",
           /* image_url: "https://www.thoughtco.com/thmb/9F3MZmN45uusmo9Su2UHcaaSZos=/1885x1414/smart/filters:no_upscale()/GettyImages-699100285-5c8c29e646e0fb0001770056.jpg",*/
	    image_url: "images/chameleon.png",
            diet: "Carnivore",
            lifespan: "12 years",
            size: "21 inches",
            weight: "14.4 ounces",
            description: "The color of a chameleon’s skin helps them blend in with their habitats. Chameleons that hang out in trees are usually green. Those that live in deserts are most often brown. They often change color to warm up or cool down. They also switch shades to communicate with other chameleons. Over 150 species of chameleons exist, ranging from the size of your thumbnail to that of a house cat.  Their eyes can move in two different directions at once, giving them a panoramic view of their surroundings. The outer layer of their skin is see-through. Beneath that are layers of special cells filled with pigment—the substance that gives plants and animals (including you) color. To display a new color, the brain sends a message for these cells to get bigger or smaller. As this happens, pigments from different cells are released, and they mix with each other to create new skin tones."
        },	
	 {
            type: "Desert Tortoise",
            /*image_url: "https://defenders.org/sites/default/files/styles/meta_image/public/2019-04/desert_tortoise_dan_fillipi_header.jpg?itok=gUiY2w3K",*/
	    image_url: "images/tortoise.png",
            diet: "Herbivore",
            lifespan: "50 to 80 years",
            size: "35.5 cm",
            weight: "5 Kg",
            description: "Desert tortoises live in the deserts of the southwestern United States. During the summer, ground temperatures in parts of their range can hit 60˚C. To beat the heat, desert tortoises use their strong forearms and tough nails to dig underground burrows where they can hide from the sun. Some of these tortoise tunnels are up to 32 feet in length. And the burrows can get pretty crowded. As many as 25 desert tortoises might bunk together in one shelter. Once it’s had a good drink, a desert tortoise can go up to a year without requiring fresh water again. Desert tortoises are pretty solitary. Sometimes when they come across each other, they’ll fight to establish dominance. The dueling duo may use horns on their chests to try and knock each other over. The contest ends when one animal flips the other on its back."
        },        
        {
            type: "Green Sea Turtle",
            /*image_url: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_300/v1538573240/Sea-Turtles-Habitat_kiipu7.jpg",*/
	    image_url: "images/green_turtle.png",
            diet: "Herbivore",
            lifespan: "80 or more years",
            size: "Up to 5 feet",
            weight: "Up to 700 pounds",
            description: "The green sea turtle is a large, weighty sea turtle with a wide, smooth carapace, or shell. It inhabits tropical and subtropical coastal waters around the world and has been observed clambering onto land to sunbathe. It is named not for the color of its shell, which is normally brown or olive depending on its habitat, but for the greenish color of its skin. There are two types of green turtles—scientists are currently debating whether they are subspecies or separate species—including the Atlantic green turtle, normally found off the shores of Europe and North America, and the Eastern Pacific green turtle, which has been found in coastal waters from Alaska to Chile."
        },
        {
            type: "King Cobra",
            /*image_url: "https://1.bp.blogspot.com/-nHYni_qUdyI/VOYRBzQQgVI/AAAAAAAAAq0/5Wpu6_WHXB8/s1600/snake-king-cobra-620x400.jpg",*/
	    image_url: "images/cobra.png",
            diet: "Carnivore",
            lifespan: "20 years",
            size: "13 feet",
            weight: "Up to 20 pounds",
            description: "King cobras are venomous snakes that live in South and Southeast Asia. The reptile makes its home in forests and swamps. It can grow up to 18 feet long. And the animal's toxic bite is powerful enough to kill an elephant. Cobras eat small mammals, lizards, and birds. It sinks its venom-filled fangs into its prey to knock it out, then swallows it in one gulp. When facing predators, king cobras try to act like tough guys. They often expand ribs and muscles on both sides of their necks to create what’s called a hood. The hood makes the snake appear extra-big. These are the only snakes that build nests for their eggs."
        },
	{
            type: "Komodo Dragon",
          /*image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmOCdTZ7jbp_ECSan2eDT4LMqHNZ69JB3gYo9rv9lPVTuufgnd",*/
	    image_url: "images/dragon.png",
            diet: "Carnivore",
            lifespan: "Up to 30 years",
            size: "10 feet",
            weight: "330 pounds",
            description: "They are powerful-looking reptiles with wide, flat heads, bowed legs, and huge, muscular tails. They have a clumsy, back-and-forth walk, and their yellow tongues flick in and out constantly. The dominant predators on the islands where they live, Komodo dragons will eat almost everything. When hunting, Komodo dragons rely on camouflage and patience, lying in bushes or tall grasses until a victim passes by. They pounce on their prey with powerful legs and sharp claws, then sink their jagged, sharklike teeth in. An animal that escapes the jaws of a Komodo won't feel lucky for long. Dragon saliva contains large amounts of bacteria, which poisons their victims, usually within 24 hours. Dragons will calmly follow their bitten prey for miles, using their keen sense of smell to find the corpse. They have been known to eat up to 80 percent of their body weight in a single feeding."
        },
        {
            type: "Leatherback Sea Turtle",
            /*image_url: "https://wxv73zw8wg-flywheel.netdna-ssl.com/wp-content/uploads/2019/02/Leatherback-Turtle-%C2%A9-Jason-Isley-scubazoo-1-1024x684.jpg",*/
	    image_url: "images/leatherback_turtle.png",
            diet: "Carnivore",
            lifespan: "45 years",
            size: "Up to 7 feet",
            weight: "Up to 2,000 pounds",
            description: "Leatherbacks are the largest turtles on Earth, growing up to seven feet (two meters) long and exceeding 2,000 pounds (900 kilograms). These reptilian relics are the only remaining representatives of a family of turtles that traces its evolutionary roots back more than 100 million years. Once prevalent in every ocean except the Arctic and Antarctic, the leatherback population is rapidly declining in many parts of the world. While all other sea turtles have hard, bony shells, the inky-blue carapace of the leatherback is somewhat flexible and almost rubbery to the touch. Ridges along the carapace help give it a more hydrodynamic structure. Leatherbacks can dive to depths of 4,200 feet (1,280 meters)—deeper than any other turtle—and can stay down for up to 85 minutes."
        },
	{
            type: "Loggerhead Sea Turtle",
           /* image_url: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_300/v1538573757/loggerheadTurtle_2651448b_fuxtrz.jpg",*/
	    image_url: "images/loggerhead_turtle.png",
            diet: "Carnivore",
            lifespan: "50 or more years",
            size: "36 inches",
            weight: "253 pounds",
            description: "These beautifully colored sea turtles got their name because their oversized head sort of looks like a big log. Loggerhead turtles are the most abundant of all the marine turtle species in U.S. waters. But persistent population declines due to pollution, shrimp trawling, and development in their nesting areas, among other factors, have kept this wide-ranging seagoer on the threatened species list since 1978. Their enormous range encompasses all but the most frigid waters of the world's oceans. They seem to prefer coastal habitats, but often frequent inland water bodies and will travel hundreds of miles out to sea."
        },
        {
            type: "Rattlesnake",
            /*image_url: "https://www.ucrhealth.org/UCR_New/media/Emerge_UCR_New/Blogs/rattlesnake-safety-avoid-snake-bite-290x193px.jpg",*/
	    image_url: "images/rattlesnake.png",
            diet: "Carnivore",
            lifespan: "10 to 20 years",
            size: "5.5 feet",
            weight: "5 pounds",
            description: "Rattlesnakes live in many places and habitats in the Western Hemisphere, from mountains to deserts and plains. There are more than 24 rattlesnake species and all of them have that most-famous feature: the rattle! The rattle is found at the tip of the rattlesnake’s tail. The snake uses the rattle to warn potential aggressors to back off or to distract prey. The famous rattle noise comes from the sound created when hollow and bony segments in the rattle bang together. Like other snakes, rattlesnakes don’t have ears and can’t hear most sounds. They detect movement by sensing vibrations in the ground. Their eyes see well even in low light. The rattlesnake’s triangular head contains a hollow spot between the eyes and nostrils called a pit. This pit is actually a sensory organ that helps the rattlesnake hunt in darkness by detecting body heat."
        },        
        {
            type: "Regal Horned Lizard",
          /*image_url: "https://i.pinimg.com/originals/96/ea/c2/96eac2f7d5656d9f7d0d9f84ddd430fe.jpg",*/
	    image_url: "images/horned_lizard.png",
            diet: "Insectivore",
            lifespan: "5 to 8 years",
            size: "3 to 4 inches",
            weight: "4.5 to 5.6 grams",
            description: "Regal horned lizards already have supersharp survival instincts when they hatch in late summer. Their sticky tongues are ready to snap out like rubber bands and catch spiders, sow bugs, and ants. And if predators such rattlesnakes and road runners put regal horned lizards on the menu, they’re in for a challenge. The reptiles rock at hide-and-seek. They can change colors to blend in with almost anything in their desert homes. If that doesn’t work, the lizards suck in air to inflate like a balloon. Then they seem too big to gobble up!As a last resort, the reptiles are able to burst the blood vessels near their eyeballs to trigger a surprise spray. They aim the blood toward the predator’s mouth—it’s the bad taste that sends enemies running."
        } 
    ];

})();
