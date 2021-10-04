$( document ).ready(function() {
	
	var heightarr = new Array();
	var constitutionarr = new Array();
	var eyesarr = new Array();
	var hairarr = new Array();
	var hairlarr = new Array();
	var haircolarr = new Array();
	var haircutarr = new Array();
	var typearr = new Array();
	var langarr = new Array();
	var vocalarr = new Array();
	var instrarr = new Array();
	var photosarr = new Array()
	
	$('.sunday-tab .object-cover').each(function(){
		var height = $(this).attr('data-height');
		var constitution = $(this).attr('data-constitution');
		var eyes = $(this).attr('data-eyes');
		var hair = $(this).attr('data-hair');
		var hairl = $(this).attr('data-hairlength');
		var haircol = $(this).attr('data-colorready');
		var haircut = $(this).attr('data-cutready');
		var type = $(this).attr('data-type');
		var lang = $(this).attr('data-languages');
		var vocal = $(this).attr('data-vocal');
		var instr = $(this).attr('data-instruments');



		//$(this).attr('data-allphotoarr', photosarr);
	//	console.log(photosarr);
		
		//$.each(photosarr, function(key, value) {   
	//		$('#constitution select').append($("<option></option>").attr("value", key+1).text(value)); 
//		});	
		
		heightarr.push(height);
		constitutionarr.push(constitution);
		eyesarr.push(eyes);
		hairarr.push(hair);
		hairlarr.push(hairl);
		haircolarr.push(haircol);
		haircutarr.push(haircut);
		typearr.push(type);
		if ((lang!='') && (lang!='-')){
			langarr.push(lang);	
		}
		if (vocal!=''){
			vocalarr.push(vocal);
		}
		if (instr!=''){
			instrarr.push(instr);			
		}
		
		
		
		
	});
	
	var uniqueconst = constitutionarr.filter(function(itm, i, constitutionarr) {
		return i == constitutionarr.indexOf(itm);
	});
	var uniqueeyes = eyesarr.filter(function(itm, i, eyesarr) {
		return i == eyesarr.indexOf(itm);
	});
	var uniquehair = hairarr.filter(function(itm, i, hairarr) {
		return i == hairarr.indexOf(itm);
	});
	var uniquehairl = hairlarr.filter(function(itm, i, hairlarr) {
		return i == hairlarr.indexOf(itm);
	});	
	var uniquecolhair = haircolarr.filter(function(itm, i, haircolarr) {
		return i == haircolarr.indexOf(itm);
	});
	var uniquecuthair = haircutarr.filter(function(itm, i, haircutarr) {
		return i == haircutarr.indexOf(itm);
	});
	var uniquetype = typearr.filter(function(itm, i, typearr) {
		return i == typearr.indexOf(itm);
	});
	var uniquelang = langarr.filter(function(itm, i, langarr) {
		return i == langarr.indexOf(itm);
	});
	var uniquevocal = vocalarr.filter(function(itm, i, vocalarr) {
		return i == vocalarr.indexOf(itm);
	});	
	var uniqueinstr = instrarr.filter(function(itm, i, instrarr) {
		return i == instrarr.indexOf(itm);
	});
	uniqueconst.sort();
	uniqueeyes.sort();
	uniquehair.sort();
	uniquehairl.sort();
	uniquecolhair.sort();
	uniquecuthair.sort();
	uniquetype.sort();
	uniquelang.sort();
	uniquevocal.sort();
	uniqueinstr.sort();
	$('.filters select').each(function(){
		$(this).prepend("<option value='0'>-</option>");
	});
	$.each(uniqueconst, function(key, value) {   
		$('#constitution').append($("<label><input type='checkbox' value='"+value+"' data-id='constitution"+key+"' />"+value+"</label>").attr("value", key+1)); 
	});	
	$.each(uniqueeyes, function(key, value) {   
		$('#eyes').append($("<label><input type='checkbox' value='"+value+"' data-id='eyes"+key+"' />"+value+"</label>").attr("value", key+1)); 
	});	
	$.each(uniquehair, function(key, value) {   
		$('#hair select').append($("<option></option>").attr("value", key+1).text(value)); 
	});	
	$.each(uniquehairl, function(key, value) {   
		$('#hairlength select').append($("<option></option>").attr("value", key+1).text(value)); 
	});	
	$.each(uniquecolhair, function(key, value) {   
		$('#colorready select').append($("<option></option>").attr("value", key+1).text(value)); 
	});	
	$.each(uniquecuthair, function(key, value) {   
		$('#cutready select').append($("<option></option>").attr("value", key+1).text(value)); 
	});	
	$.each(uniquetype, function(key, value) {   
		$('#type select').append($("<option></option>").attr("value", key+1).text(value)); 
	});	
	$.each(uniquelang, function(key, value) {   
		$('#languages select').append($("<option></option>").attr("value", key+1).text(value)); 
	});	
	$.each(uniquevocal, function(key, value) {   
		$('#vocal select').append($("<option></option>").attr("value", key+1).text(value)); 
	});	
	$.each(uniqueinstr, function(key, value) {   
		$('#instruments select').append($("<option></option>").attr("value", key+1).text(value)); 
	});	

	var filterarr = {};
	
	
	var checkarr = new Array();
	$('.filtercheckbox input').change(function(){
		var constval = $(this).val();

		var keyid = $(this).attr('data-id')


		if ($(this).is(':checked')) {
			
			//checkarr.push({keyid, attname, constval});
			filterarr[keyid] = constval;		
			$('.sunday-tab .object-cover').parent().css('display', 'none');
			
//			$('.sunday-tab .object-cover').each(function(){
//				if (($(this).attr('data-constitution')=='Полное')&&($(this).attr('data-eyes')=='Зеленые')||($(this).attr('data-constitution')=='Худощавое')&&($(this).attr('data-eyes')=='Зеленые')) {
//					$(this).parent().css('display', 'inline-block');
//				}
//			});
			
			$.each( filterarr, function( key, value ) {
				var fixedatt = key.slice(0,-1);
				console.log(fixedatt);
				$('.sunday-tab .object-cover').each(function(){
					if ($(this).attr('data-'+fixedatt)==value) {
						$(this).parent().show();
					} else {
						
					}
				});
			});
			
		} else {
			
			delete filterarr[keyid];
			
			$('.sunday-tab .object-cover').parent().css('display', 'none');

			$.each( filterarr, function( key, value ) {
				var fixedatt = key.slice(0,-1);
				$('.sunday-tab .object-cover').each(function(){
					if ($(this).attr('data-'+fixedatt)==value) {
						$(this).parent().show();
					} else {
						
					}
				});					
			});
		}
		
		console.log(filterarr);	


	});	


	
	$('.filters select').change(function(){
		var constval = $(this).find('option:selected').text();
		var attname = $(this).parent().attr('id');
		
		$('.sunday-tab .object-cover').parent().css('display', 'inline-block');
		if (constval=='-') {
			var key = attname;
			delete filterarr[key];
			$.each( filterarr, function( key, value ) {
				$('.sunday-tab .object-cover').each(function(){
					if ($(this).attr('data-'+key)==value) {
						//
					} else {
						$(this).parent().hide();
					}
				});
			});
			
		} else {
			filterarr[attname] = constval;	
			$.each( filterarr, function( key, value ) {
				$('.sunday-tab .object-cover').each(function(){
					if ($(this).attr('data-'+key)==value) {
						//
					} else {
						$(this).parent().hide();
					}
				});
			});

		}
		console.log(filterarr);
	});
	$('.filterhide').hide();
	$('.filtershow').click(function(e){
		e.preventDefault();
		$('.filterhide').show();
		$('.filters').show();
		$('.add_filter_but').show();
		$(this).hide();
	})
	$('.filterhide').click(function(e){
		e.preventDefault();
		$('.filtershow').show();
		$('.filters').hide();
		$('.add_filter_but').hide();
		$('.add_filters').hide();
		$(this).hide();
	})
	$('.add_filter_but').click(function(e){
		e.preventDefault();
		$(this).hide();
		$('.add_filter_but_act').show();
		$('.add_filters').show();
		$(this).addClass('active');
	})
	$('.add_filter_but_act').click(function(e){
		e.preventDefault();
		$(this).hide();
		$('.add_filter_but').show();
		$('.add_filters').hide();
		$(this).removeClass('active');
	})

	
//	$('#boys h1').click(function(){
//	  	$(this).addClass('act');
//		$('#boys h1').not(this).removeClass('act');
//	  })
	
	var maxh = Math.max.apply(Math,heightarr);
	var minh = Math.min.apply(Math,heightarr);
	$('#resetfilters').click(function(){
		$('.sunday-tab .object-cover').parent().css('display', 'inline-block')
		$('.sunday-tab .object-cover').parent().removeClass('hiddena');
		$('.sunday-tab .object-cover').parent().removeClass('hiddenh');
		$('.filters select').val(0);
		$('#ageinputmmin').val(mina)
		$('#ageinputmax').val(maxa)
		$('#heightinputmin').val(minh)
		$('#heightinputmax').val(maxh)
	});	
	$('.agefilt input').change(function(){
		var minval=parseInt($('#ageinputmin').val());
		var maxval=parseInt($('#ageinputmax').val());
		if ($('#ageinputmin').val()<mina) {
			$('#ageinputmin').val(mina);
		} else if ($('#ageinputmax').val()>maxa) {
			$('#ageinputmax').val(maxa);			
		} else if ($('#ageinputmin').val()=='') {
			$('#ageinputmin').val(mina);
		} else if ($('#ageinputmax').val()=='') { 
			$('#ageinputmax').val(maxa);	
		} else {
			$('.sunday-tab .object-cover').each(function(){
				if ($(this).attr('data-age')>=minval && $(this).attr('data-age')<=maxval) {
					if ($(this).parent().hasClass('hiddenh')) {
							//
						} else {
							$(this).parent().removeClass('hiddena');
						}
					} else {
						if ($(this).parent().hasClass('hiddenh')) {
							//
						} else {
							$(this).parent().addClass('hiddena');
						}
					}
			});
        };		
			

	})
	$('#heightinputmin').val(minh);
	$('#heightinputmax').val(maxh);
	
	var agearr = new Array();
	$('.sunday-tab .object-cover').each(function(){
		var age = $(this).attr('data-age');
		agearr.push(age);  
	});
	var maxa = Math.max.apply(Math,agearr);
	var mina = Math.min.apply(Math,agearr);
	$('#ageinputmin').val(mina);
	$('#ageinputmax').val(maxa);
	$('.heightfilt input').change(function(){
		var minval=parseInt($('#heightinputmin').val());
		var maxval=parseInt($('#heightinputmax').val());
		if ($('#heightinputmin').val()<minh) {
			$('#heightinputmin').val(minh);
		} else if ($('#heightinputmax').val()>maxh) {
			$('#heightinputmax').val(maxh);			
		} else if ($('#heightinputmin').val()=='') {
			$('#heightinputmin').val(minh);
		} else if ($('#heightinputmax').val()=='') { 
			$('#heightinputmax').val(maxh);		
		} else {
		
			$('.sunday-tab .object-cover').each(function(){
				if ($(this).attr('data-height')>=minval && $(this).attr('data-height')<=maxval) {
						if ($(this).parent().hasClass('hiddena')) {
							//
						} else {
							$(this).parent().removeClass('hiddenh');
						}
					} else {
						if ($(this).parent().hasClass('hiddena')) {
							//
						} else {
							$(this).parent().addClass('hiddenh');
						}

					}
				});
			
		}

			
	})
	
	$('.kidcard').click(function(){
		setTimeout(function(){
			var parray= new Array();
			var parrraw = $('.cupertino-pane-wrapper.rendered').find('.photo_arr').text()
			parray = parrraw.split(",");
			//console.log(parray);
			$.each(parray, function(key, value) {
				fexedremsp = value.replace(/\s/g,'')
				fexedremsp = fexedremsp.replace(' ','')
				fixedsrc = fexedremsp.replace('open','thumbnail')+'&sz=w800';
				console.log(fixedsrc);
				$('.cupertino-pane-wrapper.rendered .slideholder .sw-slides').append($("<li class='sw-slide slide-"+key+"'><img class='w-56 h-full mx-auto object-top object-cover max-w-lg' src='"+fixedsrc+"' /><a class='picdown' target='_blank' href='"+fixedsrc+"' download='photo'></a></li>")); 

			});	

		},10)
		setTimeout(function(){
			$('.cupertino-pane-wrapper.rendered .slideholder').swipeslider({autoPlay: false, swipe: true, prevNextButtons:true, autoPlayTimeout:5000, sliderHeight: '60%' });
		},20)
	})
	$('.kidcard').each(function(){
		if ($(this).attr('src')=='&sz=w800') {
			$(this).parent().hide();
		}
	})
})

