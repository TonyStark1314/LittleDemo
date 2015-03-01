function showPic(whichPic){
	if(!document.getElementById('placeholder')) return false;//若占位符图片节点不存在，则不继续执行以下代码

	//1.先获取目标图片的url地址的对象
	var source = whichPic.getAttribute('href');
	
	//2.获取占位符图片的对象
	var placeholder = document.getElementById('placeholder');

	if(placeholder.nodeName !='IMG') return false;//若占位符图片节点不是img标签，则不继续执行以下代码
	
	//3.刷新占位符图片的src属性值,利用setAttribute可以对任何元素的任何属性值进行修改，推荐使用！
	placeholder.setAttribute('src',source);

	/*
	//5.获取目标图片的title文本内容
	var text = whichPic.getAttribute('title');
	
	//6.获取占位符文本的对象
	var description = document.getElementById('description');
	alert(description.nodeValue);//nodeValue不包含文本节点，故这里返回null值
	alert(description.childNodes[0].nodeValue);//这里指向了文本节点，故能正常返回相应的文本值
	
	//7.刷新占位符文本的文本内容
	description.firstChild.nodeValue = text;
	*/

	//5.1.判断“description”节点是否存在，若是，则刷新其文本内容，若否，则忽略
	if(document.getElementById('description')){
		var text = whichPic.getAttribute('title')?whichPic.getAttribute('title'):'';//判断目标节点是否已设置了title属性值
		var description = document.getElementById('description');
		if(description.firstChild.nodeType==3){
			description.firstChild.nodeValue = text;
		}
	}

	return true;
}
function countBodyChildrens(){
	//4.获取body元素,由于一个html文件有且仅有一个body元素，故要加上index值
	var body_element = document.getElementsByTagName('body')[0];
	alert(body_element.childNodes.length);
}
// window.onload = countBodyChildrens;

function prepareGallery(){
	//8.检查浏览器是否能识别getElementsByTagName、getElementsById等选择器
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById('image-gallery')) return false;	

	//9.获取事件触发的节点的对象
	var gallery = document.getElementById('image-gallery');
	var links = gallery.getElementsByTagName('a');

	//10.为多个事件触发点绑定事件
	for(var i=0;i<links.length;i++){
		links[i].onclick = function(){
			/*showPic(this);
			return false;*/

			return showPic(this)?false:true;
		}
		// links[i].onkeypress = links[i].onclick;//不推荐使用onkeypress事件，因为目前浏览器已经支持用监听回车键来触发onclick事件了
	}
}

//该函数可以添加多个事件在初始化加载页面时调用
function addLoadEvent(func){
	//11.把现有的window.onload事件处理函数的值存入变量
	var oldonLoad = window.onload;

	if(typeof window.onload!='function'){//12.若该处理函数未绑定函数，则可将新函数直接加给它
		window.onload = func;
	}else{//13.若该处理函数已经绑定函数，则将新函数追加到现有指令的末尾
		window.onload = function(){
			oldonLoad();
			func();
		}
	}

}

