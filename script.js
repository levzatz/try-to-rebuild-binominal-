let x = Math.random(), // переменная добросовестности продавца
    s = 0.95,  //Известная добросовестность продавца
    niceSell,
    badSell,
    countOf10=0,
    countOf9=0,
    countOf8=0,
    countOf7=0,
    probability;
for (let s =0;s<1.01;s=s+0.05){
    for (let i=0;i<1000000;i++){
        niceSell = 0;
        badSell = 0;
        for (let i=0;i<10;i++){
            x = Math.random();
            if (x<s){
                niceSell++;
            }
            else {
                
            }
        
        }
        switch(niceSell){
            case 10: countOf10++;
            break;
            case 9: countOf9++;
            break;
            case 8: countOf8++;
            break;
            case 7: countOf7++;
            break;
        }
    }
    
    /* console.log(countOf10);
    console.log(countOf9);
    console.log(countOf8);
    
    console.log(countOf7); */
    probability = countOf10/(countOf10+countOf9+countOf8+countOf7);
    console.log(s);
    console.log(probability);
}




