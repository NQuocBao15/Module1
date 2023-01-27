const vowels = ["a", "e", "i", "o", "u"]


function countVowels(text) {
    let counter = 0;

    for (let letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            counter++
        }
    }
    console.log(`Có ${counter} nguyên âm trong chuỗi`)
    return counter
}
countVowels("llllllllllllllllll")

