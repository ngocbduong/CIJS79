// Câu 1: False
// Câu 2: True
// Câu 3: True
// Câu 4: {foo: 1, bar: 2}
// Câu 5: 'The quick brown fox jumps over the lazy dog.’
// Câu 6: undefined
// Câu 7: [4, 5, 6, 1, 2, 3]
// Câu 8: undefined
// Câu 9: 3
// Câu 10: a = 3, b = 12
// Câu 11: Error 
// Câu 12: [2, 2, 6, 4, 10]
// Câu 13: 6

// Câu 1: Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array.

// const reverseString = (str) => {
// 	var newString = " ";
// 	for (var i = str.length - 1; i >= 0; i--) {
// 		newString += str[i];
// 	} 
// 	return newString;
// }

// console.log(reverseString('abcdef'));

// Câu 2: Viết một function xoá các phần từ trùng lặp trong một mảng các số:

// let num = [1, 2, 3, 5, 4, 2, 6, 4];
// let result = [];
// result = num.filter(function(element) {
// 	return result.includes(element) ? '' : result.push(element);
// });

// console.log(result);

// Câu 3: Viết một chương trình lấy phần tử xuất hiện nhiều nhất trong một mảng và số lần suất hiện của nó trong mảng:

// const arrayUnique = (array) => {
// 	array.sort();
// 	let max = [0,0];
// 	let count = 1;
// 	for (let i = array.length - 1; i>0; --i) {
// 		if (array[i] == array[i - 1]) {
// 			count++;
// 		} else {
// 			if (max[1] < count) {
// 				max[0] = array[i];
// 				max[1] = count;
// 			}
// 			count = 1;
// 		}
// 	}
// 	console.log(`{value: ${max[0]}, count: ${max[1]}}`);
// }

// let input = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];

// arrayUnique(input);