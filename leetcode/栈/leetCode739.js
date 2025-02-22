let temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
// var dailyTemperatures = function(temperatures) {
//     const res=new Array(temperatures.length).fill(0)
//     for(let i=0;i<temperatures.length;i++){
//         for(let j=i+1;j<temperatures.length;j++){
//             if(temperatures[j]>temperatures[i]){
//                 res[i]=j-i
//                 break
//             }
//         }
//     }
//     return res
// };
var dailyTemperatures = function (temperatures) {
    const len = temperatures.length;
    const stack = []
    const res = new Array(len).fill(0)
    for (let i = 0; i < len; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const top = stack.pop()
            res[top] = i - top
        }
        stack.push(i)
    }
    return res
}