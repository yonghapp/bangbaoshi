var $one=document.getElementById("one");
	var $two=document.getElementById("two"); 
	var $three=document.getElementById("three"); 
	var onelist=["所有省份","河北省","甘肃省","河南省"];
	var twolist=[["所有城市"],
	["唐山","秦皇岛市","保定市"],
	["兰州","酒泉市","金昌市"],
	["郑州市","开封市","安阳市"]];
	var threelist=[
	[["请选择区/县"]],
	[["路南区","新区","开平区","玉田县"],["海港区","山海关","北戴河"],["新市区","唐县","高阳区"]],
	[["城关区","七里河区","安宁区","红古区"],["肃州区","玉门市","敦煌市","瓜州市"],["金川区","水昌线"]],
	[["中原区","二七区","金水区","新密区"],["龙亭区","金明区","兰考县"],["北关区","安阳县","龙安区","林州市"]]
	]

	
	 
	 function optionStr(_arr){
	 	var str="";
	 	for(var i=0;i<_arr.length;i++){
	 		str=str+"<option value='"+i+"'>"+_arr[i]+"</option>";
	 		// <option value='0'>所有省份</option>
	 	}
	 	return str;
	 }
	 $one.innerHTML=optionStr(onelist);
	 $one.onchange=function(){
	 	console.log(this.value);

			$two.innerHTML=optionStr(twolist[this.value]);
		 	$three.innerHTML=optionStr(threelist[this.value][0])
	 	
	 	
	 }
	 $two.onchange=function(){
	 	$three.innerHTML=optionStr(threelist[$one.value][this.value])
	 }