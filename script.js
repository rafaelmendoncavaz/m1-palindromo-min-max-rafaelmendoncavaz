function isPalindrome(str){
    /* Seu código aqui */
    let backwards = ""
    let forward = ""
    const cleanStr = str.replace(/ /g, '').toLowerCase()
    for(let i = 0; i < cleanStr.length; i++) {
        forward += cleanStr[i]
        backwards = cleanStr[i] + backwards
    }
    return forward === backwards
}

function arrayMaxMin(arr){
    /* Seu código aqui */
    let maxNumber = 0
    let minNumber = 0
    let minMaxArray = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > maxNumber) {
            maxNumber = arr[i]
        }
        if(i === 0 || arr[i] < minNumber) {
            minNumber = arr[i]
        }
    }
    minMaxArray.push(minNumber, maxNumber)
    return minMaxArray
}