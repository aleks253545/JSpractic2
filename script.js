let array = ['a','b','c','d','e','f','g','h'];
function elephant (position1,position2){
    let pos1=position1.split(''),
    pos2=position2.split(''),
    thisIndex;

    array.forEach((element,index) => {
        if (pos1[0]===element){
            thisIndex=index;
        }
    });
    if(8<pos1[1] || 1>pos1[1] || 8<pos2[1] || 1>pos2[1]){
        return false
    }
    if( +pos2[1]==+pos1[1]+2 || +pos2[1]+2==+pos1[1] ){
        if( pos2[0]===array[thisIndex+1] ||  pos2[0]===array[thisIndex-1])
        return true
    }else{return false}
    
}

console.log(elephant ('a3','b5'));