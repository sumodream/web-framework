import React, { Component } from 'react';
import com from '../../pages/common/common'
import VerticalLayout from '../../sides/VerticalLayout'
import HorizontalLayout from '../../sides/HorizontalLayout'
import Text from '../../sides/Text'
import Carousel from '../../sides/Carousel'
class CarouselInfo extends Component{
    static get displayName (){
        return {
            name: '轮播图',
            classify: 'Views'
        };
    }
    static get api(){
        return [
            {
                attr: 'list',
                caption: '轮播图项目所填内容',
                type: 'array',
                optional: '',
                default: ''
            },
            {
                attr: 'time',
                caption: '当轮播自动播放时,设置项目切换时间,单位为毫秒',
                type: 'number',
                optional: '',
                default: '5000'
            },
            {
                attr: 'effect',
                caption: '轮播图切换效果',
                type: 'string',
                optional: 'scrollX | fade',
                default: 'scrollX'
            },
            {
                attr: 'showDots',
                caption: '是否显示项目点',
                type: 'bool',
                optional: 'true | false',
                default: 'true'
            },
            {
                attr: 'autoPlay',
                caption: '轮播是否自动播放',
                type: 'bool',
                optional: 'true | false',
                default: 'true'
            },
            {
                attr: 'onChange',
                caption: '轮播图切换时触发函数,参数包括切换后的项目索引及interval函数',
                type: 'func'
            }
        ]
    }
    static get list(){
        return [
            {
                attr: 'item',
                caption: '单个项目所填内容',
                type: 'elem',
                optional: '',
                default: '<div>hello 1</div>'
            }
        ]
    }
    render(){
        var styles = {
            wrap: {
                display: 'flex',
                alignSelf: 'stretch',
                justifyContent: 'space-between'
            }
        };
        return (
            <VerticalLayout style={{alignSelf: 'stretch',flex: '1 0 auto'}}>
                <com.Title title={'Carousel 轮播图'}>
                    轮播图
                </com.Title>
                <com.Folder title={'默认样式'}>
                    <Carousel></Carousel>
                </com.Folder>
                <com.Folder title={'API'}>
                    <com.apiTable title={'轮播图'} list={CarouselInfo.api} />
                    <com.apiTable title={'list'} list={CarouselInfo.list} />
                </com.Folder>
            </VerticalLayout>
        )
    }
}

export default CarouselInfo;