!function(n,t,e,o,i,d){function r(n){return{}.toString.call(n).slice(8,-1)}function s(){var n=document.body;if(!(/(android|iphone|ipod)/i.test(navigator.userAgent)&&n.offsetWidth/window.devicePixelRatio<400)){n.classList.add("popup"),n.classList.add("with-notes");var t=document.createElement("time");t.id="_timer_",n.appendChild(t);var e=0,i=0,d=0;timer2=setInterval(function(){i++,60===i&&(i=0,d++),60===d&&(d=0,e++),t.innerHTML=["时间："+c(e),c(d),c(i)+" 幻灯片："+o.current+"/"+o.count].join(":")},1e3)}}function c(n){return n="00"+n,n.substr(-2)}var a=(o.$slides,{state:"unbind",methods:{},init:function(){this.bindListener()},bindListener:function(){var n=this;e.on("nodepptEvent:eventKeyup",function(t){n.sendKeyEvent(t.keyCode)}).on("nodepptEvent:show paint",function(t){n.sendKeyEvent(80)}).on("nodepptEvent:remove paint",function(){n.sendKeyEvent(67)}).on("nodepptEvent:paint points",function(e){var o={points:e,screen:{width:t.body.offsetWidth,height:t.body.offsetHeight}};n.send_("default",["paint points",o])}).on("controlEvent:proxyFn",function(n){var t=n.fnName,e=n.args;try{e=JSON.parser(e)}catch(n){e=""}o.proxyFn(t,e)}).on("controlEvent:keyEvent",function(t){n.createKeyEvent_(t.keyCode)}).on("controlEvent:syncStatus",function(n){o.setIndex(n.id,n.item)})},createKeyEvent_:function(n){var t=document.createEvent("Event");t.initEvent("keyup",!0,!0),t.keyCode=n,t.isFromControl=!0,document.dispatchEvent(t)},send_:function(n,t){var e,i=this.methods;t="Array"===r(t)?t:[t];for(var d in i)e=i[d],"function"==typeof(e=e["send_"+n])&&e.apply(o,t)},sendKeyEvent:function(n){this.send_("keyEvent",[n])},add:function(n,t,i){var d=this.methods;!i&&d[n]||(d[n]=t(o,e))},load:function(n,t){var e=o.dir+"nodeppt.control."+n+".js";i(e,function(){o.Control.methods[n].init(t)})}});a.init(),o.Control=a,o.timerCtrl=s}(window,document,MixJS.event.broadcast,Slide,MixJS.loadJS);