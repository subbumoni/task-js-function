1.anonymouse function=get odd number>
var array=[1,2,3,4,5,6,7,8,9,];
let abc=function(array){
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
              console.log(array[i]);
          } 
     }
  };
abc(array)

IIFE fuction =get odd number:
var array=[1,2,3,4,5,6,7,8,9];
 (function (array)
 {
    for(var i=0; i<array.length; i++)
    {
      if(array[i]%2!==0)
      {
         console.log(array[i]);
      }
    }
 })(array)

 Arrow Function :
var y=[1,2,3,4,5,6,7]

var odd=(array)=>{
   let arr=[];
   for(let i=0; i<array.length; i++)
   {
     if(array[i]%2!==0)
     {
      arr.push(array[i]);
     }
   }
   return arr;
}
console.log(odd(y));


b.Convert all the strings to title caps in a string array
anonymous : 

var str="my name is subramanian j";
let def=function (str) {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
}
console.log(def(str))



IIFE :
var str="my name is subramanian j";
(function (str) {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
})(str);

// USING ARROW FUNCTION:

var str="my name is subramanian j";
let def= (str)=>{
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
}
console.log(def(str));


// c.Sum of all numbers in an array

var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
let ghi=function (a)
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
}
ghi(a);

IIFE :
var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
(function (a)
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
})(a);

// ARROW function:

var a=[1,2,3,4,5,6,7,8,9];
var sum=0;
let gh=(a)=>
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
}
console.log(gh(a));

d.Return all the prime numbers in an array
ANONYMOUSE FUNCTION;

let n=34;
let l=function (n)
{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
         console.log(i);
      }
   }
}
l(n);



IIFE :
let m=34;
(function (m)
{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
         console.log(i);
      }
   }
})(m);


// BY USING ARROW FUNCTION:
let x=34;
let y=(n)=>
{
   for(let i=2; i<=n; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
         console.log(i);
      }
   }
}
console.log(y(x))


e.Return all the palindromes in an array

Anonymous Function : 

Anonymous Function :  
 const box=   function(arr,n)      
    {
        // Traversing each element of the array
        // and check if it is palindrome or not
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }(box)


    IIFE : 

              (  function (arr, n)
        {
            // Traversing each element of the array
            // and check if it is palindrome or not
            for (let i = 0; i < n; i++)
            {
                let ans = isPalindrome(arr[i]);
                if (ans == false)
                    return false;
            }
            return true;
        })([1,2,3] , 3)


      //   BY USING ARROW FUNCTION:
Palindrome = (arr, n) =>
    {
        // Traversing each element of the array
        // and check if it is palindrome or not
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }


    
 f.Return median of two sorted arrays of the same size.
Anonymous:
const gif=function(nums1, nums2) {
   let s1= nums1.length
   let s2= nums2.length
   let index = s1+s2
   if(s1==0){
       if(s2%2==1){
           return nums2[Math.floor(index/2)]
       }else{
           return  (nums2[Math.floor(index/2)-1] + nums2[Math.floor(index/2)])/2
       }
   }
   for(let i=0 ; i<index/2+1;i++){
           nums1.push(nums2[i])
       }
   nums1.sort((a,b)=>a-b)
   console.log(nums1)
   if(index%2==1){
       return nums1[Math.floor(index/2)]
   }else{
       return (nums1[Math.floor(index/2)-1] + nums1[Math.floor(index/2)])/2
   }

};



IIFE:
(function(nums1, nums2) {
   let s1= nums1.length
   let s2= nums2.length
   let index = s1+s2
   if(s1==0){
       if(s2%2==1){
           return nums2[Math.floor(index/2)]
       }else{
           return  (nums2[Math.floor(index/2)-1] + nums2[Math.floor(index/2)])/2
       }
   }
   for(let i=0 ; i<index/2+1;i++){
           nums1.push(nums2[i])
       }
   nums1.sort((a,b)=>a-b)
   console.log(nums1)
   if(index%2==1){
       return nums1[Math.floor(index/2)]
   }else{
       return (nums1[Math.floor(index/2)-1] + nums1[Math.floor(index/2)])/2
   }

});



// g.Remove duplicates from an array

anonymous :
var array=[1,1,2,3,4,5];
const arr=function (array){
   let dup = [...new Set(array)];
   return(dup);
 }
 (array);

 IIFE :
 var array=[1,1,2,3,4,5];
(function (array){
   let dup = [...new Set(array)];
   return(dup);
 })
 (array);



 
h.Rotate an array by k times
anonymous :
function (a, n, k)
{
    k = k % n;

    for (let i = 0; i < n; i++) {
        if (i < k) {


            console.log(a[n + i - k] + " ");
        }
        else {


            console.log((a[i - k]) + " ");
        }
    }

}
  let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
(Array, N, K);

IIFE :
var Array = [1, 2, 3, 4, 5];
var N = Array.length;
var K = 2;
(function (a, n, k)
{
    k = k % n;

    for (let i = 0; i < n; i++) {
        if (i < k) {


            console.log(a[n + i - k] + " ");
        }
        else {


            console.log((a[i - k]) + " ");
        }
    }

})
(Array, N, K);
