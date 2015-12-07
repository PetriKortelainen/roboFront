// start the dawing process
function createCharts(){
    $.getJSON(
        'http://proto294.haaga-helia.fi/api/dialog/repository/all',
        function(data){
            dialogs = {};
            data.forEach(function(dialog){
                var id = dialog.dialogId,
                    name = dialog.name;
                dialogs[id] = dialog;
                
                $('.dialog_menu').append('<li><a href="#" onclick="setDialogClick(event, '+id+')">'+name+'</a></li>');
            });
            
            // set the dialog, which in turn draws the charts
            setDialog(data[0].dialogId);
        }
    );
    $(document).ajaxError(function(event, jqxhr, settings, thrownError){
        alert('ei pysty ei osaa ei halua ei jaksa nyyh :\'(\n'+thrownError);
    });
}

// set the global dialog id
function setDialogClick(e, id){
    e.preventDefault();
    setDialog(id);
}
function setDialog(id){
    dialog_id = id;
    getJSONData();
}

function setQuestionClick(e, question){
    e.preventDefault();
    QuestionsDonut.draw(question);
}

// get the data and draw
function getJSONData(){
    
    $.getJSON(
        'http://proto294.haaga-helia.fi/api/givenanswers/repository/getAnswerPerQuestionPerDialogID/'+dialog_id,
        function(data){
            
            // set variables
            morrisDonutDatas = {};
            var prev_question_text = '';
            
            // question selector html code
            var pull_down_button =
            '<div class="btn-group">'+
            '	<button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown" aria-expanded="false">'+
            '		Questions'+
            '		<span class="caret"></span>'+
            '	</button>'+
            '	<ul class="dropdown-menu pull-right" role="menu">';
            
            // go through the returned array
            data.forEach(function(item){
                
                // order the data by the question text
                
                // is it a new question?
                if( prev_question_text != item[0] ){
                    
                    // setup the new question
                    prev_question_text = item[0];
                    morrisDonutDatas[prev_question_text] = [];
                    
                    // set the next question selector html
                    pull_down_button +=
                    '		<li><a href="#" onclick="setQuestionClick(event, \''+prev_question_text+'\')">'+prev_question_text+'</a></li>';
                }
                
                // add the answer into the array
                morrisDonutDatas[prev_question_text].push({
                    label: item[1],
                    value: item[2]
                });
            });
            
            // end the question selector html
            pull_down_button +=
            '	</ul>'+
            '</div>';
            
            
            $('#donut_question_select').html(pull_down_button);
            
            // create/update the donut
            QuestionsDonut.draw(prev_question_text);
        }
    );
    $.getJSON(
        'http://proto294.haaga-helia.fi/api/givenanswers/repository/getGivenAnswerByDialogId/'+dialog_id,
        function(answers_data){
            
            var sessions = { 'length': 0, 'keys': [] };
            var answer_amounts = [];
            
            answers_data.forEach(function(data_array){
                var session_id = data_array.id.sessionId;
                var created = data_array.created;
                var answer_num = 1;
                
                if( sessions[session_id] ){
                    var cur_session = sessions[session_id];
                    var answers_length = cur_session.answers.length;
                    var prev_answer_time = cur_session.answers[answers_length-1].created;
                    answer_num = answers_length +1;
                    
                    sessions[session_id].answers.push({
                            'created': created,
                            'answer_num': answer_num,
                            'time_to_answer': ( ( created - prev_answer_time ) / 1000 )
                    });
                } else {
                    sessions.length++;
                    sessions.keys.push(session_id);
                    
                    sessions[session_id] = {
                        'session_id': session_id,
                        'answers': [{
                            'created': created,
                            'answer_num': answer_num,
                            'time_to_answer': 0
                        }]
                    }
                }
                if(answer_amounts[answer_num-1]){
                    answer_amounts[answer_num-1]++;
                } else {
                    answer_amounts[answer_num-1] = 1;
                }
            });
            
            
            
            ///// BAR CHART CALCULATIONS /////
            
            // calculate percentages    
            var total = answer_amounts[0];
            var answer_precentages = [];
            
            answer_amounts.forEach(function(amount){
                answer_precentages.push(amount / total * 100);
            });
            
            // set chart data
            bar_chart_data = [];
            var i=0;
            answer_precentages.forEach(function(percentage){
                bar_chart_data.push({
                    y: (bar_chart_data.length+1) +'. Question',
                    a: percentage.toFixed(2)
                });
            });
            
            
            
            ///// AREA CHART CALCULATIONS /////
    
            // calculate averages
            var averages = [];
            
            sessions.keys.forEach(function(key){
                var i = 0;
                sessions[key].answers.forEach(function(answer){
                    
                    if(averages[i]){
                        averages[i].num++;
                        averages[i].total += answer.time_to_answer;
                    } else {
                        averages[i] = { 'num': 1, 'total': answer.time_to_answer };
                    }
                    
                    i++;
                });
                
            });
            
            // set chart data
            line_chart_data = [];
            var i = 1;
            averages.forEach(function(item){
                var avg = item.total / item.num;
                line_chart_data.push({
                    question: i+'. Question',
                    value: avg.toFixed(2)
                });
                i++;
            });
            
            // create or update charts
            ResponseTimeArea.draw();
            ResponseTimeBar.draw();
        }
    );
}


QuestionsDonut = {
    draw: function(donut_data_key){
        if($('#morris-donut-chart')[0]){
            $('#morris-donut-chart').html('');
            $('#donut_heading').text(donut_data_key);
            DonutChart = Morris.Donut({
                element: 'morris-donut-chart',
                data: morrisDonutDatas[donut_data_key]
            });
            return 'ok';
        } else {
            return 'Error: Element #morris-area-chart doesn\'t exist!';
        }
    }
};

ResponseTimeArea = {
    draw: function(){
        if($('#morris-area-chart')[0]){
            $('#morris-area-chart').html('');
            AreaChart = Morris.Area({
                element: 'morris-area-chart',
                data: line_chart_data,
                xkey: 'question',
                ykeys: ['value'],
                labels: ['Waiting time (s)'],
                pointSize: 5,
                hideHover: 'auto',
                resize: true,
                parseTime: false
            });
            return 'ok';
        } else {
            return 'Error: Element #morris-area-chart doesn\'t exist!';
        }
    }
};

ResponseTimeBar = {
    draw: function(){
        if($('#morris-bar-chart')[0]){
            $('#morris-bar-chart').html('');
            BarChart = Morris.Bar({
                element: 'morris-bar-chart',
                data: bar_chart_data,
                xkey: 'y',
                ykeys: ['a'],
                labels: ['Response rate (%)'],
                hideHover: 'auto',
                resize: true,
                parseTime: false,
                ymin: 0,
                ymax: 100
            });
            return 'ok';
        } else {
            return 'Error: Element #morris-bar-chart doesn\'t exist!';
        }
    }
};



// init
createCharts();