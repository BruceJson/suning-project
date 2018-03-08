// 选择模板弹出框
var $selectModelDialog = $('#select_model_dialog');
// 选择审核人弹出框
var $selectCheckDialog = $('#select_check_dialog');
// 替换字段锚点
var replaceReg = /\$\(1\)/g;

function initTimePicker() {
	$('#timePicker').datetimepicker({
		format: 'yyyy-mm-dd',
		autoclose: true,
		minView: '2',
		language: 'zh-CN'
	});
	$('#timePicker').datetimepicker().on('changeDate', function(ev) {
		console.log('datetimepicker changeDate:', ev.date);
	});
}

function bindEvent() {
	// 预估人数按钮点击事件
	$('#guess_person_num').click(function() {
		$('#person_num_tip').show();
	});

	// 选择模板按钮点击事件
	$('#btn_select_model').click(function() {
		$selectModelDialog.modal('show');
	});

	// 提交事件按钮点击事件
	$('#btn_submit_thing').click(function() {
		$selectCheckDialog.modal('show');
	});

	// 发送频率radio change事件  0：立即发送 1：定时发送 2：每日 3：每周
	$('input[type=radio][name=radio_send_times]').on('change', function() {
		initBySendTimes();
	});

	// 发送分组radio change事件  0：不分组 1：标签分组 2：随机分组
	$('input[type=radio][name=group]').on('change', function() {
		initByGroup();
	});

	// 选择话术模板确认按钮点击事件
	$('#btn_selectModel_ok').click(function() {
		$selectModelDialog.modal('hide');

		// 模拟数据 todo
		var value = '亲爱的$(1)用户，感谢您对任性付的支持，祝您生活愉快';

		// 设置模板内容
		settingModelContext(value);
	});

	// 生成预览按钮点击事件
	$('#btn_make_preview').click(function() {
		// 模拟数据 todo
		var time = '2017-12-12';
		var context = $('#textArea_model_context').val();


		// 设置时间
		$('#preview_time').text(time);
		// 设置内容
		$('#textArea_model_context_preview').val(context);

		$('.preview_header').css({
			'background-color': '#6666FF',
			'color': '#fff'
		});
	});

	// 替换字段按钮点击事件
	$('#replace_context_area').on('click', '.replace_item', function() {
		var text = this.innerText;

		var context = $('#textArea_model_context').val();

		var new_context = context.replace(replaceReg, text);

		$('#textArea_model_context').val(new_context);
	});
}

// type 0：立即发送 1：定时发送 2：每日 3：每周
function initBySendTimes() {
	var type = $('input[type=radio][name=radio_send_times]:checked').val();
	// 设置分组
	if (type === '1') {
		// 如果是定时发送
		$('#group_setting_1').show();
		$('#group_setting_2').show();
		$('#group_setting_3').hide();
	} else {
		$('#group_setting_1').hide();
		$('#group_setting_2').hide();
		$('#group_setting_3').show();
	}

	// 设置发送时间
	if (type === '2' || type === '3') {
		$('#sendTimeArea').show();
	} else {
		$('#sendTimeArea').hide();
	}

	if (type === '2') {
		$('#sendTimeWeek').hide();
		$('#sendTimeHour').show();
	} else if (type === '3') {
		$('#sendTimeWeek').show();
		$('#sendTimeHour').show();
	}
}

// 根据发送分组初始化对应显示项 type 0：不分组 1：标签分组 2：随机分组
function initByGroup() {
	var type = $('input[type=radio][name=group]:checked').val();

	if (type === '0') {
		$('#label-group').hide();
		$('#random-group').hide();
	} else if (type === '1') {
		$('#label-group').show();
		$('#random-group').hide();
	} else if (type === '2') {
		$('#label-group').hide();
		$('#random-group').show();
	}
}

// 根据选择的模板设置内容
function settingModelContext(val) {
	var context = val || '';

	$('#textArea_model_context').val(val);
}

function init() {
	initTimePicker();
	initBySendTimes();
	initByGroup();
	bindEvent();
}

init();
