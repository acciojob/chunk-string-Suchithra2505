function stringChop(str, size) {
  // your code here
	let arr = [];
	if(str === null) return arr;
	else{
		i=0;
		while (i<str.length) {
			let s = str.slice(i,size+i);
			i=i+size;
			arr.push(s);
		}
		return arr;
	}
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
