
var columns = [
  { label: 'Stage ID', id: 'id', sortBy: 'stageId' },
  { label: 'Description', id: 'desc', sortBy: 'name' },
  startColumn,
  durationColumn,
  tasksColumn
].concat(ioBytesColumns);

//makeTable(columns, 'stagesTables', 'stage', null, ['id', -1]);

Template.stagesTables.helpers({
  showAll: function() {
    return Cookie.get('stages-showAll') != false;
  }
  //tableData: function(title, objs, titleId, alwaysShow) {
  //  return {
  //    title: title + " (" + objs.num + ")",
  //    titleId: titleId,
  //    tableName: "stages-" + titleId,
  //    objs: objs.stages,
  //    num: objs.num,
  //    show: objs.num || (alwaysShow === true),
  //    columns: columns
  //  };
  //}
});

function unsetShowAll() {
  Cookie.set("stages-showAll", false);
}

function setShowAll() {
  Cookie.set("stages-showAll", true);
}

Template.stagesTables.events({
  'click #active-link, click #completed-link, click #failed-link, click #pending-link, click #skipped-link': unsetShowAll,
  'click #all-link': setShowAll
});
