/*

Write a recursive function called reverse which accepts a string and returns a new string in reverse.

*/

function reverse(str) {
    let result = []

    function helperInput(str) {
        if (str.length <= 0) return str
        result.push(str.slice(-1))
        return helperInput(str.slice(0, -1))
    }

    helperInput(str)

    return result.join('')
    
}


console.log(reverse('awesome'))



function reverse(str) {
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}