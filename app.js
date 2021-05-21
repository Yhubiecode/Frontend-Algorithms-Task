function convertFahrToCelsius (F){
    const cal = (F - 32) * 5/9
    const result = cal.toFixed(4);
    if(isNaN(F)) {
        console.log(`${F} is not a valid number but a/an ${typeof(F)}`)
      }else {
        console.log(result)
      }
      
}

convertFahrToCelsius(0)
convertFahrToCelsius("0")
convertFahrToCelsius([1,2,3])
convertFahrToCelsius({temp: 0})