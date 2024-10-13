$(document).ready(function () { 
    var count = 0;
    var n = 0;
    function func1() {
        n = Math.floor(Math.random() * 20);
    }
    function func3() {
        var x = Math.floor(Math.random() * 3) + 1;
        $('.img').attr('src', 'img' + x + '.png');
    }
    func3();
    func1();
    func2(n);

    var correctAnswers = {
        0: "Lebanon and Israel",
        1: "Egypt and Mesopotamia",
        2: "trading and learning",
        3: "Northern",
        4: "a collection",
        5: "jealousy caused by trade",
        6: "the sea",
        7: "high priest",
        8: "main hall",
        9: "Carthage",
        10: "carpenters",
        11: "cabinetmakers",
        12: "Torah",
        13: "psalms",
        14: "cistern",
        15: "synagogue",
        16: "rabbis",
        17: "Jerusalem",
        18: "Moses",
        19: "social justice"
    };

    var correctImage = "https://thumbs.dreamstime.com/b/grunge-office-stamp-correct-3089029.jpg";
    var wrongImage = "https://www.trainerbubble.com/wp-content/uploads/2015/09/Wrong-Answer_web-1024x682.jpg";

    // Initialize audio (optional)
    // var correctAudio = new Audio('correct.mp3');
    // var wrongAudio = new Audio('wrong.mp3');

    $(".selfformedclass2, .selfformedclass3, .selfformedclass4, .selfformedclass5").click(handleAnswerClick);

    function handleAnswerClick(event) {
        var selectedAnswer = $(event.target).text();
        var correctAnswer = correctAnswers[n];

        if (selectedAnswer === correctAnswer) {
            // Handle correct answer: blur, show image, and then move to the next question
            blurAndShowImage(correctImage, true);
        } else {
            // Handle wrong answer: blur, show image, but don't change question
            blurAndShowImage(wrongImage, false);
        }
    }

    function blurAndShowImage(imageUrl, isCorrect) {
        // Apply blur to the page
        $('.page-content').css('filter', 'blur(9px)');
        
        // Show the image
        $('body').append(`<div id="feedback-image" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 9999;">
            <img src="${imageUrl}" style="max-width: 400px; max-height: 400px;">
        </div>`);

        // Wait for 2 seconds, then revert blur and remove the image
        setTimeout(function () {
            $('.page-content').css('filter', 'none');
            $('#feedback-image').remove();

            // If the answer is correct, load the next question
            if (isCorrect) {
                func3();
                func1();
                func2(n);
            }
        }, 2000);
    }

    function func2(n) {
        // Question and answer logic remains the same
        if (n == 0) {
            $(".selfformedclass1").text("The Phoenicians come from a land shared by which countries??");
            $(".selfformedclass2").text("Egypt and South Africa");
            $(".selfformedclass3").text("Somalia and The Mediterranean");
            $(".selfformedclass4").text("Lebanon and Israel");
            $(".selfformedclass5").text("Morocco and Turkey");
        } else if (n == 1) {
            $(".selfformedclass1").text("Canaan is an important historical place for Phoenicians and Hebrews. Canaan is a bridge, and it connects two countries. The countries are:");
            $(".selfformedclass2").text("Somalia and The Mediterranean");
            $(".selfformedclass3").text("Egypt and The Mediterranean");
            $(".selfformedclass4").text("Lebanon and Israel");
            $(".selfformedclass5").text("Egypt and Mesopotamia");
        } else if (n == 2) {
            $(".selfformedclass1").text("The Hebrews and Phoenicians have a common cultural ground. They both were interested in ");
            $(".selfformedclass2").text("mining and craftsmaking");
            $(".selfformedclass3").text("shipbuilding and sailing");
            $(".selfformedclass4").text("trading and learning");
            $(".selfformedclass5").text("clothmaking and glassmaking");
        } else if (n == 3) {
            $(".selfformedclass1").text("The Phoenicians lived in which part of the Canaan?");
            $(".selfformedclass2").text("Northern");
            $(".selfformedclass3").text("Southern");
            $(".selfformedclass4").text("Eastern");
            $(".selfformedclass5").text("Western");
        } else if (n == 4) {
            $(".selfformedclass1").text("Phoenicia never became a united country but it had many city states. The city states in Phoenicia remained as ");
            $(".selfformedclass2").text("divided regions");
            $(".selfformedclass3").text("a subcontinent");
            $(".selfformedclass4").text("a collection");
            $(".selfformedclass5").text("evacuated places");
        } else if (n == 5) {
            $(".selfformedclass1").text("Why did the city states of Phoenicia never maintained good relationships with each other?");
            $(".selfformedclass2").text("sea borders");
            $(".selfformedclass3").text("dense forests");
            $(".selfformedclass4").text("lack of resources");
            $(".selfformedclass5").text("jealousy caused by trade");
        } else if (n == 6) {
            $(".selfformedclass1").text("To make a living, the Phoenicians turned to:");
            $(".selfformedclass2").text("the mountains");
            $(".selfformedclass3").text("the Canaan");
            $(".selfformedclass4").text("the sea");
            $(".selfformedclass5").text("farming");
        } else if (n == 7) {
            $(".selfformedclass1").text("The king of a Phoenician city state was also known as the");
            $(".selfformedclass2").text("protector");
            $(".selfformedclass3").text("master");
            $(".selfformedclass4").text("zabaloo");
            $(".selfformedclass5").text("high priest");
        } else if (n == 8) {
            $(".selfformedclass1").text("Foyer was found in Phoenician temples. A Foyer is : ");
            $(".selfformedclass2").text("a storeroom");
            $(".selfformedclass3").text("a porch");
            $(".selfformedclass4").text("combined passageways");
            $(".selfformedclass5").text("main hall");
        } else if (n == 9) {
            $(".selfformedclass1").text("Phoenician sailors and merchants settled in North Africa. Which North African city is famous for Phoenician settlement?");
            $(".selfformedclass2").text("Tyre");
            $(".selfformedclass3").text("Beirut");
            $(".selfformedclass4").text("Sidon");
            $(".selfformedclass5").text("Carthage");
        } else if (n == 10) {
            $(".selfformedclass1").text("Phoenicians were an ancient civilization based around the Mediterranean. The Phoenicians were amazing:");
            $(".selfformedclass2").text("rulers");
            $(".selfformedclass3").text("painters");
            $(".selfformedclass4").text("carpenters");
            $(".selfformedclass5").text("pipers");
        } else if (n == 11) {
            $(".selfformedclass1").text('Phoenicians were an ancient civilization based around the Mediterranean. The Phoenicians were amazing:');
            $(".selfformedclass2").text('rulers');
            $(".selfformedclass3").text('cabinetmakers');
            $(".selfformedclass4").text('cleaners');
            $(".selfformedclass5").text('cooks');
        } else if (n == 12) {
            $(".selfformedclass1").text("The Hebrews were an ancient civilization like the Phoenicians. Do you know the name of their holy book?");
            $(".selfformedclass2").text("Kasambha");
            $(".selfformedclass3").text("Cistern");
            $(".selfformedclass4").text("Apocalypse");
            $(".selfformedclass5").text("Torah");
        } else if (n == 13) {
            $(".selfformedclass1").text("Like every other religious clans, the Hebrews had their own records of religious songs and some of them are documented in Bible. Those songs are known by which of the following terms? ");
            $(".selfformedclass2").text("toephoer");
            $(".selfformedclass3").text("kjackh");
            $(".selfformedclass4").text("shandho");
            $(".selfformedclass5").text("psalms");
        } else if (n == 14) {
            $(".selfformedclass1").text("The Phoenicians and Hebrews both shared a connection with Canaan which connects Mesopotamia and Egypt. The Hebrews used a water collector. Can you name it?");
            $(".selfformedclass2").text("psalms");
            $(".selfformedclass3").text("cistern");
            $(".selfformedclass4").text("villiae");
            $(".selfformedclass5").text("flock");
        } else if (n == 15) {
            $(".selfformedclass1").text("The Hebrews gathered somewhere to pray. Can you term the place?");
            $(".selfformedclass2").text("torah");
            $(".selfformedclass3").text("sabbath");
            $(".selfformedclass4").text("synagogue");
            $(".selfformedclass5").text("exodus");
        } else if (n == 16) {
            $(".selfformedclass1").text("Hebrews consist of some religious preachers who are experts of the Hebrew religion. Can you term those Hebrew religion experts?");
            $(".selfformedclass2").text("synagogue");
            $(".selfformedclass3").text("prophets");
            $(".selfformedclass4").text("priests");
            $(".selfformedclass5").text("rabbis");
        } else if (n == 17) {
            $(".selfformedclass1").text("The Phoenicians and Hebrews have a common city known as a holy city. What is the name of the city?");
            $(".selfformedclass2").text("Beirut");
            $(".selfformedclass3").text("Byblos");
            $(".selfformedclass4").text("Canaan");
            $(".selfformedclass5").text("Jerusalem");
        }
        else if (n == 18) {
            $(".selfformedclass1").text("There is a lot of debate about the exodus of Hebrews from Egypt that marked their end as slaves in ancient Egypt. Which Hebrew leader initiated the exodus?");
            $(".selfformedclass2").text("Yahweh");
            $(".selfformedclass3").text("Moses");
            $(".selfformedclass4").text("Abraham");
            $(".selfformedclass5").text("Joshua");
        }
        else if (n == 19) {
            $(".selfformedclass1").text("Although the Phoenicians and Hebrews were Canaanites, they have some major differences in them. The Hebrews were particularly believers of ");
            $(".selfformedclass2").text("prophets");
            $(".selfformedclass3").text("holy texts");
            $(".selfformedclass4").text("ghosts");
            $(".selfformedclass5").text("social justice");
        }
    }
});