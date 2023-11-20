const {City} = require('../models/index')

class CityRepository {
  async CreateCity ({name}){
    try{
      const city = await City.create({name});
      return city;
    }catch(error){
      console.log("There is error in city repository",error)
      throw{error}
    }
  }
  async deleteCity({cityid}){
    try{
       await City.destroy({
        where:{
          id:cityid
        }
       })
    }
    catch(error){
      console.log("There is error in city repository",error)
      throw{error}
    }
  }
}

module.exports =CityRepository;