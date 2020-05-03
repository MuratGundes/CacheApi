const cacheRepository = require('../Repository/CacheRepository');

const getAllKeys = async function () {
    return await cacheRepository.getAllKeys();
};

const getKeyById = async function (id) {
    return await cacheRepository.getKeyById(id);
};

const addKey = async function (key) {
    const cacheEntity = {
        key: key,
        date: new Date(),
        hash: Math.random().toString(36).substr(1,16)
    }
    
    return await cacheRepository.addKey(cacheEntity);
};

const deleteKeyById = async function (id) {
    return await cacheRepository.deleteKeyById(id);
};
    
const deleteAllKeys = async function () {
    return await cacheRepository.deleteAllKeys();
};

module.exports = {
    getAllKeys,
    getKeyById,
    addKey,
    deleteKeyById,
    deleteAllKeys
 };