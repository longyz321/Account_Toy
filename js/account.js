			function tickClock(){
				var now = moment().format('MMMM Do YYYY, h:mm:ss a');
				$("#clock").html(now);
				window.setTimeout("tickClock()",1000);
			}
			tickClock()