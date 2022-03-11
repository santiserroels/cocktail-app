// This function reads an object searching an specific property, in this case "Ingredients".
// Then returns an array with the first two ingredients of the cocktail and a number representing how many more ingredients the cocktail has.

const getIngredients = (obj) =>{
    const a = []

    for(const property in obj){
        if(property.includes('strIngredient') && obj[property]){
            a.push(obj[property])
        }
    }

    const b = a.reduce((acc,el,i)=>{

      if(i<2){
        acc.push(el)
      }else if(i === a.length-1){
        acc.push(a.length - acc.length)
      }

      return acc
    },[])

    return b
}

export default getIngredients