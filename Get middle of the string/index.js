function getMiddle(n) {
	if(n.length === 1) return n;

	let arr = n.split('');
	let mid = n.length/2;

 	if(n.length % 2 === 0){
		let pMid = mid--;
		return (arr[mid] + arr[pMid]);
	 }else{
		return arr[Math.floor(mid)];
	 }
};