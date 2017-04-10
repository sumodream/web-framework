import React, { Component } from 'react';
import com from '../../pages/common/common'
import VerticalLayout from '../../sides/VerticalLayout'
import TextArea from '../../sides/Textarea'
import Text from '../../sides/Text'
class TextAreaInfo extends Component{
    static get displayName (){
        return {
            name: '区域框',
            classify:'Form Controls'
        };
    }
    static get api(){
        return [{
                attr:'theme',
                caption:'区域框图标的主题',
                type: 'string',
                optional: 'primary | danger | success | warning | info | default | infoBlue | infoBlack | infoWhite | infoGray | disabled',
                default: 'primary'
            }
        ]
    }
    render(){

        return (
            <VerticalLayout style={{alignSelf: 'stretch',flex: '1 0 auto'}}>
                <com.Title title={'TextArea 区域框'}>
                    区域框。
                </com.Title>
                <com.Folder title={'默认样式'}>
                    <TextArea>题目批改状态</TextArea>
                </com.Folder>
                <com.Folder title={'API'}>
                <Text style={{lineHeight: 1.5}}>通过设置 TextArea 的属性来产生不同类型。</Text>
                    <com.apiTable title={'区域框'} list={TextAreaInfo.api} />
                </com.Folder>
            </VerticalLayout>
        )
    }
}

export default TextAreaInfo;