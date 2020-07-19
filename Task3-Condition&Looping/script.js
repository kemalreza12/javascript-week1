let printSegitiga = input => {
    if(typeof input !== 'number') {
        console.log('Data harus number');
    } else {
        let prt;
        for(rows = 0; rows <= input; rows++) {
            prt = '';
            for(col = 1; col <= input - rows; col++) {
                prt +=  col + ' ';
            }
            console.log(prt)
        } 
    }
}    
printSegitiga(5)