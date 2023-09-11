function threeSum(arr, target) {
// write your code here
	//Sort the input array 
	arr.sort((a, b) => a-b);
	let closestSum = Infinity;
	for(let i=0; i<arr.length-2; i++){
		let left = i+1;
		let right = arr.length-1;
		while(left>right){
			const currentSum = arr[i]+arr[left]+arr[right];

			if(Math.abs(currentSum - target) < Math.abs(closestSum-target)){
				closestSum = currentSum;
			}

			if(currentSum < target){
				left++;
			}
			else {
				right--;
			}
		}
	}
	
	
  return closestSum
}

module.exports = threeSum;
