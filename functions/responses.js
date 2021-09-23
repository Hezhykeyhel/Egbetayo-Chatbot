function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "Hello") {
        return "Hello there!";}
    if (input == "Who created this bot?"){
        return "Egbetayo Damilola did";
    }
    if (input == "How you doing?"){
        return "Perfectly programmed thanks";
    }
    if (input == "How do i get to reach him?"){
        return "Contact him via damilolaegbetayo12@gmail.com";
    }
    if (input == "What skills does he possess?"){
        return "He's just good at whatever he does";
    }
    if (input == "What did he studied at school?"){
        return "Childhood Education";
    }
    if (input == "How did he become a web-designer?"){
        return "Constant practice made him edge through";
    }
    if (input == "Where does he resides?"){
        return "11, Josiah Aina street, Lagos state";
    }
    if (input == "Is he a friendly type?"){
        return "He's the most jovial person you can ever work with";
    }
    if (input == "What are his strength?"){
        return "He plays musical instruments to calm himself through the leading of the Holy spirit";
    }
    if (input == "Which church does he attends?"){
        return "The Gospel Faith Mission International";
    }
    if (input == "Who inspired him to become who he is?"){
        return "God did and also raised man to keep him encouraged and as well move on";
    }
     else if (input == "Goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
}
}
