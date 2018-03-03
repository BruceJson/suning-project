function init() {
	initPlugins();
	bindEvent();
}

function initPlugins() {
	initDateTimePicker();
	initDateRangePicker();
}

function initDateTimePicker() {
	$('#timePicker').datetimepicker({
		format: 'yyyy-mm-dd',
		autoclose: true,
		minView: '2',
		language: 'zh-CN'
	});
	$('#timePicker').datetimepicker().on('changeDate', function(ev) {
		console.log('datetimepicker changeDate:', ev.date);
		addSelectTimeItem(ev.date);

	});
}

function addSelectTimeItem(date) {
	var year = date.getFullYear();

	var month = (date.getMonth() + 1) + '';
	month = month.length < 2 ? ('0' + month) : month;

	var day = date.getDate() + '';
	day = day.length < 2 ? ('0' + day) : day;

	var dateStr = year + '-' + month + '-' + day;

	var item = "<span class='select_time_item margin_right_15 inline_block'>" + dateStr + "<i class='delete_select_time'>+</i></span>";

	$('#select_time_list').append($(item));
}

function initDateRangePicker() {
	$('#timeRange').daterangepicker({
		"startDate": "2018-01-01",
		"endDate": "2018-01-02",
		"locale": {
			"format": "YYYY-MM-DD",
			"separator": " - ",
			"applyLabel": "确定",
			"cancelLabel": "取消",
			"fromLabel": "从",
			"toLabel": "至",
			"customRangeLabel": "Custom",
			"weekLabel": "W",
			"daysOfWeek": [
				"日",
				"一",
				"二",
				"三",
				"四",
				"五",
				"六"
			],
			"monthNames": [
				"一月",
				"二月",
				"三月",
				"四月",
				"五月",
				"六月",
				"七月",
				"八月",
				"九月",
				"十月",
				"十一月",
				"十二月"
			],
			"firstDay": 1
		},
	}, function(start, end, label) {
		console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
	});
}

function bindEvent() {
	// 已选择列表删除按钮点击事件
	$('#select_time_list').on('click', '.delete_select_time', function() {
		$(this).parent('.select_time_item').eq(0).remove();
	});

	// 清除全部按钮点击事件
	$('.btn_clear_yinxiaoriqi').click(function() {
		$('#select_time_list').children().remove();
	});
}

init();