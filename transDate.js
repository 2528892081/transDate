//Date格式转换
// function transDate(){
// 	function timeTransDate(time){
// 		let date = new Date();
// 		date.setTime(time);
// 		return date;
// 	};
// 	function dateTransDate_(date){
// 		let _year = date.getFullYear();
// 		let _month = date.getMonth() + 1;
// 		let _date = date.getDate();
// 		return _year + '-' + _month +'' + _date;
// 	}
// }
// let d= new Date();
// var transD = new transDate();
// console.log(transD.dateTransDate_(d))
class transDate{
	timeTransDate(time){
			let date = new Date();
			date.setTime(time);
			return date;
		};
	dateTransDate_(date){
		let _year = date.getFullYear();
		let _month = date.getMonth() + 1;
		let _date = date.getDate();
		return _year + '-' + _month + '-' + _date;
		}
}
let d = new Date();
var tD = new transDate();
console.log(tD.dateTransDate_(d))