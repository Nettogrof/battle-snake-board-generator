(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(31)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),c=(n(15),n(1)),l=n(2),u=n(4),d=n(3),s=n(5),h=(n(17),n(19),function(e){var t=e.colour,n=e.onChange,a=e.isHead;return o.a.createElement("button",{className:"cell",style:{backgroundColor:t||"#d4d4d4"},onClick:n},o.a.createElement("span",null,a&&"H"))}),f=function(e){var t=e.boardState,n=e.onChange;return o.a.createElement("div",{style:{marginTop:10}},m(t,n).map(function(e,t){return o.a.createElement("div",{key:t,style:{display:"flex"}},e.map(function(e){return e}))}))},m=function(e,t){var n=[],a=[];e.board.snakes.concat(e.you).forEach(function(e){e.body.forEach(function(t,n){a[t.x]||(a[t.x]=[]),a[t.x][t.y]={colour:e.name,id:e.id,isHead:0===n}})});for(var r=e.board.height-1;r>=0;r--)n.push([]);for(var i=function(r){for(var i=function(i){var c=a[i]&&a[i][r]?a[i][r]:void 0;if(e.board.food.some(function(e){return e.x===i&&e.y===r}))n[e.board.height-1-r].push(o.a.createElement(h,{key:"".concat(i,",").concat(e.board.height-1-r),colour:"orange",onChange:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){return t(i,r,"food")})}));else if(void 0!==c){var l=c.id;n[e.board.height-1-r].push(o.a.createElement(h,{key:"".concat(i,",").concat(e.board.height-1-r),colour:c.colour,isHead:c.isHead,onChange:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){return t(i,r,l)})}))}else n[e.board.height-1-r].push(o.a.createElement(h,{key:"".concat(i,",").concat(e.board.height-1-r),onChange:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){return t(i,r,"")})}))},c=0;c<e.board.width;c++)i(c)},c=e.board.height-1;c>=0;c--)i(c);return n},y=(n(21),function(e){var t=e.title,n=e.children;return o.a.createElement("div",null,o.a.createElement("div",{className:"titled-container"},o.a.createElement("p",{className:"container-title"},t),n))}),g=(n(23),function(e){return o.a.createElement("div",{className:"styled-input"},e.title&&o.a.createElement("span",{className:"input-title"},e.title,":"),o.a.createElement("input",Object.assign({type:"text"},e)))}),p=function(){return"#FF"+Math.round(65535*Math.random()).toString(16)},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return function(a){var o=a.target.value;/[\D]/.test(o)||(parseInt(o,10)>t&&(o=t.toString()),parseInt(o,10)<n&&(o=n.toString()),e(o))}},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(n){var a=n.target.value;/[\D]/.test(a)||((parseInt(a,10)<t||!a)&&(a=t.toString()),e(a))}},E=function(){return Math.floor(1e6*Math.random()).toString()},k=(n(25),function(e){return e.href?o.a.createElement("a",e,o.a.createElement("button",{tabIndex:-1,className:"styled-button"},e.children)):o.a.createElement("button",Object.assign({className:"styled-button"},e),e.children)}),S=n(8),x=function(e){return o.a.createElement("div",{style:Object(S.a)({display:"flex",alignItems:"center",marginTop:"5px",marginBottom:"5px",flexWrap:"wrap"},e.style)},e.children)},C=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).boardCopyInput=null,n.copyBoardState=function(){n.boardCopyInput&&(n.boardCopyInput.select(),document.execCommand("copy"))},n.uploadBoardState=function(){var e=n.state.boardUploadString;(0,n.props.uploadBoard)(e)},n.setBoardString=function(e){return n.setState({boardUploadString:e})},n.state={boardUploadString:""},n}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.height,a=t.width,r=t.changeHeight,i=t.changeWidth,c=(t.uploadBoard,t.boardState),l=JSON.stringify(c);return o.a.createElement(y,{title:"Board"},o.a.createElement(x,null,o.a.createElement(g,{title:"Height",value:n,onBlur:v(r,1),onChange:b(r)}),o.a.createElement(g,{title:"Width",value:a,onBlur:v(i,1),onChange:b(i)})),o.a.createElement(x,null,o.a.createElement(g,{placeholder:"Past Board Here",onChange:function(t){return e.setBoardString(t.target.value)}}),o.a.createElement(k,{onClick:this.uploadBoardState},"Upload")),o.a.createElement(x,null,o.a.createElement(k,{onClick:this.copyBoardState},"Copy Board State"),o.a.createElement("input",{tabIndex:-1,ref:function(t){return e.boardCopyInput=t},type:"text",readOnly:!0,value:l,style:{position:"absolute",top:-1e4}}),o.a.createElement(k,{href:"data:text/json;charset=utf-8,"+encodeURIComponent(l),download:"board-".concat(c.game.id,".json")},"Download Board State")))}}]),t}(o.a.Component),I=(n(27),function(e){var t=e.colour;return o.a.createElement("div",{className:"colour-cell",style:{backgroundColor:t}})}),w=function(e){var t=e.selectFood,n=e.foodCount;return o.a.createElement(y,{title:"Food"},o.a.createElement(x,null,o.a.createElement(k,{onClick:t},o.a.createElement(I,{colour:"orange"})),o.a.createElement("span",null,"Food Count: ",n)))},B=(n(29),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.colour,n=e.health,a=e.selectSnake,r=(e.title,e.changeHealth);return o.a.createElement("div",{className:"snake-control-container"},o.a.createElement(k,{onClick:a},o.a.createElement(I,{colour:t})),o.a.createElement("div",{className:"vertical-flex-container"},o.a.createElement("span",null,t),o.a.createElement("div",null,o.a.createElement(g,{title:"Health",value:n,onBlur:v(r),onChange:b(r,100)}))))}}]),t}(o.a.Component)),H=function(e){var t=e.selectYou,n=e.colour,a=e.health,r=e.changeHealth;return o.a.createElement(y,{title:"You"},o.a.createElement(B,{selectSnake:t,colour:n,health:a,changeHealth:r}))},O=function(e){var t=e.selectSnake,n=e.snakes,a=e.addSnake,r=e.changeSnakeHealth;return o.a.createElement(y,{title:"Other Snakes"},o.a.createElement("div",{style:{minHeight:"68px"}},n.map(function(e){return o.a.createElement("div",{key:e.colour,style:{display:"inline-flex",flexDirection:"column",alignItems:"center",margin:"5px"}},o.a.createElement(B,{selectSnake:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){return t(e.id)}),colour:e.colour||"",health:e.health,title:e.colour,changeHealth:function(t){return r(t,e.id)}}))})),o.a.createElement(k,{onClick:a},"Add Snake"))},j=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).findExistingCell=function(e,t,a){var o=n.state,r=o.food,i=o.you,c=o.snakes;switch(e){case"food":return{id:"food",index:r.findIndex(function(e){return e.x===t&&e.y===a})};case"you":return{id:"you",index:i.body.findIndex(function(e){return e.x===t&&e.y===a})};case void 0:return;default:var l=c.find(function(t){return t.id===e});if(l)return{id:e,index:l.body.findIndex(function(e){return e.x===t&&e.y===a})}}},n.checkIfCellConnected=function(e,t,n){return n.some(function(n){return 1===Math.abs(n.x-e)&&n.y===t||1===Math.abs(n.y-t)&&n.x===e})},n.selectCell=function(e,t,a){var o=n.state,r=o.mode,i=o.food,c=o.you,l=o.snakes,u=o.chosenId,d=n.findExistingCell(a,e,t);if(d){var s=d.id;switch(s){case"food":i.splice(d.index,1);break;case"you":c.body.splice(d.index);break;default:var h=l.find(function(e){return e.id===s});h&&h.body.splice(d.index)}}if(!d||d.id!==r&&d.id!==u)switch(r){case"food":i.push({x:e,y:t});break;case"you":(0===c.body.length||n.checkIfCellConnected(e,t,c.body))&&c.body.unshift({x:e,y:t});break;case"snake":var f=l.find(function(e){return e.id===u});if(!f)return;(0===f.body.length||n.checkIfCellConnected(e,t,f.body))&&f.body.unshift({x:e,y:t})}n.setState({mode:r,food:i,you:c,snakes:l,chosenId:u})},n.buildBoardState=function(){return{game:{id:n.state.id,ruleset:{name:"standard",version:"v.1.2.3"},timeout:500},turn:200,you:{health:parseInt(n.state.you.health,10),id:"you",name:n.state.you.colour,body:n.state.you.body},board:{food:n.state.food,height:parseInt(n.state.height,10),width:parseInt(n.state.width,10),snakes:[{health:parseInt(n.state.you.health,10),id:"you",name:n.state.you.colour,body:n.state.you.body,head:n.state.you.body[0],length:n.state.you.body.length}].concat(n.state.snakes.map(function(e){return{health:parseInt(e.health,10),id:e.id,name:e.colour,body:e.body,head:e.body[0],length:e.body.length}}))}}},n.addSnake=function(){var e=p(),t=n.state.snakes;t.push({body:[],colour:e,health:"100",id:e}),n.setState({snakes:t})},n.selectSnake=function(e){n.setState({mode:"snake",chosenId:e})},n.selectFood=function(){n.setState({mode:"food",chosenId:""})},n.selectYou=function(){n.setState({mode:"you",chosenId:""})},n.changeSnakeHealth=function(e,t){var a=n.state,o=a.you,r=a.snakes;if("you"===t)return o.health=e,void n.setState({you:o});var i=r.find(function(e){return e.id===t});i&&(i.health=e,n.setState({snakes:r}))},n.changeBoardHeight=function(e){return n.setState({height:e})},n.changeBoardWidth=function(e){return n.setState({width:e})},n.uploadBoard=function(e){try{var t=JSON.parse(e);n.setState({id:E(),height:t.board.height.toString(),width:t.board.width.toString(),food:t.board.food,snakes:t.board.snakes.filter(function(e){return e.id!==t.you.id}).map(function(e){var t=p();return{id:t,colour:t,body:e.body,health:e.health.toString()}}),you:{colour:"#22aa34",body:t.you.body,health:t.you.health.toString(),id:"you"},mode:"food",chosenId:""})}catch(a){alert("That didn't work")}},n.state={id:E(),height:"11",width:"11",food:[],snakes:[],you:{colour:"#22aa34",body:[],health:"100",id:"you"},mode:"food",chosenId:""},n}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.height,a=t.width,r=t.snakes,i=t.you,c=t.food,l=t.mode,u=t.chosenId;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"control-container"},o.a.createElement(H,{selectYou:this.selectYou,colour:i.colour,health:i.health,changeHealth:function(t){return e.changeSnakeHealth(t,"you")}}),o.a.createElement(O,{addSnake:this.addSnake,changeSnakeHealth:this.changeSnakeHealth,selectSnake:this.selectSnake,snakes:r}),o.a.createElement(w,{foodCount:c.length,selectFood:this.selectFood}),o.a.createElement(C,{boardState:this.buildBoardState(),changeHeight:this.changeBoardHeight,changeWidth:this.changeBoardWidth,height:n,width:a,uploadBoard:this.uploadBoard})),o.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},o.a.createElement(y,{title:"Current Mode"},o.a.createElement("div",{className:"current-mode"},o.a.createElement(I,{colour:"food"===l?"orange":"you"===l?"#22aa34":u}),o.a.createElement("span",{style:{marginLeft:10}},"snake"!==l?l:u))),o.a.createElement(f,{boardState:this.buildBoardState(),onChange:this.selectCell}),o.a.createElement(y,{title:"Version"},o.a.createElement("p",null,"v0.3"))),o.a.createElement("div",null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.2f1ca9da.chunk.js.map