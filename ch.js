let carprodArr = JSON.parse(localStorage.getItem ("carproudArr"));

let total = 0

for( let i in carprodArr){
    let subtotal = carprodArr(i).qty

    total += subtotal
    document.getElementById("prod-rows").innerHTML +=`
    <tr>
    <th>product</th>
    <th>title</th>
    <th>price</th>
    <th>Quantitay</th>
    <th>sub Total</th>
</tr>

     
    `
}