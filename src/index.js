module.exports = function reverse (n) {
    let result = []
    let arr = n.toString().split('')
    
        if (arr[0] === '-')
        {arr =  arr.slice(1)
            for (i = 0; i < arr.length; i++)
            {result.unshift(arr[i])}
            return Number(result.join(''))}
            
        else {for (i = 0; i < arr.length; i++)
            {result.unshift(arr[i])}
            return +result.join('')}
    
    
}
