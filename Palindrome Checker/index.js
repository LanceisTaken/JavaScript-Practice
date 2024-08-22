const input = document.getElementById("input")
function check (){
    const word = input.value;
    if (isPalindrome(word)){
        alert("It is a Palindrome")
    }
    else{
        alert("It is not a Palindrome")
    }
}

function isPalindrome(str) {
    // Check if the input is empty or consists only of whitespace
    if (!str.trim()) {
        return false;
    }

    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the cleaned string
    const reversedStr = cleanStr.split('').reverse().join('');
    
    // Check if the cleaned string is the same as the reversed string
    return cleanStr === reversedStr;
}