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
		$('#constitution select').append($("<option></option>").attr("value", key+1).text(value)); 
	});	
	$.each(uniqueeyes, function(key, value) {   
		$('#eyes select').append($("<option></option>").attr("value", key+1).text(value)); 
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
	$('.filters select').change(function(){
		var constval = $(this).find('option:selected').text();
		var attname = $(this).parent().attr('id');
		
		$('.sunday-tab .object-cover').parent().show();
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
	$('#resetfilters').click(function(){
		$('.sunday-tab .object-cover').parent().show();
		$('.sunday-tab .object-cover').parent().removeClass('hiddena');
		$('.sunday-tab .object-cover').parent().removeClass('hiddenh');
		$('.filters select').val(0);
	});
	
	$('#boys h1').click(function(){
	  	$(this).addClass('act');
		$('#boys h1).not(this).removeClass('act');
	  })
	
	var maxh = Math.max.apply(Math,heightarr);
	var minh = Math.min.apply(Math,heightarr);
	$( "#heightslider" ).slider({
		animate: "slow",
		min: minh,
		max: maxh,
		range: true,    
		values: [ minh, maxh],
		slide : function(event, ui) {    
            $("#result-height").text( "от " + ui.values[ 0 ] + " до " + ui.values[ 1 ] );
			$('.sunday-tab .object-cover').each(function(){
				if ($(this).attr('data-height')>=ui.values[ 0 ] && $(this).attr('data-height')<=ui.values[ 1 ]) {
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
	});
	$( "#result-height" ).text("от " + $("#heightslider").slider("values", 0) + " до " + $("#heightslider").slider("values", 1));
	
	var agearr = new Array();
	$('.sunday-tab .object-cover').each(function(){
		var age = $(this).attr('data-age');
		agearr.push(age);  
	});
	var maxa = Math.max.apply(Math,agearr);
	var mina = Math.min.apply(Math,agearr);
	$( "#ageslider" ).slider({
		animate: "slow",
		min: mina,
		max: maxa,
		range: true,    
		values: [ mina, maxa],
		slide : function(event, ui) {    
            $("#result-age").text( "от " + ui.values[ 0 ] + " до " + ui.values[ 1 ] );
			$('.sunday-tab .object-cover').each(function(){
				if ($(this).attr('data-age')>=ui.values[ 0 ] && $(this).attr('data-age')<=ui.values[ 1 ]) {
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
        }
	});
	$( "#result-age" ).text("от " + $("#ageslider").slider("values", 0) + " до " + $("#ageslider").slider("values", 1));
})
