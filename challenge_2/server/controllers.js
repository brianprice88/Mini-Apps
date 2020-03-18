var controllers = {
  get: (req, res) => {
    var converter = function (object) {
      var result = [];
      result.push(['firstName, lastName, county, city, role, sales'])
      var recurser = function (object) {
        var firstName = object.firstName;
        var lastName = object.lastName;
        var county = object.county;
        var city = object.city;
        var role = object.role;
        var sales = object.sales;
        result.push([`${firstName}, ${lastName}, ${county}, ${city}, ${role}, ${sales}`])
        if (object.children.length > 0) {
          for (var i = 0; i < object.children.length; i++) {
            recurser(object.children[i])
          }
        } else { return }
      }
      recurser(object)
      return result;
    };

    var csv = converter(JSON.parse(req.query[0]));
    res.send(csv)
  }

}

module.exports = controllers;