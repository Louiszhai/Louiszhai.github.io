MixJS.define("event/broadcast",function(r){var n={};return{fire:function(e,t){var a=n[e],l=0;if(!r.isUndefined(a)){var c=[].slice.call(arguments,0);c=c.length>2?c.splice(2,c.length-1):[],c=[t].concat(c),l=a.length;for(var i=0;i<l;i++){var s=a[i];s&&s.callback&&(c=c.concat(s.args),s.callback.apply(s.scope,c))}}return this},on:function(e,t,a){e=e||[];var l=[].slice.call(arguments);r.isString(e)&&(e=e.split(","));var c=e.length;if(0===c)return this;l=l.length>3?l.splice(3,l.length-1):[];for(var i=0;i<c;i++){var s=e[i];n[s]=n[s]||[],n[s].push({callback:t,scope:a,args:l})}return this},un:function(r,e,t){var a=n[r];if(!a)return this;if(e){for(var l=a.length,c=[],i=0;i<l;i++){var s=a[i];s.callback==e&&s.scope==t||c.push(s)}a=c}else a.length=0;return this},removeAll:function(){return n={},this}}});