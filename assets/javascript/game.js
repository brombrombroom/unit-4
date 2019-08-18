
$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var score = 0;


    var computerPick = parseInt(Math.floor(Math.random() * 100) + 19);
    $(".RandomNumber").html("Match this score: " +computerPick);

    var randomdownload1 = parseInt(Math.floor(Math.random() * 12) + 1);
    var randomdownload2 = parseInt(Math.floor(Math.random() * 12) + 1);
    var randomdownload3 = parseInt(Math.floor(Math.random() * 12) + 1);
    var randomdownload4 = parseInt(Math.floor(Math.random() * 12) + 1);

    function newRound() {
        score = 0;
        $("#score").html(score);
        computerPick = parseInt(Math.floor(Math.random() * 100) + 19);
        $(".RandomNumber").html("Match this score: " +computerPick);

    }

    $("#randomdownload1").on("click", function () {
        score = score + randomdownload1;
        $("#score").html("Your Total Score: " +score);
        if (score == computerPick) {
            checkWin();

        } else if (score > computerPick) {
            checkWin();
        }
    });

    $("#randomdownload2").on("click", function () {
        score = score + randomdownload2;
        $("#score").html("Your Total Score: " +score);
        if (score == computerPick) {
            checkWin();

        } else if (score > computerPick) {
            checkWin();
        }
    });

    $("#randomdownload3").on("click", function () {
        score = score + randomdownload3;
        $("#score").html("Your Total Score: " +score);
        if (score == computerPick) {
            checkWin();

        } else if (score > computerPick) {
            checkWin();
        }
    });

    $("#randomdownload4").on("click", function () {
        score = score + randomdownload4;
        $("#score").html("Your Total Score: " +score);
        if (score == computerPick) {
            checkWin();

        } else if (score > computerPick) {
            checkWin();
        }
    });

    function checkWin() {

        if (score === computerPick) {
            wins++;
            $("#wins").html("Wins: " + wins);
            alert("You won! Play again?");
            newRound();
        } else if (score > computerPick) {
            losses++;
            $("#text").html("You Lost Try Again!");
            $("#losses").html("Losses: " + losses);
            newRound();
        }
    }

});
