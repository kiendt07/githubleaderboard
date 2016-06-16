import Axios from 'axios'

var helper = {
  getTopHundred: function(sortBy) {
    var url = 'https://fcctop100.herokuapp.com/api/fccusers/top/' + sortBy;
    return Axios.get(url).then(function (response) {
      return response.data;
    });
  }
}

module.exports = helper;
