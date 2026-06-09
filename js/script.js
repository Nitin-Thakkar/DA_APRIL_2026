 function stringDemo()
        {
            console.log("External Javascript");
            var name1= "MiIT Technologies";
            var name2 = "Miit technologies";

            var str1 = "Rajvi Patel";
            console.log(typeof(str1));
            console.log("Length of str1 :"+str1.length);
            console.log("Character at 10th Place is "+str1.charAt(10));
            console.log("Character at 3rd Place :"+str1.at(3));

            console.log(str1[3]);
            str1[3] = "S";   
            console.log("New String : "+str1);

            // Slice
            let substr = str1.slice(6,9);
            console.log("Slice :"+substr);
            console.log("Slice with Negative Index :"+str1.slice(-5));
            console.log("Upper Case :"+str1.toUpperCase());
            console.log("Lower Case :"+str1.toLowerCase());
            
        }