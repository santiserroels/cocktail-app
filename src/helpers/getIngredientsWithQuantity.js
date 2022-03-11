// This function reads an object searching a specific properties, in this case "Ingredients" and "Quantity of ingredients" 
// Then returns an array with all the ingredients with his quantity.

const getIngredientsWithQuantity = (obj) =>{
    const a = []
    const b = []
    const c = []

    for(const property in obj){
        if(property.includes('strIngredient') && obj[property]){
            a.push(obj[property])
        }else if(property.includes('strMeasure') && obj[property]){
            b.push(obj[property])
        }
    }

    a.map((el,i) => {
       return c.push(b[i]+'- '+el)
    })

    return c
}

export default getIngredientsWithQuantity