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

   var correctAnswers = [2, 0, 3, 1, 3, 0, 2, 1, 3, 0];

    var quizQuestions  = [
        {
            type: "text",
            text: "What is the size of a Peacock's tail?",
            possibilities: [
                {
                    answer: "4 feet"
                },
                {
                    answer: "3 feet"
                },
                {
                    answer: "5 feet"
                },
                {
                    answer: "2 feet"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which female birds are bigger than males?",
            possibilities: [
                {
                    answer: "Bald Eagle"
                },
                {
                    answer: "Flamingo"
                },
                {
                    answer: "Atlantic Puffin"
                },
                {
                    answer: "Ostrich"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How many times does a Atlantic Puffin flap it's wings in 1 minute?",
            possibilities: [
                {
                    answer: "50 times"
                },
                {
                    answer: "150 times"
                },
                {
                    answer: "550 times"
                },
                {
                    answer: "400 times"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of these birds is an excellent swimmer?",
            possibilities: [
                {
                    answer: "Flamingo"
                },
                {
                    answer: "Humboldt Penguin"
                },
                {
                    answer: "Pileated Woodpecker"
                },
                {
                    answer: "Peregrine Falcon"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which bird cannot fly?",
            possibilities: [
                {
                    answer: "Humboldt Penguin"
                },
                {
                    answer: "Atlantic Puffin"
                },
                {
                    answer: "Indian Peacock"
                },
                {
                    answer: "Ostrich"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Identify the Peregrine Falcon:",
            possibilities: [
                {
                    answer: "images/falcon.png"
                },
                {
                    answer: "images/eagle.png"
                },
                {
                    answer: "images/owl.png"
                },
                {
                    answer: "images/puffin.png"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Whose sound carries a long distance?",
            possibilities: [
                {
                    answer: "Bald Eagle"
                },
                {
                    answer: "Ostrich"
                },
                {
                    answer: "Pileated Woodpecker"
                },
                {
                    answer: "Northern Mockingbird"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of these birds 'run' on water?",
            possibilities: [
                {
                    answer: "Humboldt Penguin"
                },
                {
                    answer: "Flamingo"
                },
                {
                    answer: "Peregrine Falcon"
                },
                {
                    answer: "Ostrich"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Snowy Owls are mostly active at what time?",
            possibilities: [
                {
                    answer: "Day"
                },
                {
                    answer: "Night"
                },
                {
                    answer: "Dusk"
                },
                {
                    answer: "Dusk and Dawn"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of these birds can imitate other sounds?",
            possibilities: [
                {
                    answer: "Northern Mockingbird"
                },
                {
                    answer: "Flamingo"
                },
                {
                    answer: "Indian Peacock"
                },
                {
                    answer: "Humboldt Penguin"
                }
            ],
            selected: null,
            correct: null
        }
    ];

    var turtlesData = [
	{
            type: "Atlantic Puffin",
	    image_url: "images/puffin.png",
            diet: "Carnivore",
            lifespan: "20 or more years",
            size: "10 inches",
            weight: "17.5 ounces",
            description: "Atlantic puffins are birds that live at sea most of their lives. As they swim, they use their webbed feet to steer. Puffins eat small fish—such as sand eels and herring—which they hunt underwater. They generally stay underwater for 30 seconds or less, but are able to dive 200 feet deep and stay down for up to a minute. Well adapted for their home in the water, puffins are also speedy in the air. They flap their wings up to 400 times a minute. Using their beaks and claws, puffins build their burrows between two boulders or in a rocky crevice."
        },
	{
            type: "Bald Eagle",
            image_url: "images/eagle.png",
            diet: "Carnivore",
            lifespan: "Up - 28 years",
            size: "34 - 43 inches",
            weight: "6.5 - 14 pounds",
            description: "A bald eagle's white head may make it look bald. Female bald eagles are a bit bigger than males.Their bodies can be three feet long, and their wingspan can be eight feet across. That's about the distance from the floor to the ceiling! Eagle nests are called aeries (AIR-ees). Bald eagles build their nests at the very top of tall trees so the eggs will be safe. Some parents come back year after year to the same nest, adding more sticks, twigs, and grass each time."
        },
	
	{
            type: "Humboldt Penguin",
	    image_url: "images/penguin.png",
            diet: "Carnivore",
            lifespan: "15 - 20 years",
            size: "22 - 28 inches",
            weight: "8 - 13 pounds",
            description: "Humboldt penguins live along the shores of Peru and Chile, two countries in South America. Named for a chilly water current that flows through their coastal range, these birds are excellent swimmers. They can dive up to 500 feet underwater in search of snacks such as fish, shrimp, and squid. When the birds need a break from swimming, they come ashore. Getting around on land isn’t always easy. Parts of their habitat feature rocky seaside cliffs. It sports patches of bare, pink skin around its eyes and at the base of its bill. The bird expels body heat through these featherless spots."
        },
	{
            type: "Flamingo",
            image_url: "images/flamingo.png",
            diet: "Omnivore",
            lifespan: "40 years",
            size: "36 - 50 inches",
            weight: "8.75 pounds",
            description: "Flamingos are famous for their bright pink feathers, stilt-like legs, and S-shaped neck. When a flamingo spots potential dinner—favorite foods include shrimp, snails, and algae—it plunges its head into the water, twists it upside down, and scoops the fish using its upper beak like a shovel. They are able to 'run' on water, thanks to their webbed feet, to gain speed before lifting up into the sky. Flamingo young are born white, with soft, downy feathers and a straight bill. The bill gradually curves downward as the flamingo matures."
        },
	{
            type: "Indian Peacock",
            image_url: "images/peacock.png",
            diet: "Omnivore",
            lifespan: "Up to 20 years",
            size: "35 - 50 inches",
            weight: "8.75 to 13 pounds",
            description: "Peacock are among the largest of all birds that fly. The beautiful feathers that cover the tails of a peacock are 5 feet long—longer than the bird's body—and can be displayed in a spectacular fan of brilliant colors. These long feathers actually grow from the bird's back, not the tail. It elevates them by raising the much shorter tail feathers underneath them. Females don't have long tail feathers, but they do have a crest on their head and green neck feathers. Indian peacock are native to India and Sri Lanka, in South Asia. The head and body of adult peacock range from 3 to 4 feet long."
        },
        {
            type: "Northern Mockingbird",
            image_url: "images/mockingbird.png",
            diet: "Omnivore",
            lifespan: "8 to 20 years",
            size: "10 inches",
            weight: "47-51 grams",
            description: "The mockingbird can imitate many sounds, including the chirps of some 35 different bird species. And they can learn over 200 different songs in their lifetime. They are territorial and chase away other birds that invade their home turf. The mockingbird dines on fruit, seeds, berries, and small insects. Snakes, owls, hawks, blue jays, alligators, and raccoons prey on these birds. These birds are gray and brown with white patches on both the bottoms and tops of their wings. They’re commonly found on tall shrubs or tree branches on the edges of forests, in backyards, or in parks."
        },   
        {
            type: "Ostrich",
            image_url: "images/ostrich.png",
            diet: "Omnivore",
            lifespan: "30 to 40 years",
            size: "7 to 9 feet",
            weight: "220 to 350 pounds",
            description: "The ostrich is the tallest and the heaviest of all birds. While the huge ostrich is a bird, it does not fly. Instead it runs. In one stride, an ostrich can cover up to 16 feet. It can run 64 kilometers an hour. The ostrich uses its short wings for balance, holding them outstretched when it runs. It’s strong legs can also be used for self-defense. An ostrich will kick with a force mighty enough to kill a lion. When danger approaches, an ostrich will often lie low to hide, stretching its neck along the ground. From far away, it looks like the ostrich has buried its head in the sand."
        },
        {
            type: "Peregrine Falcon",
            image_url: "images/falcon.png",
            diet: "Carnivore",
            lifespan: "Up to 17 years",
            size: "Body: 14 to 19 inches; Wingspan: 3.3 to 3.6 feet",
            weight: "18.8 to 56.5 ounces",
            description: "A peregrine falcon can dive up to 323 kilometers an hour to capture prey in flight, striking in midair with its outstretched talons, or claws. Peregrines usually hunt with either a swift chase or a fast dive. Starlings, pigeons, and doves are among their favorite meals. The peregrine is an adaptable falcon that can be found in almost any habitat. Peregrines live from cold tundra to hot deserts, from sea level to high in the mountains. Their adaptability even allows them to thrive in cities."
        },
        {
            type: "Pileated Woodpecker",
            /*image_url: "https://download.ams.birds.cornell.edu/api/v1/asset/100151781/480",*/
	     image_url: "images/woodpecker.png",
            diet: "Omnivore",
            lifespan: "4 to 12 years",
            size: "Body: 16 to 19 inches; Wingspan: 26 to 30 inches",
            weight: "8.8 to 12.3 ounces",
            description: "The pileated woodpecker is a large black bird with white on each side of its neck and a red crest on its head. The sound of the pileated woodpecker's hammering carries a long distance through the woods where they live. They drum to establish the boundaries of their territory, warning others away. They use their beaks to peck and dig under bark to find insects and will often dig large, rectangular holes in trees to uncover their meals. Some holes are so big that they weaken small, young trees. The birds also strip pieces of bark from trees looking for food. Generally, however, pileated woodpeckers help keep a forest healthy by eating wood-boring insects."
        },
        {
            type: "Snowy Owl",
            image_url: "images/owl.png",
            diet: "Carnivore",
            lifespan: "10 years",
            size: "Body: 20 to 28 inches; Wingspan: 4.2 to 4.8 feet",
            weight: "3.5 to 6.5 pounds",
            description: "These large owls mainly live in the Arctic in open, treeless areas. Snowy owls perch on the ground or on short posts. From there they patiently watch for prey. Their favorite target is lemmings. Snowy owls have excellent eyesight, but they obviously can't see their prey when it's underneath snow or a thick layer of plants. To capture those meals, the owl relies on its other keen sense: hearing. In flight, snowy owls generally cruise low to the ground. Once they spot their prey, they approach it from the air, and snatch it up using the claws on their feet. The snowy owl is active during the day, especially in the summertime. They tend to be most active at dawn and dusk."
        }
	
     ];

})();
