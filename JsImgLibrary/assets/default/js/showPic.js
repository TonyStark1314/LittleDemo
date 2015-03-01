function showPic(whichPic){
	//1.先获取目标图片的url地址的对象
	var source = whichPic.getAttribute('href');
	
	//2.获取占位符图片的对象
	var placeholder = document.getElementById('placeholder');
	
	//3.刷新占位符图片的src属性值,利用setAttribute可以对任何元素的任何属性值进行修改，推荐使用！
	placeholder.setAttribute('src',source);

	//5.获取目标图片的title文本内容
	var text = whichPic.getAttribute('title');
	
	//6.获取占位符文本的对象
	var description = document.getElementById('description');
	// alert(description.nodeValue);//nodeValue不包含文本节点，故这里返回null值
	// alert(description.childNodes[0].nodeValue);//这里指向了文本节点，故能正常返回相应的文本值
	
	//7.刷新占位符文本的文本内容
	description.firstChild.nodeValue = text;

}
function countBodyChildrens(){
	//4.获取body元素,由于一个html文件有且仅有一个body元素，故要加上index值
	var body_element = document.getElementsByTagName('body')[0];
	alert(body_element.childNodes.length);
}
// window.onload = countBodyChildrens;