// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.20/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/FeatureTable/templates/FeatureTable.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"${css.borderContainer}" data-dojo-attach-point\x3d "_gridBorderContainerNode" data-dojo-type\x3d"dijit/layout/BorderContainer" gutters\x3d"false"\x3e\r\n    \x3cdiv class\x3d"${css.contentPane}" data-dojo-attach-point\x3d "_leadingPaneNode" data-dojo-type\x3d"dijit/layout/ContentPane" data-dojo-props\x3d"region: \'leading\'"\x3e\r\n      \x3cdiv class\x3d"${css.grid}" data-dojo-attach-point\x3d"_gridNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"${css.contentPane} ${css.hidden}" data-dojo-attach-point\x3d "_centerPaneNode" data-dojo-type\x3d"dijit/layout/ContentPane" data-dojo-props\x3d"region: \'center\'"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"${css.contentPane} ${css.hidden}" data-dojo-attach-point\x3d "_trailingPaneNode" data-dojo-type\x3d"dijit/layout/ContentPane" data-dojo-props\x3d"region: \'trailing\'"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/FeatureTable","../kernel ../lang ./FeatureTable/Grid ./FeatureTable/storeUtils ./FeatureTable/dataUtils dojo/dom-class dojo/dom-construct dojo/dom-style dojo/aspect dojo/debounce dojo/has dojo/on dojo/string dojo/promise/all dojo/Deferred dojo/Evented dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/fx dojo/text!../dijit/FeatureTable/templates/FeatureTable.html dojo/i18n!../nls/jsapi dijit/_WidgetBase dijit/_OnDijitClickMixin dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/a11yclick dijit/Menu dijit/MenuItem dgrid/util/misc dijit/layout/BorderContainer dijit/layout/TabContainer dijit/layout/ContentPane dojo/query!css2 dojo/domReady!".split(" "),
function(H,B,I,z,k,C,v,D,E,A,F,r,J,K,u,w,L,e,m,M,N,O,P,Q,R,S,x,T,U,W,V,X,G){w=L([P,Q,R,S,w],{declaredClass:"esri.dijit.FeatureTable.Grid",baseClass:"esri-feature-table",templateString:N,featureLayer:null,map:null,fieldInfos:null,gridOptions:null,dateOptions:null,editable:!1,editOn:null,hiddenFields:null,outFields:null,menuFunctions:null,columnMenuFunctions:null,batchCount:50,syncSelection:!1,zoomToSelection:!1,showDataTypes:!1,showGridHeader:!0,showGridMenu:!0,showFeatureCount:!0,showColumnHeaderTooltips:!1,
showAttachments:!1,showStatistics:!0,showRelatedRecords:!1,showCyclicalRelationships:!1,filterIds:null,showFieldDetails:!1,showColumnHiderButton:!1,showDefaultSortMenuItem:!0,loaded:!1,grid:null,layerInfo:null,dataStore:null,columns:null,featureCount:0,idProperty:"id",gridMenu:null,gridMenuAnchor:null,selectedRows:null,selectedRowIds:null,css:{button:"esri-feature-table-button",hidden:"esri-feature-table-hidden",select:"esri-feature-table-select",borderContainer:"esri-feature-table-border-container",
contentPane:"esri-feature-table-content-pane",grid:"esri-feature-table-grid",title:"esri-feature-table-title",loadingIndicator:"esri-feature-table-loading-indicator",menu:"esri-feature-table-menu",menuItem:"esri-feature-table-menu-item",menuOptions:"esri-feature-table-menu-options",columnHeader:"esri-feature-table-column-header",columnHeaderTitle:"esri-feature-table-column-header-title",columnHeaderType:"esri-feature-table-column-header-type",columnHeaderClear:"esri-feature-table-column-header-clear",
sortAscendingIcon:"esri-icon-ascending icon-ui-ascending",sortDescendingIcon:"esri-icon-descending icon-ui-descending",filterIcon:"esri-icon-filter icon-ui-filter",propertiesIcon:"esri-icon-properties icon-ui-properties",statisticsIcon:"esri-icon-statistics icon-ui-statistics",settingsIcon:"esri-icon-settings icon-ui-settings",lockedIcon:"esri-icon-locked icon-ui-locked",lockedIconContainer:"esri-locked-icon-container",downIcon:"esri-icon-down icon-ui-down",menuIcon:"esri-icon-menu icon-ui-menu",
closeIcon:"esri-icon-close icon-ui-close",optionsMenu:"esri-feature-table-options-menu-container",relatedRecordsCell:"esri-feature-table-related-records-cell",relatedRecordsTitle:"esri-feature-table-related-records-title",relatedRecordsLink:"esri-related-records-link",attachmentsCell:"esri-feature-table-attachments-cell",attachmentsTitle:"esri-feature-table-attachments-title",attachmentsLink:"esri-attachments-link",dialog:"esri-feature-table-dialog",closeButton:"esri-dialog-close-button dijitButton",
statisticsTableContainer:"esri-feature-table-statistics",statisticsHeader:"esri-statistics-header",statisticsBreak:"esri-break",statisticsHorizontalBreak:"esri-horizontal-break",statisticsAttrTable:"esri-attribute-table",statisticsAttrName:"esri-attribute-name",statisticsAttrValue:"esri-attribute-value",leftMargin:"esri-feature-table-left-margin",dateValue:"esri-date-value"},_i18nStrings:O.widgets.FeatureTable,_layerInfos:null,_fieldInfos:null,_cachedIds:null,_defaultBatchCount:50,_defaultFeatureCount:2E3,
_defaultDateOptions:{timeEnabled:!0,dateEnabled:!0,timePattern:null,datePattern:null},_defaultGridOptions:{allowSelectAll:!1,cellNavigation:!0,selectionMode:"extended",pagination:!1,allowTextSelection:!1,pageSizeOptions:[10,25,50],columnHider:!0,columnResizer:!0,pagingDelay:300,keepScrollPosition:!0,queryRowsOverlap:0,sort:{field:"id",descending:!1}},_defaultSort:null,_defaultEditOn:"dblclick, keypress",_orderByFields:null,_showRelatedRecords:!1,_showAttachments:!1,_rollbackInfos:null,_statisticsDialog:null,
_attachmentsDialog:null,_columnRules:null,_relatedGridInfos:null,_popupDateFormats:{shortDate:{datePattern:"M/d/y"},shortDateLE:{datePattern:"d/M/y"},longMonthDayYear:{datePattern:"MMMM d, y"},dayShortMonthYear:{datePattern:"d MMM y"},longDate:{datePattern:"EEEE, MMMM d, y",selector:"date"},shortDateShortTime:{datePattern:"M/d/y",timePattern:"h:mm a",timeEnabled:!0},shortDateLEShortTime:{datePattern:"d/M/y",timePattern:"h:mm a",timeEnabled:!0},shortDateShortTime24:{datePattern:"M/d/y",timePattern:"H:mm",
timeEnabled:!0},shortDateLEShortTime24:{datePattern:"d/M/y",timePattern:"H:mm",timeEnabled:!0},shortDateLongTime:{datePattern:"M/d/y",timePattern:"h:mm:ss a",timeEnabled:!0},shortDateLELongTime:{datePattern:"d/M/y",timePattern:"h:mm:ss a",timeEnabled:!0},shortDateLongTime24:{datePattern:"M/d/y",timePattern:"H:mm:ss",timeEnabled:!0},shortDateLELongTime24:{datePattern:"d/M/y",timePattern:"H:mm:ss",timeEnabled:!0},longMonthYear:{datePattern:"MMMM y"},shortMonthYear:{datePattern:"MMM y"},year:{datePattern:"y"}},
constructor:function(a,b){b&&(this._rowSelectHandler=A(this._rowSelectHandler,0),this._rowDeselectHandler=A(this._rowDeselectHandler,0),this._refreshHandler=A(this._refreshHandler,0))},postMixInProperties:function(){this.inherited(arguments);this.set({columns:[],layerInfo:{},selectedRows:[],selectedRowIds:[],hiddenFields:this.hiddenFields||[],outFields:this.outFields||["*"],fieldInfos:this.fieldInfos||[],menuFunctions:this.menuFunctions||[],columnMenuFunctions:this.columnMenuFunctions||[],gridOptions:e.mixin({},
this._defaultGridOptions,this.gridOptions),dateOptions:e.mixin({},this._defaultDateOptions,this.dateOptions),_fieldInfos:[],_cachedIds:[],_columnRules:{},_relatedGridInfos:[]});F("touch")&&!this.editOn?this.set("editOn",x):this.editOn||this.set("editOn",this._defaultEditOn);this.filterIds&&0===this.filterIds.length&&(this.filterIds=null);this._noDataMessage=this.gridOptions.noDataMessage||this._i18nStrings.noData},startup:function(){this.inherited(arguments);var a=this.featureLayer;a&&a.loadError?
this._showLoadError():this.domNode&&a.loaded?this._setUpDataForMainGrid():this.own(r(a,"load",e.hitch(this,function(){this._setUpDataForMainGrid()})),r(a,"error",e.hitch(this,function(){a.loaded||this._showLoadError()})))},destroy:function(){this.inherited(arguments);this._statisticsDialog&&this._statisticsDialog.destroy();this._attachmentsDialog&&this._attachmentsDialog.destroy();this._grid&&this._grid._destroyColumns()},refresh:function(a){var b=a||this._grid,c=this._relatedGridInfos,d=c.length,
f;b===this._grid&&0<d&&m.forEach(c,function(a,b){(f=c[d-1-b])&&f.grid&&this._removeGrid(f.grid)},this);return this._refreshStore({grid:b}).then(function(){b.refresh()})},resize:function(a){this._gridBorderContainerNode&&this._gridBorderContainerNode.resize();(a=a&&a.resize?a:this._grid)&&a.resize()},clearSelection:function(a){(a=a||this._grid)&&a.clearSelection()},getRowDataById:function(a,b){var c=b||this._grid;if(c)return c.getRowDataById(a)},filterSelectedRecords:function(a,b){var c=b||this._grid,
d=c?c.selectedRowIds:[];c&&d&&d.length&&this.filterRecordsByIds(c.selectedRowIds)},filterRecordsByIds:function(a,b){var c=b||this._grid;c&&(this.filterIds=a,c.filterIds=a,this._refreshStore({grid:c}),this.emit("filter",{ids:a||[]}))},clearFilter:function(a){(a=a||this._grid)&&this.filterRecordsByIds(null,a)},getFeatureDataById:function(a){return a instanceof Array?k.queryLayerForFeature({layer:this.featureLayer,id:a}):k.queryLayerForFeatures({layer:this.featureLayer,ids:a})},selectRows:function(a,
b,c){(c=c||this._grid)&&c.selectRows(a,b)},sort:function(a,b,c){c=c||this._grid;var d=k.getOrderByString(a,b);c&&a&&this._sortField(c,{field:a,descending:b,orderByField:[d]})},centerOnSelection:function(a){return(a||this._grid).centerOnSelection()},_setUpMainGrid:function(a){var b=a.layer,c=a.layerInfo;a=this._getCustomFieldInfos(b);var d;d=this._generateGrid({map:this.map,layer:b,layerInfo:c,idProperty:c.idProperty,customFieldInfos:a||this.fieldInfos,defaultSort:this._defaultSort,outFields:this.outFields,
hiddenFields:this.hiddenFields,filterIds:this.filterIds,gridOptions:this.gridOptions,dateOptions:this.dateOptions,batchCount:this.batchCount,editable:this.editable,editOn:this.editOn,css:this.css,showAttachments:this._showAttachments,showRelatedRecords:this._showRelatedRecords,showCyclicalRelationships:this.showCyclicalRelationships,showStatistics:this.showStatistics,showFieldDetails:this.showFieldDetails,showGridHeader:this.showGridHeader,showGridMenu:this.showGridMenu,showFeatureCount:this.showFeatureCount,
showDataTypes:this.showDataTypes,showColumnHeaderTooltips:this.showColumnHeaderTooltips,showColumnHider:this.showColumnHiderButton,syncSelection:this.syncSelection,menuFunctions:this.menuFunctions,showDefaultSortMenuItem:this.showDefaultSortMenuItem,columnMenuFunctions:this.columnMenuFunctions,node:this._gridNode});this.set({_grid:d,grid:d.dGrid,gridMenu:d.optionsMenu,gridMenuAnchor:d.optionsMenuAnchor});this._wireUpGridEvents(d);d.showLoadingIndicator();d.updateNoDataMessage("");d.setHeaderTitle(this._i18nStrings.loadingData);
d.resize();this._setUpColumns({grid:d,layer:b});k.queryLayerForCount({layer:b,layerInfo:c}).then(e.hitch(this,function(a){d.set("featureCount",a);d.updateHeaderText();this._generateStore({grid:d,layer:b,layerInfo:c,count:a,filterIds:this.filterIds}).then(e.hitch(this,function(a){d.updateStore(a);d.updateNoDataMessage(this._noDataMessage);this.set({dataStore:a,layerInfo:e.clone(d.layerInfo)});d.hideLoadingIndicator();setTimeout(e.hitch(this,function(){this.resize()},200))}))})).otherwise(e.hitch(this,
function(){this._showLoadError();d.updateNoDataMessage(this._noDataMessage)}))},_generateGrid:function(a){a=new I(a,a.node);a.startup();return a},_setUpDataForMainGrid:function(){var a=this.featureLayer,b=a.objectIdField,c=this.gridOptions,d=this.outFields,f,g,n,h;this._generateLayerInfo({layer:a,idProperty:b}).then(e.hitch(this,function(e){e.hasRelatedRecords&&(this._showRelatedRecords=!!this.showRelatedRecords);e.hasAttachments&&(this._showAttachments=!!this.showAttachments);f=(g=c.sort&&c.sort.field?
k.findFirst(a.fields,"name",c.sort.field):null)&&g.name?g.name:b;n=!(!c.sort||!c.sort.descending);h=k.getOrderByString(f,n);d=m.filter(d,function(b){return!!k.findFirst(a.fields,"name",b)},this);0===d.length&&d.push("*");this.set({layerInfo:e,idProperty:b,_orderByFields:[h],_defaultSort:{attribute:f,descending:n}});this._setUpMainGrid({layer:a,layerInfo:e})}))},_getCustomFieldInfos:function(a){var b=this._layerInfos;a=isNaN(a.layerId)||null===a.layerId?null:a.layerId;return!b||k.isValueEmpty(a)?null:
(b=(b=(b=b[a]||null)?b.popupInfo:null)?b.fieldInfos:null)?this._updatePopupInfosDateFormat(b):null},_generateLayerInfo:function(a){var b=new u,c=a.layer,d=c.id||c.layerId;a={idProperty:a.idProperty,layerId:d,userIds:{}};c.credential&&(a.userIds[d]=c.credential.userId);a.userId&&(a.userIds[d]=a.userId);a.isFeatureCollection=c._collection&&!0===c._collection||null===c.url&&null===c._url;a.typeIdField=c.typeIdField;a.types=c.types;a.editable=c.isEditable?c.isEditable():!!c.userIsAdmin||!1;a.editCapabilities=
c.getEditCapabilities?c.getEditCapabilities():{};a.hasRelatedRecords=c.relationships&&0<c.relationships.length;a.supportsAdvancedQueryRelated=!(!c.advancedQueryCapabilities||!c.advancedQueryCapabilities.supportsAdvancedQueryRelated);a.hasAttachments=c.hasAttachments;a.queryAttachmentsSupported=!0;a=e.clone(a);b.resolve(a);return b},_setUpColumns:function(a){var b=a.grid,c=a.layer,d=c.fields,f;a=(f=c.getOutFields?c.getOutFields():["*"])&&f[0]&&"*"===f[0]?d:m.filter(d,function(a){return-1!==m.indexOf(f,
a.name)});b===this._grid&&"*"!==this.outFields[0]&&(a=m.filter(a,e.hitch(this,function(a){return-1!==m.indexOf(this.outFields,a.name)})));B.isDefined(c.objectIdField)&&!k.findFirst(a,"name",c.objectIdField)&&(c=k.findFirst(d,"name",c.objectIdField),a.unshift(c));a=b._setUpColumns(a);b===this._grid&&this.set({columns:a.columns,_fieldInfos:a.fieldInfos})},_showLoadError:function(a){var b=a&&a.grid?a.grid:this._grid;a=a&&a.error?a.error:this._i18nStrings.dataError;b&&(b.hideLoadingIndicator(),b.setHeaderTitle(a));
this.emit("error",{message:a})},_wireUpGridEvents:function(a){a&&(a.on("load",e.hitch(this,function(b){a===this._grid&&this.set("loaded",b.loaded);this.emit("load",b.loaded)})),a.on("error",e.hitch(this,function(a){this.emit("error",a)})),a.on("row-select",e.hitch(this,this._rowSelectHandler,a)),a.on("row-deselect",e.hitch(this,this._rowDeselectHandler,a)),a.on("refresh",e.hitch(this,this._refreshHandler,a)),a.on("sort",e.hitch(this,this._sortField,a)),a.on("filter",e.hitch(this,function(a){this.emit("filter",
a)})),a.on("column-resize",e.hitch(this,function(a){this.emit("column-resize",a)})),a.on("column-state-change",e.hitch(this,function(a){this.emit("column-state-change",a)})),a.on("editor-show",e.hitch(this,function(a){this.emit("editor-show",a)})),a.on("editor-hide",e.hitch(this,function(a){this.emit("editor-hide",a)})),a.on("data-change",e.hitch(this,function(a){this.emit("data-change",a)})),a.on("edits-complete",e.hitch(this,function(a){this.emit("edits-complete",a)})),a.on("layer-click",e.hitch(this,
function(a){this.emit("layer-click",a)})),a.on("layer-selection-complete",e.hitch(this,function(b){a===this._grid&&this.syncSelection&&this._syncSelectionFromLayer({grid:a,features:b.features});this.emit("layer-selection-complete",b)})),a.on("layer-selection-clear",e.hitch(this,function(b){a===this._grid&&this.syncSelection&&this.clearSelection();this.emit("layer-selection-clear",b)})),a.on("layer-update-end",e.hitch(this,function(a){this.emit("layer-update-end",a)})),a.on("show-selected-records",
e.hitch(this,function(b){this.emit("show-selected-records",{grid:a,ids:b.ids});this.filterRecordsByIds(b.ids,a)})),a.on("clear-selection",e.hitch(this,function(){this.emit("clear-selection")})),a.on("clear-filter",e.hitch(this,this.clearFilter,a)),a.on("show-statistics",e.hitch(this,function(a){this._statisticsDialog=a.dialog;this.emit("show-statistics",{dialog:a.dialog,statistics:a.statistics})})),a.on("show-attachments",e.hitch(this,function(a){this._attachmentsDialog=a.dialog;this.emit("show-attachments",
{featureId:a.featureId,dialog:a.dialog,attachments:a.attachments})})),a.on("show-related-records",e.hitch(this,this._showRelatedRecordsCallback,a)),a.on("show-detailed-field-view",e.hitch(this,this._showDetailedFieldViewCallback,a)))},_wireUpRelatedGridEvents:function(a){a.grid.own(r(a.parentGrid,"row-select",this._updateRelatedGridsHandler.bind(this,a)))},_updateRelatedGridsHandler:function(a,b){var c=a.grid,d=a.parentGrid,f=a.relationship,g=this._relatedGridInfos,n=b.rows[0],h,q,p,y,t,l;n&&(y=parseInt(n.id,
10),(p=(p=g[g.length-1])?p.grid:null)&&n.data&&(t=c===p,p=k.findFirst(c.layer.relationships,"id",f.id),q=k.findFirst(g,"grid",c),l=m.indexOf(g,q),q=d.relatedRecordCounts,h=q[f.id]&&q[f.id][y]&&!k.isValueEmpty(q[f.id][y].count)?q[f.id][y].count:k.isValueEmpty(n.data[p.keyField])?0:d._getRelatedRecordsCount({featureId:n.data[c.idProperty],relationshipId:p.id}),0<h?(t||m.forEach(g,function(a,b){a.grid&&b>=l&&(a.grid.emptyStore(),a.grid.set("featureCount",0),a.grid.updateHeaderText())}),g=f.keyField,
"undefined"===typeof n.data[g]&&(g=d.layer.getField(g).name),d=n.data[g],k.getRelationshipWhereClause({layer:c.layer,originRelationship:f,destinationRelationship:p,keyValue:d}).then(e.hitch(this,function(a){c.set({where:a,featureCount:h});c.updateHeaderText();this._refreshStore({grid:c}).then(function(a){t||setTimeout(function(){if(c.store){var a=c.store.data;if(a=a?a[Object.keys(a)[0]]:null)a=a.attributes[c.idProperty],c.selectRows(a,!1)}},600)})}))):t?(c.emptyStore(),c.set("featureCount",0),c.updateHeaderText(),
c.refresh()):(c.set("featureCount",0),c.updateHeaderText(),q=k.findFirst(g,"grid",c),l=m.indexOf(g,q),m.forEach(g,function(a,b){var c=a.grid;b<l||(c.emptyStore(),c.set("featureCount",0),c.updateHeaderText(),c.refresh())}))))},_generateStore:function(a){var b=a.grid,c=a.layer,d=a.layerInfo,f=a.where||null,g=a.orderByFields||null,e=a.count||null,h=a.filterIds||null;(a.store||b.store)&&b.emptyStore();return d.isFeatureCollection?this._generateStoreForFeatureCollection({grid:b,layer:c,layerInfo:d}):c.advancedQueryCapabilities&&
!c.advancedQueryCapabilities.supportsPagination?this._generateStoreForNonPaginatedLayer({grid:b,layer:c,layerInfo:d,where:f,orderByFields:g,count:e,filterIds:h}):this._generateCacheStore({grid:b,where:f,orderByFields:g,count:e,ids:h})},_generateCacheStore:function(a){var b=new u,c=a.grid,d=a.ids,f=a.where,e=a.orderByFields;a=a.count;e=e?e:c===this._grid?this._orderByFields&&this._orderByFields.length?this._orderByFields:[k.getOrderByString(this._defaultSort.attribute,this._defaultSort.descending)]:
null;B.isDefined(c.layer.maxRecordCount);d=z.generateCacheStore({grid:c,layer:c.layer,ids:d,where:f,orderByFields:e,count:a,getAttachments:this.showAttachments&&c.layerInfo.hasAttachments,getRelatedRecords:this.showRelatedRecords&&c.layerInfo.hasRelatedRecords});E.before(d,"query",function(a,b){c.showLoadingIndicator()});E.after(d,"query",function(a){a.then(function(a){a.attachmentInfos?c._updateAttachmentInfos(a.attachmentInfos):c.layerInfo.queryAttachmentsSupported=!1;a.relatedRecordInfos&&(c.layerInfo.supportsAdvancedQueryRelated?
c._updateRelatedRecordCounts(a.relatedRecordInfos):c._updateRelatedRecordInfos(a.relatedRecordInfos));c.hideLoadingIndicator()}).otherwise(function(){c.hideLoadingIndicator()});return a});b.resolve(d);return b},_generateMemoryStore:function(a){var b=a.grid,c=a.features;a=new u;c=z.generateMemoryStore({features:c,idProperty:this.get("idProperty")});c.query=e.hitch(this,z.generateSort,b.dGrid,c);a.resolve(c);return a},_generateStoreForFeatureCollection:function(a){return this._generateMemoryStore({grid:a.grid,
features:a.layer.graphics})},_generateStoreForNonPaginatedLayer:function(a){var b=a.grid,c=a.layer,d=a.layerInfo,f=a.where||null,g=a.orderByFields||null;return(a=a.filterIds||null)&&a.length?this._generateCacheStore({grid:b,ids:a,where:f,orderByFields:g}):k.queryLayerForIds({layer:c,idProperty:d.idProperty,where:f}).then(e.hitch(this,function(a){d._cachedIds=a;b.layerInfo.cachedIds=a;return this._generateCacheStore({grid:b,ids:a,where:f,orderByFields:g})})).otherwise(e.hitch(this,function(){this._showLoadError()}))},
_refreshStore:function(a){var b=a.grid,c=b.filterIds,d=a.where||b.where||null,f=a.orderByFields,g=b.layer,n=b.layerInfo;b.showLoadingIndicator();b.updateNoDataMessage("");b.setHeaderTitle(this._i18nStrings.loadingData);return k.queryLayerForCount({layer:g,layerInfo:n,where:d}).then(e.hitch(this,function(a){b.set("featureCount",a);b.updateHeaderText();return this._generateStore({grid:b,layer:g,layerInfo:n,orderByFields:f,where:d,count:a,filterIds:c}).then(e.hitch(this,function(a){b===this._grid&&this.set("dataStore",
a);b.updateStore(a);b.hideLoadingIndicator();return a}))})).otherwise(e.hitch(this,function(){this._showLoadError();b.updateNoDataMessage(this._noDataMessage);return null}))},_setEditableAttr:function(a){this._grid&&this._grid.set("editable",!!a);m.forEach(this._relatedGridInfos,function(b){b.grid.set("editable",!!a)})},_sortField:function(a,b){var c=b.column,d=parseInt(b.id,10),f=b.field,g=b.descending,k=b.orderByFields;a===this._grid&&(this._orderByFields=k);a.emptyStore();c?a.updateSort([{attribute:f,
columnId:d,fieldType:c.type,descending:g}]):a.updateSort([{attribute:f,descending:g}]);this._refreshStore({grid:a,orderByFields:k}).then(e.hitch(this,function(){this.emit("sort",{field:f,descending:g})}))},_rowSelectHandler:function(a,b){this.syncSelection&&this._syncSelectionFromGrid({grid:a,ids:a.selectedRowIds});a===this._grid&&(this.set({selectedRows:a.selectedRows,selectedRowIds:a.selectedRowIds}),this.emit("row-select",b))},_rowDeselectHandler:function(a,b){var c=a.selectedRows;this.syncSelection&&
(0<c.length?this._syncSelectionFromGrid({grid:a,ids:a.selectedRowIds}):a.layer.clearSelection(!0));a===this._grid&&(this.set({selectedRows:c,selectedRowIds:a.selectedRowIds}),this.emit("row-deselect",b))},_refreshHandler:function(a,b){a===this._grid&&this.emit("refresh",b)},_syncSelectionFromLayer:function(a){var b=a.features||[],c=(a.grid||this._grid).idProperty;0===b.length?this.clearSelection():(a=m.map(b,function(a){return a.attributes[c]}),k.compareIntArrays(a,this.selectedRowIds)||(this.map&&
this.zoomToSelection&&0<b.length&&(b=k.calculateExtentFromFeatures(b),this.map.setExtent(b)),this.selectRows(a,!0)))},_syncSelectionFromGrid:function(a){var b=a.grid||this._grid;a=a.ids;var c=b.layer.getSelectedFeatures(),d=b.idProperty,f,c=m.map(c,function(a){return a.attributes[d]});k.compareIntArrays(a,c)||k.selectFeaturesById({grid:b,ids:a}).then(e.hitch(this,function(a){this.map&&this.zoomToSelection&&0<a.length&&(f=k.calculateExtentFromFeatures(a),this.map.setExtent(f))}))},_showRelatedRecordsCallback:function(a,
b){var c=b.columnId,d=b.relationship,f=b.keyFieldValue,g=b.row,n=b.count,h=[],m,p;a===this._grid?(m=this._centerPaneNode,p=this._leadingPaneNode):(h=this._relatedGridInfos.length-1,h=this._relatedGridInfos[h],m=h.layout.centerContentPane,p=h.layout.leadingContentPane,this._removeButtonNode(h.closeButton),h.closeButton=null);this._addSmallRelatedRecordsColumn({grid:a,relationship:d});a.refresh();a.showFieldDetails=!1;a.showFeatureCount=!1;a.updateHeaderText();a.hideOptionsMenu();h=[this._shrinkGrid({grid:a,
centerPane:m,leadingPane:p,columnId:c}),this._setUpDataForRelatedGrid({parentGrid:a,relationship:d})];K(h).then(e.hitch(this,function(b){var h=b[1].layer;b=h.objectIdField;var l=m,p,q;this._addHiddenColumnRules({grid:a,columnId:c});a.hideColumnHiderButton();a.updateSelectionMode("single");a.refresh();a.selectRows(g[a.idProperty],!0,!0);this._showPane(l);q=this._generateSubLayout(l.domNode);this.resize();this._generateLayerInfo({layer:h,idProperty:b}).then(e.hitch(this,function(b){this.emit("show-related-records",
{grid:a,relationship:d,row:g});setTimeout(function(){a._scrollToRow(g[a.idProperty])},200);p=k.findFirst(h.relationships,"id",d.id);k.getRelationshipWhereClause({layer:h,originRelationship:d,destinationRelationship:p,keyValue:f}).then(e.hitch(this,function(c){this._setUpRelatedGrid({parentGrid:a,layer:h,layerInfo:b,relationship:d,where:c,layout:q,count:n})}))}))}))},_setUpDataForRelatedGrid:function(a){var b=a.relationship.relatedTableId;return this._setUpRelatedLayer({baseLayer:a.parentGrid.layer,
layerId:b}).then(function(a){return{layer:a,layerId:b}})},_generateSubLayout:function(a){var b=this.css,c=b.contentPane+" "+b.hidden,d,e;d=new V({className:b.borderContainer+" "+b.leftMargin,gutters:!1,design:"headline"});b=new G({className:b.contentPane,region:"leading"});c=new G({className:c,region:"center"});e=v.create("div",null,b.domNode);d.addChild(b);d.addChild(c);d.placeAt(a);d.startup();return{borderContainer:d,leadingContentPane:b,centerContentPane:c,containerNode:e}},_setUpRelatedGrid:function(a){var b=
this,c=a.layer,d=a.layerInfo,f=d.idProperty,g=a.parentGrid,n=a.relationship,h=a.layout,q=a.where||null;a=a.count||null;var p,r,t,l;t=m.map(this._relatedGridInfos,function(a){return a.grid.layer.layerId});t.unshift(this._grid.layer.layerId);r=[{label:this._i18nStrings.close,callback:function(){b._removeGrid(this)}}];p=this._getCustomFieldInfos(c);l=this._generateGrid({map:this.map,layer:c,layerInfo:d,idProperty:f,customFieldInfos:p,defaultSort:{attribute:f,descending:!1},outFields:["*"],where:q,gridOptions:this.gridOptions,
dateOptions:this.dateOptions,batchCount:this.batchCount,editable:this.editable,editOn:this.editOn,css:this.css,showAttachments:!(!this.showAttachments||!d.hasAttachments),showRelatedRecords:!0,showCyclicalRelationships:this.showCyclicalRelationships,showStatistics:this.showStatistics,showFieldDetails:!1,showGridHeader:this.showGridHeader,showGridMenu:this.showGridMenu,showFeatureCount:this.showFeatureCount,showDataTypes:this.showDataTypes,showColumnHeaderTooltips:this.showColumnHeaderTooltips,showColumnHider:this.showColumnHiderButton,
menuFunctions:r,showFilterMenuItems:!1,showDefaultSortMenuItem:this.showDefaultSortMenuItem,syncSelection:!1,visibleLayerIds:t,node:h.containerNode});this._wireUpGridEvents(l);this._wireUpRelatedGridEvents({grid:l,parentGrid:g,relationship:n});l.showLoadingIndicator();l.updateNoDataMessage("");l.setHeaderTitle(this._i18nStrings.loadingData);l.resize();f=this._generateColumnSwitcherButton(g);p=this._generateGridCloseButton(l);this._relatedGridInfos.push({grid:l,parentGrid:g,layout:h,relationship:n,
pickerButton:f,closeButton:p});this._setUpColumns({grid:l,layer:c});if(k.isValueEmpty(a))return k.queryLayerForCount({layer:c,layerInfo:d}).then(e.hitch(this,function(a){l.set("featureCount",a);l.updateHeaderText();this._generateStore({grid:l,layer:c,layout:h,layerInfo:d,where:q,count:a,filterIds:void 0}).then(e.hitch(this,function(a){l.updateStore(a);l.updateNoDataMessage(this._noDataMessage);l.hideLoadingIndicator()}))})).otherwise(e.hitch(this,function(){this._showLoadError();l.updateNoDataMessage(this._noDataMessage)}));
l.set("featureCount",a);l.updateHeaderText();this._generateStore({grid:l,layer:c,layout:h,layerInfo:d,where:q,count:a,filterIds:void 0}).then(e.hitch(this,function(a){l.updateStore(a);l.updateNoDataMessage(this._noDataMessage);l.hideLoadingIndicator()})).otherwise(e.hitch(this,function(){this._showLoadError();l.updateNoDataMessage(this._noDataMessage)}))},_setUpRelatedLayer:function(a){var b=new u,c=k.initFeatureLayer(a.baseLayer,a.layerId);c.loaded?b.resolve(c):r(c,"load",function(){b.resolve(c)});
return b},_showPane:function(a){a&&a.domNode&&C.remove(a.domNode,this.css.hidden)},_hidePane:function(a){a&&a.domNode&&C.add(a.domNode,this.css.hidden)},_shrinkGrid:function(a){var b=new u,c=a.grid,d=a.leadingPane,e=a.finalWidth||220;a=M.animateProperty({node:d.id,properties:{width:{start:function(){return d.domNode.getBoundingClientRect().width},end:function(){return e}}}}).play();r(a,"End",function(){b.resolve(c)});return b},_growGrid:function(a){a=a.grid;var b,c,d;this._removeSmallRelatedRecordsColumn(a);
this._removeHiddenColumnRules(a);a.showColumnHider&&a.showColumnHiderButton();a===this._grid?(c=this._centerPaneNode,d=this._leadingPaneNode,a.showFieldDetails=this.showFieldDetails,this.emit("hide-related-records")):(b=this._relatedGridInfos.length-1,b=this._relatedGridInfos[b],c=b.layout.centerContentPane,d=b.layout.leadingContentPane,b.closeButton=this._generateGridCloseButton(a));this._hidePane(c);d.domNode&&D.set(d.domNode,"width","100%");a.updateSelectionMode(this.gridOptions.selectionMode);
a.showFeatureCount=this.showFeatureCount;a.updateHeaderText();this.showGridMenu&&a.showOptionsMenu();a.resize();this.resize()},_removeGrid:function(a){if(a!==this._grid){var b=k.findFirst(this._relatedGridInfos,"grid",a),c=b.parentGrid,d=b.layout.borderContainer,e=b.layout.leadingContentPane;this._hidePane(b.layout.centerContentPane);e.domNode&&D.set(e.domNode,"width","100%");this._removeButtonNode(b.pickerButton);this._relatedGridInfos.pop();a.destroy();d.destroy();this._growGrid({grid:c})}},_addHiddenColumnRules:function(a){var b=
a.grid,c=a.columnId;a=b.getColumns();a=Object.keys(a);var d=[],e,d=m.map(a,function(a,d){e=d===c?"display: table-cell;":"display: none;";return b.styleColumn(a,e)});this._columnRules[b.id]=d},_removeHiddenColumnRules:function(a){m.forEach(this._columnRules[a.id],function(a){a.remove()});this._columnRules[a.id]=[]},_addSmallRelatedRecordsColumn:function(a){var b=a.grid,c=a.relationship.id,d=b.idProperty;b.columns.push({unhidable:!0,label:"esriRelatedRecordsSmall",field:"esriRelatedRecordsSmall",get:function(a){a=
b._getRelatedRecordsCount({featureId:a[d],relationshipId:c});return J.substitute(b._i18nStrings.parenValue,{value:a})}})},_removeSmallRelatedRecordsColumn:function(a){var b=a.columns;"esriRelatedRecordsSmall"===(b&&b[b.length-1]?b[b.length-1].field:null)&&(b.pop(),a.refresh())},_generateGridCloseButton:function(a){var b=this.css,b=v.create("div",{className:b.menuItem+" "+b.button+" "+b.closeIcon,tabIndex:0});v.place(b,a._menuNode,"before");r(b,x,e.hitch(this,function(){this._removeGrid(a)}));return b},
_generateColumnSwitcherButton:function(a){var b=a._gridHeaderNode.domNode,c=this._generateColumnSwitcherMenu(a);a=this.css;var d;d=v.create("div",{className:a.menuItem+" "+a.button+" "+a.downIcon,tabIndex:0},b);r(d,x,function(a){c._openMyself({target:a.target,delegatedTarget:d,iframe:null,coords:{x:a.pageX,y:a.pageY}})});return d},_generateColumnSwitcherMenu:function(a){var b=a.fieldInfos,c=this.css,d,f;d=new T({className:c.optionsMenu});m.forEach(a.columns,function(g){var n=parseInt(g.id,10),h=k.findFirst(b,
"name",g.field);"esriRelatedRecords"===g.type||"esriRelatedRecordsSmall"===g.field||"esriAttachments"===g.type||"esriFieldTypeGUID"===h.type||"esriFieldTypeGlobalID"===h.type||-1!==m.indexOf(a._unsupportedFieldTypes,h.type)||g.hidden||(f=new U({label:g.label||g.field,baseClass:c.menuItem}),r(f,x,e.hitch(this,function(){this._removeHiddenColumnRules(a);this._addHiddenColumnRules({grid:a,columnId:n});this.emit("column-focus-change",{fieldInfo:h,column:g})})),d.addChild(f))},this);d.startup();return d},
_removeButtonNode:function(a){a&&a&&a.parentNode&&a.parentNode.removeChild(a)},_showDetailedFieldViewCallback:function(a,b){var c=b.columnId,d=b.fieldInfo,f=this._centerPaneNode,g=this._leadingPaneNode,k=g.domNode.getBoundingClientRect().width/6,h;a.showFeatureCount=!1;a.showFieldDetails=!1;a.updateHeaderText();a.hideOptionsMenu();this._shrinkGrid({grid:a,centerPane:f,leadingPane:g,columnId:c,finalWidth:k}).then(e.hitch(this,function(){h=this._generateColumnSwitcherButton(a);this._addHiddenColumnRules({grid:a,
columnId:c});a.hideColumnHiderButton();a.updateSelectionMode("single");a.refresh();this.resize();this.emit("show-detailed-field-view",{columnId:c,grid:a,fieldInfo:d,pickerButton:h})}))},_updatePopupInfosDateFormat:function(a){m.forEach(a,function(a){a.format&&a.format.dateFormat&&(a.format.dateFormat=this._popupDateFormats[a.format.dateFormat])},this);return a}});F("extend-esri")&&e.setObject("dijit.FeatureTable",w,H);return w});