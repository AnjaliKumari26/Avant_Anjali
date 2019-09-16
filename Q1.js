var convertToNumArray = function(num){
    return num.toString().split('')
}

//Method to Calculates the next biggest integer
function getNext(num){
    var numArray = convertToNumArray(num), // gets the number array; 
        totalLength = numArray.length - 1, 
        nextIndex = 0,
        leastIndex = 0,
        prevDiff = 0, 
        diff = 0, 
        swapIndex = 0, 
        temp = 0,
        str = "";

    // iterate from right most number to find out the 
    // number which is less than previous one.
    // for [1,3,4,5,2] the number is 4.     
    for(var index = totalLength; index >= 1; index--){
        nextIndex = (index - 1);

        if(numArray[nextIndex] < numArray[index]){
            leastIndex = nextIndex;
            break;
        }
    }

    // iterate from right to check the number which is closest
    // and greater then the number we found from above loop.
    // so in our case 5 is the closes to 4  
    for(index = totalLength; index > leastIndex; index--){
        diff = numArray[index] - numArray[leastIndex];

        if(index === totalLength){          
            prevDiff = (diff  < 0) ? 9999 : diff;
            closestNum = numArray[index];
            swapIndex = index;  
        }else{
            if(diff >= 0 && diff < prevDiff){               
                prevDiff = diff;
                swapIndex = index;
            }
        }

    }

    
    
   //Sorting the array & converting array will be from [1,3,4,5,2] to [1,3,5,4,2]
    temp = numArray[swapIndex];
    numArray[swapIndex] = numArray[leastIndex];
    numArray[leastIndex] = temp;

	var x = leastIndex + 1
    var citrus = numArray.slice(leastIndex + 1).sort();
	numArray=numArray.slice(0,x);
	var z=numArray.concat(citrus);
	var y=z.join("");
      
    if(y > num){
        return parseInt(y);
    }
    else {
        return 'false';
    }

}

var nr = undefined;
var numbers = /^[0-9]+$/;
      
//main click event
function Calfunction(){
     
    nr=document.getElementById("num1").value; 
    document.getElementById("error").style.display = "none";
    document.getElementById("result").style.display = "none";

    if(nr.length>=3 && numbers.test(nr))
    {
      document.getElementById("result").style.display = "block";
      document.getElementById("result").innerHTML= " Result of Next largest integer of "+ nr+" => "+getNext(nr);   
    }
    
    else{
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML="Please Enter Atleast 3 digit number only"; 
    }
}

