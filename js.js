 let tbody = document.querySelector('#tab1');
 let stockStatus = document.querySelector('.available');



 const createElement = (i, rowObj) => {
     console.log(rowObj)



     statusColor = (qty) => {
         if (qty == 0) {
             return "outofstock"

         } else if (qty < 21) {
             return "almostoutofStock";
         } else {
             return "instock";
         }
     }
     statusColor();


     let table = `    <td>${i + 1 }</td>
                        <td>${rowObj.name}</td>
                        <td>${rowObj.desc}</td>
                        <td>${rowObj.cat}</td>
                        <td>${rowObj.qty}</td>
                        <td><i class="fa fa-edit ${ i + 1 }"></i></td>
                        <td><i class="fa fa-trash ${ i + 1 }"></i></td>
                        <td><div class="available  ${statusColor(rowObj.qty)}" ></div></td>`




     let createElement1 = document.createElement("tr")

     createElement1.className = `row${i}`
     createElement1.innerHTML = table

     return createElement1
 }


 const showData = () => {
     let MyItemList = JSON.parse(localStorage.getItem('MyItemList'))
         //console.log(MyItemList)

     let itemlength = MyItemList.length
     for (let i = 0; i < itemlength; i++) {
         let row_ob = {
             cat: MyItemList[i].cat,
             desc: MyItemList[i].desc,
             id: MyItemList[i].id,
             name: MyItemList[i].name,
             qty: MyItemList[i].qty,

         }
         let item = createElement(i, row_ob)
         statusColor();
         tbody.append(item)




     }


     delBtn = document.querySelectorAll('.fa-trash')
     console.log(delBtn)
     delBtn.forEach(Element => {
         Element.addEventListener('click', (e) => {
             let eventdel = e.target.className.match(/\d+/g, '')
             console.log(eventdel)
             delStroge(eventdel)
         })
     })

     updBtn = document.querySelectorAll('.fa-edit')
     console.log(updBtn)
     updBtn.forEach(Element => {
         Element.addEventListener('click', (e) => {
             let eventUpd = e.target.className.match(/\d+/g, '')
             console.log(eventUpd)

             localStorage.setItem("eventUpd", eventUpd);
             location.href = '/templates/update.html';
         })
     })

     //return tbody
 }





 let delStroge = (eventdel) => {

     //localStorage.setItem('eventUpd', JSON.stringify(eventUpd))
     let MyItemList = JSON.parse(localStorage.getItem('MyItemList'));
     let indexData = [+eventdel - 1]
         //console.log(indexData)
     MyItemList.splice(indexData, 1);
     localStorage.setItem('MyItemList', JSON.stringify(MyItemList));
     window.location.reload()
 }


 let retriveLocalStroge = (eventUpd) => {

     //localStorage.setItem('eventUpd', JSON.stringify(eventUpd))
     let MyItemList = JSON.parse(localStorage.getItem('MyItemList'));
     let i = parseInt(eventUpd) - 1
         //location.href = '/templates/update.html';
     let name1 = document.getElementById("inputName1")
     let desc = document.getElementById('inputDescription1')
     let cat = document.getElementById('inputCategory1')
     let qty = document.getElementById('inputQuantity1')


     //console.log(MyItemList[i].name)


     //console.log(MyItemList[i].name)




     //localStorage.setItem('MyItemList', JSON.stringify(MyItemList));

 }



 // function clearStorage() {
 //     //clears the entire localStorage
 //     localStorage.clear()
 //     console.log("clear records");
 // }

 // function removeItem() {
 //     //deletes item from localStorage
 //     var key = document.getElementById('removeKey').value;
 //     localStorage.removeItem(key)
 //     console.log("remove items");
 // }

 document.addEventListener('DOMContentLoaded', () => {
     //document.getElementById('submit').addEventListener('click', addItem);
     showData()

 });