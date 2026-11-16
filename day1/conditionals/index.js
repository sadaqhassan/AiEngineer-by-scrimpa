let age = 432

if(age  < 7 ) {
    console.log('free ')
}else if(age > 7 && age < 17){
    console.log("Child discount")
}else if(age > 17  && age < 26 ){
    console.log("student Discount")
}else if(age > 26 && age < 66){
    console.log("full price")
}else {
    console.log("senior citizen Discount")
}