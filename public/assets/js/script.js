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
		//hairlarr.push(hairl);
		if (hairl!=''){
			hairlarr.push(hairl);	
		}
		
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
		//$('#constitution select').append($("<option></option>").attr("value", key+1).text(value)); 
		$('#constitution').append('<label><input type="checkbox" value="'+value+'">'+value+'</label>')
	});	
	$.each(uniqueeyes, function(key, value) {   
		//$('#eyes select').append($("<option></option>").attr("value", key+1).text(value)); 
		$('#eyes').append('<label><input type="checkbox" value="'+value+'">'+value+'</label>')		
	});	
	$.each(uniquehair, function(key, value) {   
		//$('#hair select').append($("<option></option>").attr("value", key+1).text(value)); 
		$('#hair').append('<label><input type="checkbox" value="'+value+'">'+value+'</label>')
	});	
	$.each(uniquehairl, function(key, value) {   
		//$('#hairlength select').append($("<option></option>").attr("value", key+1).text(value)); 
		$('#hairlength').append('<label><input type="checkbox" value="'+value+'">'+value+'</label>')
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
		//$('#languages').append('<label><input type="checkbox" value="'+value+'">'+value+'</label>')		
	});	
	//$.each(uniquevocal, function(key, value) {   
		//$('#vocal select').append($("<option></option>").attr("value", key+1).text(value)); 
		//$('#vocal').append('<label><input type="checkbox" value="'+value+'">'+value+'</label>')
	//});	
	$.each(uniqueinstr, function(key, value) {   
		$('#instruments select').append($("<option></option>").attr("value", key+1).text(value)); 
		//$('#instruments').append('<label><input type="checkbox" value="'+value+'">'+value+'</label>')		
	});	

	var checkconstarr = [];
	var checkeyestarr = [];
	var checkhairarr = [];
	var checkhairltarr = [];
	var langarr = [];
	var vocarr = [];
	var instrarr = [];	
	var allcheckarr = [];
	var f1 = 'constitution';
	var f2 = 'eyes';
	var f3 = 'hair';
	var f4 = 'hairlength';
	var f5 = 'languages';
	var f6 = 'vocal';
	var f7 = 'instruments';
	var conval ='';
	var emptyArray = [];
	$('.filtercheckbox input').change(function(){
		if ($(this).is(':checked')) {
			if ($(this).parent().parent().attr('id')=='constitution') {
				conval = $(this).val();
				checkconstarr.push(conval);
				allcheckarr['constitution'] = checkconstarr;
			} else if ($(this).parent().parent().attr('id')=='eyes') {
				conval = $(this).val();
				checkeyestarr.push(conval);
				allcheckarr['eyes'] = checkeyestarr;
			} else if ($(this).parent().parent().attr('id')=='hair') {
				conval = $(this).val();
				checkhairarr.push(conval);
				allcheckarr['hair'] = checkhairarr;
			} else if ($(this).parent().parent().attr('id')=='hairlength') {
				conval = $(this).val();
				checkhairltarr.push(conval);
				allcheckarr['hairlength'] = checkhairltarr;
			} else if ($(this).parent().parent().attr('id')=='languages') {
				conval = $(this).val();
				langarr.push(conval);
				allcheckarr['languages'] = langarr;
			} else if ($(this).parent().parent().attr('id')=='vocal') {
				conval = $(this).val();
				vocarr.push(conval);
				allcheckarr['vocal'] = vocarr;
			} else if ($(this).parent().parent().attr('id')=='instruments') {
				conval = $(this).val();
				instrarr.push(conval);
				allcheckarr['instruments'] = instrarr;
			}
		} else {
			if ($(this).parent().parent().attr('id')=='constitution') {
				conval = $(this).val();
				checkconstarr.splice($.inArray(conval,checkconstarr),1);
				if (checkconstarr=='') {
					delete allcheckarr['constitution'];
				} else {
					allcheckarr['constitution'] = checkconstarr;
				}
			} else if ($(this).parent().parent().attr('id')=='eyes') {
				conval = $(this).val();
				checkeyestarr.splice($.inArray(conval,checkeyestarr),1)
				if (checkeyestarr=='') {
					delete allcheckarr['eyes'];
				} else {
					allcheckarr['eyes'] = checkeyestarr;
				}
			} else if ($(this).parent().parent().attr('id')=='hair') {
				conval = $(this).val();
				checkhairarr.splice($.inArray(conval,checkhairarr),1)
				if (checkhairarr=='') {
					delete allcheckarr['hair'];
				} else {
					allcheckarr['hair'] = checkhairarr;
				}
			} else if ($(this).parent().parent().attr('id')=='hairlength') {
				conval = $(this).val();
				checkhairltarr.splice($.inArray(conval,checkhairltarr),1)
				if (checkhairltarr=='') {
					delete allcheckarr['hairlength'];
				} else {
					allcheckarr['hairlength'] = checkhairltarr;
				}
			} else if ($(this).parent().parent().attr('id')=='languages') {
				conval = $(this).val();
				langarr.splice($.inArray(conval,langarr),1)
				if (langarr=='') {
					delete allcheckarr['languages'];
				} else {
					allcheckarr['languages'] = langarr;
				}
			} else if ($(this).parent().parent().attr('id')=='vocal') {
				conval = $(this).val();
				vocarr.splice($.inArray(conval,vocarr),1)
				if (vocarr=='') {
					delete allcheckarr['vocal'];
				} else {
					allcheckarr['vocal'] = vocarr;
				}
			} else if ($(this).parent().parent().attr('id')=='instruments') {
				conval = $(this).val();
				instrarr.splice($.inArray(conval,instrarr),1)
				if (vocarr=='') {
					delete allcheckarr['instruments'];
				} else {
					allcheckarr['instruments'] = instrarr;
				}
			}
		}
	
	
		$('.sunday-tab .object-cover').parent().parent().show();
		

		if (f1 in allcheckarr) {
			$('.sunday-tab .object-cover').each(function(){
				if ($(this).attr('data-constitution')==allcheckarr['constitution'][0]||$(this).attr('data-constitution')==allcheckarr['constitution'][1]||$(this).attr('data-constitution')==allcheckarr['constitution'][2]||$(this).attr('data-constitution')==allcheckarr['constitution'][3]) {
					//
				} else {
					$(this).parent().parent().hide();
				}
			});
		} 
		if (f2 in allcheckarr) {
			$('.sunday-tab .object-cover').each(function(){
				if ($(this).attr('data-eyes')==allcheckarr['eyes'][0]||$(this).attr('data-eyes')==allcheckarr['eyes'][1]||$(this).attr('data-eyes')==allcheckarr['eyes'][2]||$(this).attr('data-eyes')==allcheckarr['eyes'][3]) {
					//
				} else {
					$(this).parent().parent().hide();
				}
			});
		} 		
		if (f3 in allcheckarr) {
			$('.sunday-tab .object-cover').each(function(){
				if ($(this).attr('data-hair')==allcheckarr['hair'][0]||$(this).attr('data-hair')==allcheckarr['hair'][1]||$(this).attr('data-hair')==allcheckarr['hair'][2]||$(this).attr('data-hair')==allcheckarr['hair'][3]||$(this).attr('data-hair')==allcheckarr['hair'][4]||$(this).attr('data-hair')==allcheckarr['hair'][5]||$(this).attr('data-hair')==allcheckarr['hair'][6]||$(this).attr('data-hair')==allcheckarr['hair'][7]||$(this).attr('data-hair')==allcheckarr['hair'][8]||$(this).attr('data-hair')==allcheckarr['hair'][9]) {
					//
				} else {
					$(this).parent().parent().hide();
				}
			});
		} 		
		if (f4 in allcheckarr) {
			$('.sunday-tab .object-cover').each(function(){
				if ($(this).attr('data-hairlength')==allcheckarr['hairlength'][0]||$(this).attr('data-hairlength')==allcheckarr['hairlength'][1]||$(this).attr('data-hairlength')==allcheckarr['hairlength'][2]||$(this).attr('data-hairlength')==allcheckarr['hairlength'][3]) {
					//
				} else {
					$(this).parent().parent().hide();
				}
			});
		} 		
		if (f5 in allcheckarr) {
			$('.sunday-tab .object-cover').each(function(){
				if ($(this).attr('data-languages').indexOf(allcheckarr['languages'][0]) >= 0||$(this).attr('data-languages').indexOf(allcheckarr['languages'][1]) >= 0||$(this).attr('data-languages').indexOf(allcheckarr['languages'][2]) >= 0||$(this).attr('data-languages').indexOf(allcheckarr['languages'][3]) >= 0||$(this).attr('data-languages').indexOf(allcheckarr['languages'][4]) >= 0||$(this).attr('data-languages').indexOf(allcheckarr['languages'][5]) >= 0||$(this).attr('data-languages').indexOf(allcheckarr['languages'][6]) >= 0||$(this).attr('data-languages').indexOf(allcheckarr['languages'][7]) >= 0) {
					//
				} else {
					$(this).parent().parent().hide();
				}
			});
		} 		
		if (f6 in allcheckarr) {
			$('.sunday-tab .object-cover').each(function(){
				if ($(this).attr('data-vocal').indexOf(allcheckarr['vocal'][0]) >= 0||$(this).attr('data-vocal').indexOf(allcheckarr['vocal'][1]) >= 0||$(this).attr('data-vocal').indexOf(allcheckarr['vocal'][2]) >= 0||$(this).attr('data-vocal').indexOf(allcheckarr['vocal'][3]) >= 0) {
					//
				} else {
					$(this).parent().parent().hide();
				}
			});
		} 		
		if (f7 in allcheckarr) {
			$('.sunday-tab .object-cover').each(function(){
				if ($(this).attr('data-instruments').indexOf(allcheckarr['instruments'][0]) >= 0||$(this).attr('data-instruments').indexOf(allcheckarr['instruments'][1]) >= 0||$(this).attr('data-instruments').indexOf(allcheckarr['instruments'][2]) >= 0||$(this).attr('data-instruments').indexOf(allcheckarr['instruments'][3]) >= 0||$(this).attr('data-instruments').indexOf(allcheckarr['instruments'][4]) >= 0) {
					//
				} else {
					$(this).parent().parent().hide();
				}
			});
		} 		


	});
		

	
	var filterarr = {};
	$('.filters select').change(function(){
		var constval = $(this).find('option:selected').text();
		var attname = $(this).parent().attr('id');
		
		$('.sunday-tab .object-cover').parent().parent().show();
		if (constval=='-') {
			var key = attname;
			delete filterarr[key];
			$.each( filterarr, function( key, value ) {
				$('.sunday-tab .object-cover').each(function(){
					if ($(this).attr('data-'+key)==value) {
						//
					} else {
						$(this).parent().parent().hide();
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
						$(this).parent().parent().hide();
					}
				});
			});

		}
		//console.log(filterarr);
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
		$('.add_filter_but_act').hide();
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
		$('.sunday-tab .object-cover').parent().parent().show();
		$('.sunday-tab .object-cover').parent().parent().removeClass('hiddena');
		$('.sunday-tab .object-cover').parent().parent().removeClass('hiddenh');
		$('.filters select').val(0);
		$('#ageinputmin').val(mina);
		$('#ageinputmax').val(maxa);
		$('#heightinputmin').val(minh);
		$('#heightinputmax').val(maxh);
		$('#searchform').val('');
		$('.filtercheckbox input').prop( "checked", false );
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
					if ($(this).parent().parent().hasClass('hiddenh')) {
							//
						} else {
							$(this).parent().parent().removeClass('hiddena');
						}
					} else {
						if ($(this).parent().parent().hasClass('hiddenh')) {
							//
						} else {
							$(this).parent().parent().addClass('hiddena');
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
						if ($(this).parent().parent().hasClass('hiddena')) {
							//
						} else {
							$(this).parent().parent().removeClass('hiddenh');
						}
					} else {
						if ($(this).parent().parent().hasClass('hiddena')) {
							//
						} else {
							$(this).parent().parent().addClass('hiddenh');
						}

					}
				});
			
		}

			
	})
	$('.agesection .kidcard').click(function(e){
		
		var kidname = $(this).parent().find('.fullname').text();
		
		window.triggerChange = function triggerChange(nextValue) {
		  const element = document.querySelector('.cupertino-pane-wrapper.rendered .storenames')
		  const event = new Event('input', { bubbles: true })
		  const previousValue = element.value

		  element.value = kidname
		  element._valueTracker.setValue(' ')
		  element.dispatchEvent(event)
		}

		e.preventDefault();

		setTimeout(function(){
			var parray= new Array();
			var parrraw = $('.cupertino-pane-wrapper.rendered').find('.photo_arr').text()
			parray = parrraw.split(",");
			$.each(parray, function(key, value) {
				var fexedremsp = value.replace(/\s/g,'')
				    fexedremsp = fexedremsp.replace(' ','')
				var fixedsrc = fexedremsp.replace('open','thumbnail')+'&sz=w800';
				$('.cupertino-pane-wrapper.rendered .slideholder .sw-slides').append($("<li class='sw-slide slide-"+key+"'><img class='w-56 h-full mx-auto object-top object-cover max-w-lg' src='"+fixedsrc+"' /><a class='picdown' target='_blank' href='"+fixedsrc+"' download='photo'></a></li>")); 

			});
			$('.cupertino-pane-wrapper.rendered .storenames').val(kidname);
			triggerChange();

		},10)
		setTimeout(function(){
			$('.cupertino-pane-wrapper.rendered .slideholder').swipeslider({autoPlay: false, swipe: true, prevNextButtons:true, autoPlayTimeout:5000, sliderHeight: '60%' });
		},20)
	})
	$('.kidcard').each(function(){
		if ($(this).attr('src')=='&sz=w800') {
			$(this).parent().parent().remove();
		}
	})
	const mouseClickEvents = ['click'];	
	function simulateMouseClick(element){
	  mouseClickEvents.forEach(mouseEventType =>
		element.dispatchEvent(
		  new MouseEvent(mouseEventType, {
			  view: window,
			  bubbles: true,
			  cancelable: true,
			  buttons: 1
		  })
		)
	  );
	}
	var allkids ='';
	
	$('.mark').click(function(e){
		e.preventDefault();
		var kidname = $(this).parent().text();
		var kidage = $(this).parent().parent().find('img').attr('data-age');
		var kidheight = $(this).parent().parent().find('img').attr('data-height');
		var imgsrc = $(this).parent().parent().find('img').attr('src');
		var imgsrccorr = imgsrc.replace('https://drive.google.com/thumbnail?id=','https://lh3.googleusercontent.com/d/');
		imgsrccorr = imgsrccorr.replace('&sz=w800','')
		var kidlinks = $(this).parent().parent().find('img').attr('data-links');
		var linkarr = new Array();
		var linkarr =  kidlinks.split(",");
		
		//console.log(linkarr);
		
		
		window.triggerChange = function triggerChange(nextValue) {
		  const element = document.querySelector('.favorities .storenames')
		  const event = new Event('input', { bubbles: true })
		  const previousValue = element.value

		  element.value = allkids
		  element._valueTracker.setValue(' ')
		  element.dispatchEvent(event)
		}		 
		if ($(this).hasClass('active')) {
			allkids = allkids.replace(kidname + '<br/>','');
			allkids = allkids.replace(kidname,'');
			//console.log(allkids);
			$('.favorities .storenames').val(allkids);
			triggerChange();
			$(this).removeClass('active');
			var prop = $(this).parent().parent().find('.kidcard').attr('src');
			$('.favorities .forcopy img').each(function(){
				if ($(this).attr('src')==prop) {
					$(this).parent().parent().remove();
				}
			})
			$('#pdfexport .kidexp').each(function(){
				if ($(this).attr('data-name')==kidname) {
					$(this).remove();
				}
			});
		} else {
			allkids = allkids + kidname+ '<br/>';
			//console.log(allkids);
			$('.favorities .storenames').val(allkids);
			triggerChange();
			$(this).addClass('active');			
			var cloned = $(this).parent().parent().parent().clone();
			$('.cupertino-pane-new .picholder').append(cloned);
			
			
			var vidstring = '';
			$.each(linkarr, function(key, value) {
				var vidlink = value.replace(' ','');
				var vidlink1 = vidlink.replace('https://','');
				vidstring += '<p><a style="font-size:12px; color:#00F !important; font-family:arial  !important;" href="'+vidlink+'">'+vidlink+'</a></p>';
			});
			//console.log(vidstring);
			var kidcount = $('.kidexp').length;
			if ((kidcount == 0)||(kidcount == 4)||(kidcount == 8)||(kidcount == 12)||(kidcount == 16)||(kidcount == 20)||(kidcount == 24)||(kidcount == 28)||(kidcount == 32)||(kidcount == 36)||(kidcount == 40)) {
			$('#pdfexport').append('<header><p><img style="position:relative; left:-20px" width="215" height="99" src="/assets/detikino_logo_word_white.png" /><div style="color:#000 !important; font-family:arial  !important; position:absolute; left: 330px; width:220px; top:20px; font-size:12px; line-height:14px;">Агенты<br/>Валентина Никитина <span style="float:right;color:#000 !important;font-family:arial  !important;">+7 909 690 44 33</span><br/> </div></p></header>')
				
			}
			$('#pdfexport').append('<div style="width:100%" class="kidexp" data-name="'+kidname+'" ><div style="width:105px; height:162px; display:inline-block; margin-right:20px; position:relative; overflow:hidden; font-size:14px;"><img style="margin-right:20px;margin-bottom:10px;display:inline-block;width: auto;position: absolute;height: 100%;max-width: none;left: 50%; top:50%; transform: translate(-50%, -50%);"  src="'+imgsrccorr+'" /></div><div class="addinfo" style="display:inline-block; position:absolute"><p style="color:#000 !important; font-family:arial !important;  font-size:14px;">'+kidname+'</p><p style="color:#000 !important; font-family:arial !important;  font-size:14px;">Возраст: '+kidage+' лет</p><p style="color:#000 !important; font-family:arial !important;  font-size:14px; margin-bottom:10px;">Рост: '+kidheight+' см</p>'+vidstring+'</div></div>')
		}
		
		if ($('.agesection .mark.active').length>0) {
			$('.selected').show();
		} else {
			$('.selected').hide();
		}
		
		$('.favorities .mark').bind('click',function(e){
			e.preventDefault();
			var kidname = $(this).parent().text(); 
			var prop = $(this).parent().parent().parent().find('.kidcard').attr('src');
			$('.forcopy img').each(function(){
					if ($(this).attr('src')==prop) {
						$(this).parent().find('.mark').removeClass('active');
					}
				})
			$(this).parent().parent().parent().remove();
			$('#pdfexport .kidexp').each(function(){
				if ($(this).attr('data-name')==kidname) {
					$(this).remove();
				}
			});			
			if ($('.agesection .mark.active').length>0) {
				$('.selected').show();
			} else {
				$('.selected').hide();
				$('.cuperwidth .destroy-button').trigger('click');
			}
				
		});
		
	})
    $('body').on('click','.favorities .kidcard',function(){
        var prop = $(this).attr('src');
        var element = document.querySelector('.agesection .kidcard[src="'+prop+'"]');
        simulateMouseClick(element);
    })		

	$('.selected').click(function(){
		var myPane = new CupertinoPane('.cupertino-pane-new',{
			parentElement: "body",
			breaks: {
					top: {
					enabled: true, // Enable or disable breakpoint
					height: 550, // Pane breakpoint height
					bounce: true // Bounce pane on transition
				}			
			},
			initialBreak: 'top',
			bottomClose: true,
			fastSwipeClose: true,
			simulateTouch: false,
			cssClass: 'cuperwidth'

		});
		myPane.present({animate: true})
	});
	
	$('body').on('click','.exptoggle',function(){

		if ($(this).hasClass('act')) {
			$(this).removeClass('act');
			$('.experience').hide();
		} else {
			$(this).addClass('act');
			$('.experience').show();
		}
	})
	$('body').on('click','.addtoggle',function(){

		if ($(this).hasClass('act')) {
			$(this).removeClass('act');
			$('.additional').hide();
		} else {
			$(this).addClass('act');
			$('.additional').show();
		}
	})
	$('#searchform').keyup(function(){
		var fval = $(this).val();
		$('.agesection .fullname').each(function(){
			var fname = $(this).text();
			if (fname.toLowerCase().indexOf(fval.toLowerCase()) >= 0) {
				$(this).parent().parent().show()
			} else {
				$(this).parent().parent().hide();
			}
		})
	})
	
	window.jsPDF = window.jspdf.jsPDF

	var doc = new jsPDF('p', 'pt', 'letter');

	$('.genpdf').click(function () {
		var header0 = 'Агенты';
		var header1 = 'Валентина Никитина +7 909 690 44 33';
		var header2 = 'Вероника Мовсесян   +7 910 243 05 17';

		var agearrprint = new Array();
		$('.favorities img').each(function(){
			var ageprint = $(this).attr('data-age');
			agearrprint.push(ageprint);  
		});
		var agemin = Math.min.apply(Math,agearrprint);
		var agemax = Math.max.apply(Math,agearrprint);
	
		//var agemin = $('#ageinputmin').val();
		//var agemax = $('#ageinputmax').val();
		var namegender = '';
		if (($('.favorities img[data-gender="Девочки"]').length > 0)&&($('.favorities img[data-gender="Мальчики"]').length == 0)) {
			namegender = 'girls';	
		} else if (($('.favorities img[data-gender="Мальчики"]').length >0)&&($('.favorities img[data-gender="Девочки"]').length == 0)) {
			namegender = 'boys';
		} else if (($('.favorities img[data-gender="Мальчики"]').length >0)&&($('.favorities img[data-gender="Девочки"]').length > 0)) {
			namegender = 'boys_girls'	
		}
		var filename = 'detikino_'+agemin+'_'+agemax+'_'+namegender+'.pdf'; 
		
		console.log(namegender);

		var img = new Image();
		var totalPages = doc.internal.getNumberOfPages();
		img.src = '/assets/detikino_logo_word_white.png'
		//console.log(img);
		doc.addFont("/assets/fonts/arial.ttf", "arial", "normal");
        doc.setFont("arial");
        doc.setFontSize(12);
        //doc.addImage(img, 'PNG', 0, 0, 210, 97);
        //doc.text(header0, 240, 15, { baseline: 'top' });
        //doc.text(header1, 240, 35, { baseline: 'top' });
        //doc.text(header2, 240, 55, { baseline: 'top' });
		doc.html(document.getElementById('pdfexport'), {
			    margin: [0,30,18,36],
				callback: function (doc) {
					doc.save(filename);
		}});
		$('.generating').show();
		setTimeout(function(){
			$('.generating').hide();
		},3000)
			
	});	

})



