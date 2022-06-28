import symbol from "./symbol";

export default function arrCard(numCards){
    const halfCards = numCards / 2
    const arr = []
    let a=0, b=0
    while( a < numCards){
        if( b === halfCards ) b = 0
        let random = Math.floor(Math.random() * numCards);

        if( !arr.some(item => item.id === random)){
            arr.push({
                id: random,
                symbol: symbol[b],
                bind: b,
                rotate: false,
                validating: 0,
                permanent: 0
            })
            a++
            b++
        }
    }

    return arr

}