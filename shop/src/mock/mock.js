import Mock from 'mockjs'
import data from './data.json'


Mock.mock('http://www.weichuang.com/getList', {data: data.list});