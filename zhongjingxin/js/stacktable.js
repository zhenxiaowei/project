!function(t){t.fn.stacktable=function(a){var s=this,e={id:"stacktable small-only",hideOriginal:!0},l=t.extend({},e,a);return s.each(function(){var a=t('<table class="'+l.id+'"><tbody></tbody></table>');void 0!==typeof l.myClass&&a.addClass(l.myClass);var s="";$table=t(this),$table.addClass("stacktable large-only"),$topRow=$table.find("tr").eq(0),$table.find("tr").each(function(a,e){s+="<tr>",0===a?s+='<tr><th class="st-head-row st-head-row-main" colspan="2">'+t(this).find("th,td").eq(0).html()+"</th></tr>":t(this).find("td,th").each(function(a,e){0===a?s+='<tr><th class="st-head-row" colspan="2">'+t(this).html()+"</th></tr>":""!==t(this).html()&&(s+="<tr>",s+=$topRow.find("td,th").eq(a).html()?'<td class="st-key">'+$topRow.find("td,th").eq(a).html()+"</td>":'<td class="st-key"></td>',s+='<td class="st-val">'+t(this).html()+"</td>",s+="</tr>")})}),a.append(t(s)),$table.before(a),l.hideOriginal||$table.show()})},t.fn.stackcolumns=function(a){var s=this,e={id:"stacktable small-only",hideOriginal:!0},l=t.extend({},e,a);return s.each(function(){$table=t(this);var a=$table.find("tr").eq(0).find("td,th").length;if(!(3>a)){var s=t('<table class="'+l.id+'"></table>');void 0!==typeof l.myClass&&s.addClass(l.myClass),$table.addClass("stacktable large-only");for(var e=t("<tbody></tbody>"),d=1;a>d;)$table.find("tr").each(function(a,s){var l=t("<tr></tr>");0==a&&l.addClass("st-head-row st-head-row-main"),first=t(this).find("td,th").eq(0).clone().addClass("st-key");var n=d;if(t(this).find("*[colspan]").length){var i=0;t(this).find("td,th").each(function(a,s){var e=t(this).attr("colspan");return e?(e=parseInt(e,10),n-=e-1,i+e>d&&(n+=i+e-d-1),i+=e):i++,i>d?!1:void 0})}second=t(this).find("td,th").eq(n).clone().addClass("st-val").removeAttr("colspan"),l.append(first,second),e.append(l)}),++d;s.append(t(e)),$table.before(s),l.hideOriginal||$table.show()}})}}(jQuery);