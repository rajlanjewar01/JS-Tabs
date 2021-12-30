var tab = document.getElementById('tabs_link');
tab.addEventListener('click',function(e){
	var id = e.target.id;
	
	var ele = document.querySelectorAll('.tab_box');
	var len = ele.length;
	for(let i = 0; i<len; i++){
		ele[i].classList.add('hide');
	}
	document.querySelector('#box_' + id).classList.remove('hide');
	
	
	var tab_ele = document.querySelectorAll('.tab');
	var tab_len = tab_ele.length;
	for(let j=0; j<tab_len; j++){
		tab_ele[j].classList.add('not_active');
	}
	document.querySelector('#'+id).classList.remove('not_active');
});