window.log=function f(){log.history=log.history||[];log.history.push(arguments);if(this.console){var a=arguments;try{a.callee=f.caller}catch(d){}a=[].slice.call(a);typeof console.log==="object"?log.apply.call(console.log,console,a):console.log.apply(console,a)}};
(function(b){function a(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),c;c=d.pop();)b[c]=b[c]||a})(function(){try{return console.log(),window.console}catch(b){return window.console={}}}());

