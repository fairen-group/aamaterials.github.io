var _0x4bc2=['playButton','pause','play_arrow','resize','apply','charts','load','table','controls','setOnLoadCallback','getElementById','colorSelect','addEventListener','change','sizeSelect','xSelect','zSelect','zDiv','filterGraphButton','sizeAxisMaxText','sizeAxisTitle','Family','Largest\x20Cavity\x20Diameter,\x20Å','Pore\x20Limiting\x20Diameter,\x20Å','Gravimetric\x20Accesible\x20Surface\x20Area,\x20m²/g','Metal\x202','Channel\x20Dimension','SQUEEZEd?','In\x20Chiral\x20Space\x20Groups','Contains\x20Chiral\x20Atoms','R\x20factor,\x20%','Crystal\x20Systems','Void\x20Fraction','Fam','LCD,\x20Å','d,\x20g/cm³\x20','VASA,\x20m²/cm³','GASA,\x20m²/g','Chir\x20SP','open','camMofDatabase','onupgradeneeded','result','cam','range=A:AQ','visualization','Query','https://docs.google.com/spreadsheets/d/1MjaGnDg-w7TBeZ7LnU6S2KwcPQRh_X_blGlw1jZACqI/gviz/tq?gid=0&headers=1&','send','onsuccess','objectStore','get','error','Some\x20error\x20in\x20database\x20request.','data','parse','DataTable','isError','Error\x20in\x20query:\x20','getDetailedMessage','getDataTable','stringify','indexedDB','transaction','readwrite','add','log','Saved\x20remote\x20MOF\x20data\x20to\x20local\x20indexedDB.','onerror','Failed\x20to\x20save\x20data\x20to\x20local\x20indexedDB.\x20Will\x20try\x20loading\x20chart\x20anyway.','style','display','none','getNumberOfRows','push','dashboard','Table','filterTable_div','graph-filterTable_div','ControlWrapper','StringFilter','control1','ChartWrapper','table_div','100%','bind','DataView','value','closest','Open\x20Sans','setColumns','length','setRows','xaxis','title','yaxis','scene','zaxis','innerHTML','getColumnRange','max','toPrecision','replace','markers','text+name','#eee','scatter','aspectratio','marker','colorbar','right','colorscale','autocolorscale','showscale','showlegend','indexOf','text','size','sizemin','getViewRowIndex','getValue','number','<b>','<br>','annotations','#666666','camera','newPlot','chart_div','plotly_click','_fullLayout','_scene','center','eye','animate','cubic-in-out','customLegend-modal','<b>Color</b></br>','<span\x20style=\x27color:','\x27>&#x25cf;</span>\x20-\x20','</br>','block','innerHTMl','hsl(0,\x200%,\x2086%)','n/a','hsl(','min',',\x2090%,\x20','floor','filter','hidden','disabled','sizeAxisGroup','cloneNode','sizeAxisMinCirc','sizeAxisMaxCirc','sizeAxisTriangle','clientWidth','19px','fontSize','setAttribute','font-size','font-weight','bold','points','toString','draw','filter-modal','getChart','getSelection','row','getTableRowIndex','setSelection','graph-filter-modal','splice','pointNumber'];(function(_0x3e06f5,_0x25f951){var _0x5c6890=function(_0x21f13a){while(--_0x21f13a){_0x3e06f5['push'](_0x3e06f5['shift']());}};_0x5c6890(++_0x25f951);}(_0x4bc2,0x165));var _0x3aaf=function(_0x4e7ca7,_0x546e12){_0x4e7ca7=_0x4e7ca7-0x0;var _0xac7146=_0x4bc2[_0x4e7ca7];return _0xac7146;};google[_0x3aaf('0x0')][_0x3aaf('0x1')]('current',{'packages':['corechart',_0x3aaf('0x2'),_0x3aaf('0x3')]});google[_0x3aaf('0x0')][_0x3aaf('0x4')](init);var dataTable,chart,options;var table,view;var tableView,filterView;var plotlyPlot;var colorSelector,sizeSelector,xSelect,ySelect;var minSizeText;var maxSizeText;var sizeTitle;var colorbartitle;var filterRows=[];var allRows=[];selectAllArray=[];var gettingPointsFromGraph=![];var reDraw=!![];var relaying=![];var sizeAxisGroup=null;var pointIndex=-0x1;var twoD=!![];var cmax=0x4;var smax=0x18;var hmax=0x1c;var vmax=0x140;var zmax=0x1c;var currentSelection=null;function init(){plotlyPlot=document[_0x3aaf('0x5')]('chart_div');colorSelector=document['getElementById'](_0x3aaf('0x6'));colorSelector[_0x3aaf('0x7')](_0x3aaf('0x8'),selectChange);sizeSelector=document[_0x3aaf('0x5')](_0x3aaf('0x9'));sizeSelector[_0x3aaf('0x7')](_0x3aaf('0x8'),selectChange);xSelector=document[_0x3aaf('0x5')](_0x3aaf('0xa'));xSelector[_0x3aaf('0x7')](_0x3aaf('0x8'),selectChange);ySelector=document['getElementById']('ySelect');ySelector[_0x3aaf('0x7')](_0x3aaf('0x8'),selectChange);zSelector=document[_0x3aaf('0x5')](_0x3aaf('0xb'));zSelector['addEventListener'](_0x3aaf('0x8'),selectChange);zDiv=document[_0x3aaf('0x5')](_0x3aaf('0xc'));filterGraphButton=document['getElementById'](_0x3aaf('0xd'));minSizeText=document[_0x3aaf('0x5')]('sizeAxisMinText');maxSizeText=document[_0x3aaf('0x5')](_0x3aaf('0xe'));sizeTitle=document['getElementById'](_0x3aaf('0xf'));axesLabels=['Years',_0x3aaf('0x10'),_0x3aaf('0x11'),_0x3aaf('0x12'),'Density,\x20g/cm³','Volumetric\x20Accessible\x20Surface\x20Area,\x20m²/cm³',_0x3aaf('0x13'),'Metal\x201',_0x3aaf('0x14'),'Functional\x20Group',_0x3aaf('0x15'),_0x3aaf('0x16'),_0x3aaf('0x17'),_0x3aaf('0x18'),_0x3aaf('0x19'),_0x3aaf('0x1a'),'Space\x20Group',_0x3aaf('0x1b')];shortLabels=['Y',_0x3aaf('0x1c'),_0x3aaf('0x1d'),'PLD,\x20Å',_0x3aaf('0x1e'),_0x3aaf('0x1f'),_0x3aaf('0x20'),'M1','M2','FG','Chan\x20Dim','SQ',_0x3aaf('0x21'),'Chir\x20At','R','CS','SG','VF'];var _0x441120;var _0x7aa671=window['indexedDB'][_0x3aaf('0x22')](_0x3aaf('0x23'));_0x7aa671[_0x3aaf('0x24')]=function(_0x309431){_0x441120=_0x7aa671[_0x3aaf('0x25')];_0x441120['createObjectStore'](_0x3aaf('0x26'),{'keyPath':'id'});var _0x437b84=encodeURIComponent(_0x3aaf('0x27'));var _0x1abbc6=new google[(_0x3aaf('0x28'))][(_0x3aaf('0x29'))](_0x3aaf('0x2a')+_0x437b84);_0x1abbc6[_0x3aaf('0x2b')](handleQueryResponse);};_0x7aa671[_0x3aaf('0x2c')]=function(_0x2c51c7){_0x441120=_0x7aa671[_0x3aaf('0x25')];var _0x59bdc9=_0x441120['transaction'](['cam'])[_0x3aaf('0x2d')](_0x3aaf('0x26'))[_0x3aaf('0x2e')]('01');_0x59bdc9[_0x3aaf('0x2f')]=function(_0x2b8961){console['log'](_0x3aaf('0x30'));};_0x59bdc9[_0x3aaf('0x2c')]=function(_0x515185){if(_0x59bdc9['result']!=null){console['log']('Loading\x20table\x20from\x20local\x20indexedDB.');var _0x4ea7de=_0x59bdc9[_0x3aaf('0x25')][_0x3aaf('0x31')];var _0x177de7=JSON[_0x3aaf('0x32')](_0x4ea7de);dataTable=new google['visualization'][(_0x3aaf('0x33'))](_0x177de7);initialiseChart();}};};}function handleQueryResponse(_0x434dd8){if(_0x434dd8[_0x3aaf('0x34')]()){alert(_0x3aaf('0x35')+_0x434dd8['getMessage']()+'\x20'+_0x434dd8[_0x3aaf('0x36')]());return;}dataTable=_0x434dd8[_0x3aaf('0x37')]();var _0x44b211=JSON[_0x3aaf('0x38')](dataTable);var _0x241814=window[_0x3aaf('0x39')][_0x3aaf('0x22')](_0x3aaf('0x23'));_0x241814[_0x3aaf('0x2c')]=function(_0x4f71f0){db=_0x241814['result'];var _0x15b30a=db[_0x3aaf('0x3a')](['cam'],_0x3aaf('0x3b'))[_0x3aaf('0x2d')]('cam')[_0x3aaf('0x3c')]({'id':'01','data':_0x44b211});_0x15b30a['onsuccess']=function(_0x17929a){console[_0x3aaf('0x3d')](_0x3aaf('0x3e'));};_0x15b30a[_0x3aaf('0x3f')]=function(_0x5a9b20){console[_0x3aaf('0x3d')](_0x3aaf('0x40'));};};initialiseChart();}function reloadMOFdata(){var _0x57e5d0=encodeURIComponent('range=A:AQ');var _0x4bb825=new google[(_0x3aaf('0x28'))][(_0x3aaf('0x29'))](_0x3aaf('0x2a')+_0x57e5d0);_0x4bb825[_0x3aaf('0x2b')](handleQueryResponse);document[_0x3aaf('0x5')]('help-modal')[_0x3aaf('0x41')][_0x3aaf('0x42')]=_0x3aaf('0x43');}function initialiseChart(){for(i=0x0;i<dataTable[_0x3aaf('0x44')]();i++){allRows[_0x3aaf('0x45')](i);selectAllArray[_0x3aaf('0x45')]({'row':i,'column':null});}dash=new google[(_0x3aaf('0x28'))]['Dashboard'](document[_0x3aaf('0x5')](_0x3aaf('0x46')));filterTable=new google[(_0x3aaf('0x28'))][(_0x3aaf('0x47'))](document['getElementById'](_0x3aaf('0x48')));graphFilterTable=new google['visualization']['Table'](document[_0x3aaf('0x5')](_0x3aaf('0x49')));var _0x152bba=new google[(_0x3aaf('0x28'))][(_0x3aaf('0x4a'))]({'controlType':_0x3aaf('0x4b'),'containerId':_0x3aaf('0x4c'),'options':{'filterColumnIndex':0x0}});table=new google[(_0x3aaf('0x28'))][(_0x3aaf('0x4d'))]({'chartType':_0x3aaf('0x47'),'containerId':_0x3aaf('0x4e'),'options':{'height':'100%','width':_0x3aaf('0x4f')}});dash[_0x3aaf('0x50')](_0x152bba,table);tableView=new google[(_0x3aaf('0x28'))][(_0x3aaf('0x51'))](dataTable);filterView=new google[(_0x3aaf('0x28'))][(_0x3aaf('0x51'))](dataTable);graphFilterView=new google[(_0x3aaf('0x28'))]['DataView'](dataTable);view=new google[(_0x3aaf('0x28'))][(_0x3aaf('0x51'))](dataTable);drawBubbleChart();setAxisSize();}function drawBubbleChart(){setAxisSize();xValue=parseInt(xSelector[_0x3aaf('0x52')]);yValue=parseInt(ySelector[_0x3aaf('0x52')]);cValue=parseInt(colorSelector[_0x3aaf('0x52')]);sValue=parseInt(sizeSelector['value']);zValue=parseInt(zSelector[_0x3aaf('0x52')]);columns=getColumns(xValue,yValue,cValue,sValue,zValue);if(yValue==0x9|yValue==0xf){layout={'font':{'family':'Open\x20Sans','size':0x10},'margin':{'l':0x8c,'r':0x0,'t':0x14,'b':0x64},'hovermode':_0x3aaf('0x53'),'xaxis':{'title':''},'yaxis':{'title':''},'scene':{'xaxis':{'title':''},'yaxis':{'title':''},'zaxis':{'title':''},'aspectratio':{'x':0x3,'y':0x1,'z':0x1},'camera':{}}};}else if(yValue==0x10|yValue==0xb|yValue==0xd){layout={'font':{'family':_0x3aaf('0x54'),'size':0x10},'margin':{'l':0x78,'r':0x0,'t':0x14,'b':0x64},'hovermode':_0x3aaf('0x53'),'xaxis':{'title':''},'yaxis':{'title':''},'scene':{'xaxis':{'title':''},'yaxis':{'title':''},'zaxis':{'title':''},'aspectratio':{'x':0x3,'y':0x1,'z':0x1},'camera':{}}};}else if(yValue==0xc){layout={'font':{'family':_0x3aaf('0x54'),'size':0x10},'margin':{'l':0xdc,'r':0x0,'t':0x14,'b':0x64},'hovermode':_0x3aaf('0x53'),'xaxis':{'title':''},'yaxis':{'title':''},'scene':{'xaxis':{'title':''},'yaxis':{'title':''},'zaxis':{'title':''},'aspectratio':{'x':0x3,'y':0x1,'z':0x1},'camera':{}}};}else{layout={'font':{'family':_0x3aaf('0x54'),'size':0x10},'margin':{'l':0x50,'r':0x0,'t':0x14,'b':0x64},'hovermode':_0x3aaf('0x53'),'xaxis':{'title':''},'yaxis':{'title':''},'scene':{'xaxis':{'title':''},'yaxis':{'title':''},'zaxis':{'title':''},'aspectratio':{'x':0x3,'y':0x1,'z':0x1},'camera':{}}};}view[_0x3aaf('0x55')](columns);if(filterRows[_0x3aaf('0x56')]>0x0){view[_0x3aaf('0x57')](filterRows);}else{view['setRows'](allRows);}colorbarTitle=axesLabels[cValue];layout[_0x3aaf('0x58')][_0x3aaf('0x59')]=axesLabels[xValue];layout[_0x3aaf('0x5a')]['title']=axesLabels[yValue];layout[_0x3aaf('0x5b')][_0x3aaf('0x58')][_0x3aaf('0x59')]=axesLabels[xValue];layout[_0x3aaf('0x5b')][_0x3aaf('0x5c')][_0x3aaf('0x59')]=axesLabels[yValue];layout[_0x3aaf('0x5b')][_0x3aaf('0x5a')][_0x3aaf('0x59')]=axesLabels[zValue];sizeTitle[_0x3aaf('0x5d')]=axesLabels[sValue];maxSizeText[_0x3aaf('0x5d')]=view[_0x3aaf('0x5e')](0x4)[_0x3aaf('0x5f')][_0x3aaf('0x60')](0x4)[_0x3aaf('0x61')](/0+$/,'')['replace'](/\.$/,'');minSizeText[_0x3aaf('0x5d')]=view[_0x3aaf('0x5e')](0x4)['min']['toPrecision'](0x3)[_0x3aaf('0x61')](/0+$/,'')[_0x3aaf('0x61')](/\.$/,'');hmax=view[_0x3aaf('0x5e')](0x1)[_0x3aaf('0x5f')];vmax=view[_0x3aaf('0x5e')](0x2)[_0x3aaf('0x5f')];zmax=view[_0x3aaf('0x5e')](0x5)[_0x3aaf('0x5f')];cmax=view[_0x3aaf('0x5e')](0x3)[_0x3aaf('0x5f')];smax=view[_0x3aaf('0x5e')](0x4)[_0x3aaf('0x5f')];drawPlotlyChart();}function drawPlotlyChart(){var _0x20f7c9={'mode':_0x3aaf('0x62'),'text':columnToArray(0x0),'x':columnToArray(0x1),'hoverinfo':_0x3aaf('0x63'),'name':'Structure\x20name','marker':{'color':columnToArray(0x3),'opacity':0.5,'line':{'width':0x1,'color':_0x3aaf('0x64')}}};if(twoD){_0x20f7c9['y']=columnToArray(0x2);_0x20f7c9['type']=_0x3aaf('0x65');}else{_0x20f7c9['y']=columnToArray(0x5);_0x20f7c9['z']=columnToArray(0x2);_0x20f7c9['type']='scatter3d';layout[_0x3aaf('0x66')]={'x':0x3,'y':0x1,'z':0x1};}var _0x3fc4c4=null;var _0x2d3ccd=null;if(cValue!=0x1&&cValue!=0x7&&cValue!=0x8&&cValue!=0x9&&cValue!=0xa&&cValue!=0xb&&cValue!=0xc&&cValue!=0xd&&cValue!=0xf&&cValue!=0x10){_0x20f7c9[_0x3aaf('0x67')][_0x3aaf('0x68')]={'title':colorbarTitle,'titleside':_0x3aaf('0x69')};_0x20f7c9[_0x3aaf('0x67')][_0x3aaf('0x6a')]='Jet';_0x20f7c9[_0x3aaf('0x67')][_0x3aaf('0x6b')]=![];_0x20f7c9['marker']['showscale']=!![];}else{_0x20f7c9['marker'][_0x3aaf('0x6c')]=![];_0x20f7c9[_0x3aaf('0x6d')]=![];layout[_0x3aaf('0x6d')]=!![];markerNames=columnToArray(0x3);_0x3fc4c4=uniq(markerNames);_0x2d3ccd=getColorListFromNameList(_0x3fc4c4);markerColors=[];for(i=0x0;i<markerNames[_0x3aaf('0x56')];i++){markerColors[_0x3aaf('0x45')](_0x2d3ccd[_0x3fc4c4[_0x3aaf('0x6e')](markerNames[i])]);}_0x20f7c9[_0x3aaf('0x67')]['color']=markerColors;_0x20f7c9[_0x3aaf('0x6f')]=columnToArray(0x3);}_0x20f7c9[_0x3aaf('0x67')][_0x3aaf('0x70')]=columnToArray(0x4),_0x20f7c9[_0x3aaf('0x67')]['sizeref']=smax/0x28;_0x20f7c9['marker'][_0x3aaf('0x71')]=0x4;customLegend(_0x3fc4c4,_0x2d3ccd);var _0x31e1d9=[_0x20f7c9];if(currentSelection==null){layout['annotations']=[];}else{var _0x599b8f=view[_0x3aaf('0x72')](currentSelection);var _0x1ea9bf=view[_0x3aaf('0x73')](_0x599b8f,0x1);var _0x116e47=view[_0x3aaf('0x73')](_0x599b8f,0x2);if(twoD){var _0x4b3724=view[_0x3aaf('0x73')](_0x599b8f,0x1);var _0xcd3a1a=view[_0x3aaf('0x73')](_0x599b8f,0x2);var _0xbea1d5=view[_0x3aaf('0x73')](_0x599b8f,0x3);var _0xd530c3=view['getValue'](_0x599b8f,0x4);if(typeof _0x4b3724===_0x3aaf('0x74'))_0x4b3724=_0x4b3724[_0x3aaf('0x60')](0x4);if(typeof _0xcd3a1a==='number')_0xcd3a1a=_0xcd3a1a[_0x3aaf('0x60')](0x4);if(typeof _0xbea1d5==='number')_0xbea1d5=_0xbea1d5['toPrecision'](0x4);if(typeof _0xd530c3===_0x3aaf('0x74'))_0xd530c3=_0xd530c3[_0x3aaf('0x60')](0x4);var _0x1534d6=_0x3aaf('0x75')+view[_0x3aaf('0x73')](_0x599b8f,0x0)+'</b><br>'+layout[_0x3aaf('0x58')][_0x3aaf('0x59')]+':\x20'+_0x4b3724+'<br>'+layout[_0x3aaf('0x5a')][_0x3aaf('0x59')]+':\x20'+_0xcd3a1a+_0x3aaf('0x76')+colorbarTitle+':\x20'+_0xbea1d5+_0x3aaf('0x76')+sizeTitle[_0x3aaf('0x5d')]+':\x20'+_0xd530c3+_0x3aaf('0x76');layout[_0x3aaf('0x77')]=[{'x':_0x1ea9bf,'y':_0x116e47,'text':_0x1534d6,'showarrow':!![],'arrowhead':0x7,'arrowsize':0x1,'arrowwidth':0x2,'ax':0xc8,'ay':0xa,'align':'right','xref':'x','yref':'y','bgcolor':_0x3aaf('0x78'),'opacity':0.8,'font':{'color':'white'}}];}}if(reDraw){layout[_0x3aaf('0x5b')][_0x3aaf('0x79')]={'center':{'x':0x0,'y':0x0,'z':-0.1},'eye':{'x':0.02,'y':-2.2,'z':0.1}};Plotly[_0x3aaf('0x7a')](_0x3aaf('0x7b'),_0x31e1d9,layout);plotlyPlot['on'](_0x3aaf('0x7c'),debounce(pointSelected,0xc8));plotlyPlot['on']('plotly_relayout',function(){relaying=!![];});reDraw=!![];}else{if(!twoD){layout[_0x3aaf('0x5b')][_0x3aaf('0x79')]={'center':{'x':chart_div[_0x3aaf('0x7d')][_0x3aaf('0x5b')][_0x3aaf('0x7e')]['camera'][_0x3aaf('0x7f')][0x0],'y':chart_div['_fullLayout'][_0x3aaf('0x5b')]['_scene'][_0x3aaf('0x79')][_0x3aaf('0x7f')][0x1],'z':chart_div[_0x3aaf('0x7d')][_0x3aaf('0x5b')][_0x3aaf('0x7e')][_0x3aaf('0x79')][_0x3aaf('0x7f')][0x2]},'eye':{'x':chart_div[_0x3aaf('0x7d')][_0x3aaf('0x5b')][_0x3aaf('0x7e')]['camera'][_0x3aaf('0x80')][0x0],'y':chart_div[_0x3aaf('0x7d')][_0x3aaf('0x5b')][_0x3aaf('0x7e')][_0x3aaf('0x79')]['eye'][0x1],'z':chart_div['_fullLayout'][_0x3aaf('0x5b')][_0x3aaf('0x7e')][_0x3aaf('0x79')][_0x3aaf('0x80')][0x2]}};}Plotly[_0x3aaf('0x81')]('chart_div',{'data':_0x31e1d9},{'transition':{'duration':0x3e8,'easing':_0x3aaf('0x82')}});}}function customLegend(_0x40653e,_0x51295f){var _0xcfa5dc=document[_0x3aaf('0x5')](_0x3aaf('0x83'));if(_0x40653e!=null){var _0x28d0f4=_0x3aaf('0x84');for(i=0x0;i<_0x40653e[_0x3aaf('0x56')];i++){var _0x1f1c6d=_0x3aaf('0x85')+_0x51295f[i]+_0x3aaf('0x86')+_0x40653e[i]+_0x3aaf('0x87');_0x28d0f4+=_0x1f1c6d;}_0xcfa5dc[_0x3aaf('0x5d')]=_0x28d0f4;_0xcfa5dc[_0x3aaf('0x41')][_0x3aaf('0x42')]=_0x3aaf('0x88');}else{_0xcfa5dc[_0x3aaf('0x89')]='';_0xcfa5dc[_0x3aaf('0x41')][_0x3aaf('0x42')]=_0x3aaf('0x43');}}function getColorListFromNameList(_0x46375f){numColors=_0x46375f[_0x3aaf('0x56')];var _0x56ba07=[];for(i=0x0;i<numColors;i++){var _0x146293=_0x3aaf('0x8a');switch(_0x46375f[i]){case'na':case'NA':case _0x3aaf('0x8b'):case'N/A':break;default:var _0x5cef28=0xa;var _0x4d2653=0x28;var _0x488c38=0x50;_0x146293=_0x3aaf('0x8c')+Math['floor'](0x168*(i%_0x5cef28)/Math[_0x3aaf('0x8d')](numColors,_0x5cef28))+_0x3aaf('0x8e')+Math[_0x3aaf('0x8f')](_0x4d2653+(_0x488c38-_0x4d2653)*(i/numColors))+'%)';}_0x56ba07[_0x3aaf('0x45')](_0x146293);}return _0x56ba07;}function uniq(_0x5745ca){var _0x274080={};return _0x5745ca[_0x3aaf('0x90')](function(_0x17513f){return _0x274080['hasOwnProperty'](_0x17513f)?![]:_0x274080[_0x17513f]=!![];});}function columnToArray(_0x5a3dfb){var _0x2d6aca=new Array(view[_0x3aaf('0x44')]());for(i=0x0;i<view[_0x3aaf('0x44')]();i++){_0x2d6aca[i]=view[_0x3aaf('0x73')](i,_0x5a3dfb);}return _0x2d6aca;}function getShapes(){var _0x45b5b3=new Array(view[_0x3aaf('0x44')]());for(i=0x0;i<view['getNumberOfRows']();i++){_0x45b5b3[i]=view['getValue'](i,columnIndex);}return _0x45b5b3;}function switch2D(){reDraw=!![];twoD=!twoD;zDiv[_0x3aaf('0x91')]=twoD;filterGraphButton[_0x3aaf('0x92')]=!twoD;drawBubbleChart();}function setAxisSize(){var _0x53ece8=document[_0x3aaf('0x5')](_0x3aaf('0x93'))[_0x3aaf('0x94')](!![]);var _0x2282ad=document['getElementById'](_0x3aaf('0x95'));var _0x3802e1=document['getElementById'](_0x3aaf('0x96'));var _0xdd5268=document[_0x3aaf('0x5')](_0x3aaf('0x97'));var _0x467dd8=document['documentElement'][_0x3aaf('0x98')]-0x1e;var _0x56cebf=0xa;var _0xa43a1f=_0x56cebf+_0x467dd8;var _0x20e776=0x1e;var _0x1dc54c=0x6;var _0x210c3d=0x28;var _0x75a84e=document['querySelector']('text.xtitle');var _0x19df04=_0x3aaf('0x99');if(_0x75a84e!=null){_0x19df04=_0x75a84e[_0x3aaf('0x41')][_0x3aaf('0x9a')];}sizeTitle[_0x3aaf('0x9b')]('x',_0x56cebf);sizeTitle[_0x3aaf('0x9b')]('y',_0x210c3d-0x14);minSizeText['setAttribute']('x',_0x56cebf+_0x20e776);maxSizeText[_0x3aaf('0x9b')]('x',_0xa43a1f-_0x20e776);minSizeText['setAttribute']('y',_0x210c3d+0x7);maxSizeText[_0x3aaf('0x9b')]('y',_0x210c3d+0x7);sizeTitle[_0x3aaf('0x9b')](_0x3aaf('0x9c'),_0x19df04);sizeTitle[_0x3aaf('0x9b')](_0x3aaf('0x9d'),_0x3aaf('0x9e'));minSizeText['setAttribute']('font-size',_0x19df04);maxSizeText[_0x3aaf('0x9b')](_0x3aaf('0x9c'),_0x19df04);_0x2282ad[_0x3aaf('0x9b')]('cx',_0x56cebf+_0x20e776+_0x1dc54c+0x2);_0x3802e1[_0x3aaf('0x9b')]('cx',_0xa43a1f-_0x20e776-_0x1dc54c-0x7);_0x2282ad[_0x3aaf('0x9b')]('cy',_0x210c3d);_0x3802e1[_0x3aaf('0x9b')]('cy',_0x210c3d);var _0x1b59ae=_0x56cebf+_0x20e776+0x2*_0x1dc54c+0x4+','+_0x210c3d+'\x20'+(_0xa43a1f-_0x20e776-0x2*_0x1dc54c-0xe)+','+(_0x210c3d+0x6)+'\x20'+(_0xa43a1f-_0x20e776-0x2*_0x1dc54c-0xe)+','+(_0x210c3d-0x6);_0xdd5268[_0x3aaf('0x9b')](_0x3aaf('0x9f'),_0x1b59ae);}function getColumns(_0xe504ec,_0x21592f,_0x4f895c,_0x26dd8e,_0x41920c){var _0x2bc270=0x0;var _0xef7450=getColumnFromSelectorValue(_0xe504ec);var _0x351279=getColumnFromSelectorValue(_0x21592f);var _0x193c31=getColumnFromSelectorValue(_0x4f895c);var _0x5231db=getColumnFromSelectorValue(_0x26dd8e);var _0x5155ff=getColumnFromSelectorValue(_0x41920c);return cols=[_0x2bc270,_0xef7450,_0x351279,_0x193c31,_0x5231db,_0x5155ff];}function getColumnFromSelectorValue(_0x157fa2){var _0x40fde5=null;_0x40fde5=_0x157fa2+0x1;return _0x40fde5;}function selectChange(){reDraw=!![];drawBubbleChart();}var oldColumns=[];function openFilterWindow(){var _0xd04cc8=parseInt(xSelector['value']);var _0x461bbe=parseInt(ySelector[_0x3aaf('0x52')]);var _0x6ebc55=parseInt(colorSelector['value']);var _0x2708e1=parseInt(sizeSelector[_0x3aaf('0x52')]);var _0x6e98d3=parseInt(zSelector[_0x3aaf('0x52')]);currentColumns=getColumns(_0xd04cc8,_0x461bbe,_0x6ebc55,_0x2708e1,_0x6e98d3);if(oldColumns[_0x3aaf('0xa0')]()!=currentColumns[_0x3aaf('0xa0')]()){tableView[_0x3aaf('0x55')](currentColumns);dash[_0x3aaf('0xa1')](tableView);}oldcolumns=currentColumns;if(filterRows[_0x3aaf('0x56')]==allRows['length']){filterView[_0x3aaf('0x57')]([]);}else{filterView[_0x3aaf('0x57')](filterRows);}filterView[_0x3aaf('0x55')]([0x0]);filterTable['draw'](filterView);document['getElementById'](_0x3aaf('0xa2'))[_0x3aaf('0x41')][_0x3aaf('0x42')]=_0x3aaf('0x88');}function applyFilter(){document[_0x3aaf('0x5')]('filter-modal')[_0x3aaf('0x41')][_0x3aaf('0x42')]=_0x3aaf('0x43');drawBubbleChart();}function tableSelectAll(){filterRows=allRows;table[_0x3aaf('0xa3')]()['setSelection'](selectAllArray);}function tableSelectNone(){filterRows=[];filterView[_0x3aaf('0x57')]([]);filterTable[_0x3aaf('0xa1')](filterView);}function addToSelection(){var _0x541019=table[_0x3aaf('0xa3')]()[_0x3aaf('0xa4')]();for(i=0x0;i<_0x541019[_0x3aaf('0x56')];i++){if(filterRows[_0x3aaf('0x6e')](_0x541019[i][_0x3aaf('0xa5')])<0x0){filterRows[_0x3aaf('0x45')](table[_0x3aaf('0x37')]()[_0x3aaf('0xa6')](_0x541019[i]['row']));}}filterView[_0x3aaf('0x57')](filterRows);filterTable[_0x3aaf('0xa1')](filterView);table[_0x3aaf('0xa3')]()[_0x3aaf('0xa7')]([]);}function removeFromSelection(){var _0x4b4f53=filterTable['getSelection']();for(i=0x0;i<_0x4b4f53[_0x3aaf('0x56')];i++){filterRows['splice'](_0x4b4f53[i][_0x3aaf('0xa5')],0x1);}filterView[_0x3aaf('0x57')](filterRows);filterTable[_0x3aaf('0xa1')](filterView);}function selectFromGraph(){gettingPointsFromGraph=!![];graphFilterView[_0x3aaf('0x55')]([0x0]);graphFilterView[_0x3aaf('0x57')](filterRows);graphFilterTable[_0x3aaf('0xa1')](graphFilterView);document['getElementById'](_0x3aaf('0xa8'))[_0x3aaf('0x41')][_0x3aaf('0x42')]=_0x3aaf('0x88');document[_0x3aaf('0x5')](_0x3aaf('0xa2'))[_0x3aaf('0x41')][_0x3aaf('0x42')]=_0x3aaf('0x43');}function removeFromGraphSelection(){var _0x25fa40=graphFilterTable[_0x3aaf('0xa4')]();for(i=0x0;i<_0x25fa40[_0x3aaf('0x56')];i++){filterRows[_0x3aaf('0xa9')](_0x25fa40[i][_0x3aaf('0xa5')],0x1);}graphFilterView[_0x3aaf('0x57')](filterRows);graphFilterTable['draw'](graphFilterView);}function applyGraphSelection(){document[_0x3aaf('0x5')](_0x3aaf('0xa8'))['style'][_0x3aaf('0x42')]=_0x3aaf('0x43');gettingPointsFromGraph=![];drawBubbleChart();}function pointSelected(_0x1c56be){if(!relaying){globalData=_0x1c56be;var _0x3198b7=_0x1c56be[_0x3aaf('0x9f')][0x0][_0x3aaf('0xaa')];var _0x28a0a6=view[_0x3aaf('0xa6')](_0x3198b7);if(gettingPointsFromGraph){currentSelection=null;if(filterRows['indexOf'](_0x28a0a6)<0x0){filterRows[_0x3aaf('0x45')](_0x28a0a6);graphFilterView['setRows'](filterRows);graphFilterTable['draw'](graphFilterView);}}else{if(_0x28a0a6==currentSelection){currentSelection=null;}else{currentSelection=_0x28a0a6;}drawBubbleChart();}}else{relaying=![];}}var playing=![];function playButtonClick(){buttonHandle=document[_0x3aaf('0x5')](_0x3aaf('0xab'));if(!playing){playing=!![];buttonHandle[_0x3aaf('0x52')]=_0x3aaf('0xac');playSequence();}else{playing=![];buttonHandle[_0x3aaf('0x52')]=_0x3aaf('0xad');}}window['addEventListener'](_0x3aaf('0xae'),debounce(windowResizeFunction,0xc8));function windowResizeFunction(){switch(document['getElementById']('filter-modal')[_0x3aaf('0x41')][_0x3aaf('0x42')]){case'':case _0x3aaf('0x43'):reDraw=!![];drawBubbleChart();break;case _0x3aaf('0x88'):document[_0x3aaf('0x5')](_0x3aaf('0xa8'))[_0x3aaf('0x41')][_0x3aaf('0x42')]='none';}}function debounce(_0x2d2590,_0x2dbd76,_0x393fce){var _0x3b1d6f;return function(){var _0x2ebf06=this,_0x2eabd6=arguments;var _0x5d4ebf=function(){_0x3b1d6f=null;if(!_0x393fce){_0x2d2590[_0x3aaf('0xaf')](_0x2ebf06,_0x2eabd6);}};var _0x5db5b0=_0x393fce&&!_0x3b1d6f;clearTimeout(_0x3b1d6f);_0x3b1d6f=setTimeout(_0x5d4ebf,_0x2dbd76||0xc8);if(_0x5db5b0){_0x2d2590[_0x3aaf('0xaf')](_0x2ebf06,_0x2eabd6);}};};