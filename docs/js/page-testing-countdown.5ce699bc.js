(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-countdown"],{6710:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.expire?[e._v("EXPIRE")]:[e._v("days "+e._s(e.day)+" hour "+e._s(e.hour)+" minute "+e._s(e.minute)+" second "+e._s(e.sec))]],2)},o=[],r={data:function(){return{sec:0,minute:0,hour:0,day:0,expire:!1}},mounted:function(){var e=this,t=new Date("Jan 5, 2021 15:37:25").getTime(),n=setInterval((function(){var a=(new Date).getTime(),o=t-a;e.day=Math.floor(o/864e5),e.hour=Math.floor(o%864e5/36e5),e.minute=Math.floor(o%36e5/6e4),e.sec=Math.floor(o%6e4/1e3),o<0&&(clearInterval(n),e.expire=!0)}),1e3);//! Set the date we're counting down to
}},u=r,i=n("2877"),s=Object(i["a"])(u,a,o,!1,null,null,null);t["default"]=s.exports}}]);
//# sourceMappingURL=page-testing-countdown.5ce699bc.js.map