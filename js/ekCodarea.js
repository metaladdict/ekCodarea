/*
 * ekCodarea - v1
 * 
 * Author : Erwan Kuznik
 * http://www.wdev.pro/
 *
 *
 * 1.0 : 08/04/2014
 * 
 * 
 * 
 */

(function( $ )
  {
	$.ekCodarea = function(element, options) 
	  {
		var defaults = 
		  {
			  elementClass:'ekCodarea'
			  
		  }
		var plugin = this;
        plugin.settings = {};
		
        var $element = $(element), element = element;

		plugin.init = function()
		  {
			plugin.settings = $.extend({}, defaults, options);
			
			plugin.settings.codeContent = plugin.htmlToText($element.html());
			plugin.settings.codeArray = plugin.settings.codeContent.split("\n");
			plugin.settings.listeElement = $('<ol>');

			for(var i=0;i<plugin.settings.codeArray.length;i++)
			  {
				if(!(i==0 && plugin.trim(plugin.settings.codeArray[i])=="") && !(i==plugin.settings.codeArray.length-1 && plugin.trim(plugin.settings.codeArray[i])==""))
				  {plugin.settings.listeElement.append($('<li>').text(plugin.settings.codeArray[i]));}
			  }
			
			$element.html(plugin.settings.listeElement).addClass('ekCodarea');
		  }
		
		plugin.htmlToText = function(html)
		  {
			return html;
			//return html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
		  }
		plugin.trim = function(txt)
		  {
			return txt.replace(/^\s+|\s+$/g, '');
		  }
		
		
		
		plugin.init();
	  };

	$.fn.ekCodarea = function(options) 
	  {
		return this.each(function() 
		  {
			if (undefined == $(this).data('ekCodarea')) 
			  {
				var plugin = new $.ekCodarea(this, options);
				$(this).data('ekCodarea', plugin);
			  }
		  });
	  }
  

})(jQuery);

