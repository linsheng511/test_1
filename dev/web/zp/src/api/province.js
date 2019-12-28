/*
 * @Author: lins 
 * 省份API
 * @Date: 2019-12-25 09:44:57 
 * @Last Modified by: lins
 * @Last Modified time: 2019-12-25 09:45:19
 */

import axios from '@/utils/axios'
/**
 * 通过id删除省份信息
 * @param {Object} param {id:''} 
 */
export function deleteProvinceById(param) {
  return axios.post('/Province/deleteById', param);
}
/**
 * 查找所有省份信息
 */
export function findAllProvince() {
  return axios.get('/Province/findAll');
}
/**
 * 通过id查找省份信息
 * @param {Object} param {id:''}
 */
export function findProvinceById(param) {
  return axios.get('/Province/findById', {
    params: param
  });
}
/**
 * 保存或更新省份信息
 * @param {Object} param
 */
export function saveOrUpdateProvince(param) {
  return axios.post('/Province/saveOrUpdate', param);
}
