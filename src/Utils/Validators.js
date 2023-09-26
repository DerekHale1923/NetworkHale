export const required = value => {

    if(value) return undefined
    return  'field is required'
}

export const maxLengthCreator = maxLength => value => {
    if(value.length > maxLength) return `Max length is ${maxLength} symbols`
    return  undefined
} /*замыкание! maxLength это параметр который мы укажем, для максимальной длинны, а value будет браться из места вызова*/
