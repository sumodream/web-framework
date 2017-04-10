import React, { Component } from 'react';
import com from '../../pages/common/common'
import VerticalLayout from '../../sides/VerticalLayout'
import Question from '../../sides/Question'
import Text from '../../sides/Text'
class QuestionInfo extends Component{
    static get displayName (){
        return {
            name: '问题详情',
            classify:'Views'
        };
    }
    static get api(){
        return [
        ]
    }
    render(){

        return (
            <VerticalLayout style={{alignSelf: 'stretch',flex: '1 0 auto'}}>
                <com.Title title={'Question 问题详情'}>
                    问题详情。
                </com.Title>
                <com.Folder title={'默认样式'}>
                    <Question>题目批改状态</Question>
                </com.Folder>
                <com.Folder title={'API'}>
                    <com.apiTable title={'问题详情'} list={QuestionInfo.api} />
                </com.Folder>
            </VerticalLayout>
        )
    }
}

export default QuestionInfo;