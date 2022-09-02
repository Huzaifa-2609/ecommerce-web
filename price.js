let table=sessionStorage.getItem("table") ||"";
let total=sessionStorage.getItem("total")||0;
export default window.price=(price, item)=>{    
      // For Total
        total=parseInt(total)+parseInt(price);
        sessionStorage.setItem("total", total);
      document.getElementById("totalid").innerHTML=sessionStorage.getItem("total");  

      // For List Of Items
      table+=`<tr>
        <td>${item}</td>
        <td>${price} USD</td>
        </tr>`;
     document.getElementById("itemid").innerHTML=table;
     let a= document.getElementById("itemid").innerHTML;
     sessionStorage.setItem("table",a);
 }
 const clear=()=>{
  window.sessionStorage.clear();
  document.getElementById("itemid").innerHTML="";
  document.getElementById("totalid").innerHTML=0;

}
 document.getElementById("clrbtn").addEventListener("click", clear)
