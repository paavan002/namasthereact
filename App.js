const parent=React.createElement("div",{id:'parent'},
[React.createElement("div",{id:'child'},[
    React.createElement("h1",{id:'chid'},"hello this is pavan sai"),
    React.createElement("h2",{id:'chid'},"hello this is pavan sai")
]),React.createElement("div",{id:'child1'},[
    React.createElement("h1",{id:'chid'},"hello this is pavan sai"),
    React.createElement("h2",{id:'chid'},"hello this is pavan sai")]),
]);


   
 
 
 
 
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);