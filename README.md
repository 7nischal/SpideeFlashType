# Flash Type App 
React-app to check your typing speed. 

# Structure of Our STATE
state = {
        selectedParagraph: "Hello World!",
        timerStarted: false,
        timeRemaining: TotalTime,
        words: 0,
        characters: 0,
        wpm: 0,
        testInfo: [],
    }


# Algorithms 

/**
         * 1. Handle the underflow case - all characters should be shown as not-attempted
         * 2. Handle the overflow case - early exit
         * 3. Handle the backspace case
         *      - Mark the [index+1] element as notAttempted
         *        (irrespective of whether the index is less than zero)
         *      - But, don't forget to check for the overflow here
         *        (index + 1 -> out of bound, when index === length-1)
         * 4. Update the status in test info
         *      1. Find out the last character in the inputValue and it's index
         *      2. Check if the character at same index in testInfo (state) matches
         *      3. Yes -> Correct
         *         No  -> Incorrect (Mistake++)
         * 5. Irrespective of the case, characters, words and wpm can be updated
*/

Video: https://youtu.be/ns94sRvzjt4?list=PLGyA74h_S9No5V5TRjHc893mN7rs-VaoZ 



Web App Link: https://aaronsiim.github.io/flashtype 