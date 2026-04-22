   

        function calculatePrice(){
          const tonprice = document.getElementById('ton').value;
          const trips = document.getElementById("trip").value;

          if(tonprice && trips){
            const total = tonprice * trips;
            document.getElementById("price").innerHTML = "Total Price :" + total + "Aed";

          }
          else{
            document.getElementById ("price").innerText = "Total Price : 0 AED";
          }
        }