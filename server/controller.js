module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A friend asks only for your time not your money.", "Advice, when most needed, is least heeded.", "Determination is what you need now.", "Long life is in store for you.", "There is no wisdom greater than kindness."]

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    getCongradulated: (req, res) => {
        const congrats = ["Keep it up!", "The good will keep on coming!", "Nice!"]

        let randomIndex = Math.floor(Math.random() * congrats.length);
        let randomCongradulationPhrase = congrats[randomIndex];

        res.status(200).send(randomCongradulationPhrase);
    },

    getEncouragement: (req, res) => {
        const encouragement = ["Try serving someone.", "Remember to smile", "Remember to laugh"]

        let randomIndex = Math.floor(Math.random() * encouragement.length);
        let randomEncouragement = encouragement[randomIndex];

        res.status(200).send(randomEncouragement);
    },
}