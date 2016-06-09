var rawData = {
  "people": [
    {
      "id": 1,
      "first_name": "Whitney",
      "last_name": "Domenic",
      "employments": [ ]
    },
    {
      "id": 3,
      "first_name": "Elyse",
      "last_name": "Jensen",
      "employments": [
        {
          "company_id": 4,
          "title": "Chief Communications Consultant"
        }
      ]
    },
    {
      "id": 6,
      "first_name": "Elise",
      "last_name": "Camylle",
      "employments": [
        {
          "company_id": 4,
          "title": "Regional Applications Designer"
        },
        {
          "company_id": 9,
          "title": "Internal Mobility Executive"
        }
      ]
    },
  ],
  "companies": [
    {
      "id": 1,
      "name": "Mueller LLC"
    },
    {
      "id": 4,
      "name": "Schmidt-Rolfson"
    },
    {
      "id": 9,
      "name": "Steuber, Wisozk and Gorczany"
    }
  ]
}
module.exports = {
  companies: function(rawData) {
  // function companies(rawData) {
    var companyArray=rawData.companies
    var peopleArray=[]
    var resultArray=[]
    for (var i = 0; i < companyArray.length; i++) {
      resultArray.push({name: companyArray[i].name, employees: []})
      companyArray[i].employees=[]
    }
    for (var i = 0; i < rawData.people.length; i++) {
      if (rawData.people[i].employments.length !== 0) {
        for (var j = 0; j < rawData.people[i].employments.length; j++) {
          peopleArray.push ({id: rawData.people[i].id, first_name: rawData.people[i].first_name, last_name: rawData.people[i].last_name, title: rawData.people[i].employments[j].title, company_id: rawData.people[i].employments[j].company_id})
        }
      }
    }
    for (var i = 0; i < peopleArray.length; i++) {
      var companyIndex = companyArray.map(function(x){return x.id}).indexOf(peopleArray[i].company_id)
      var id = peopleArray[i].id
      var first_name = peopleArray[i].first_name
      var last_name = peopleArray[i].last_name
      var title = peopleArray[i].title
      resultArray[companyIndex].employees.push({id: id, first_name: first_name, last_name: last_name, title: title})
    }
    return resultArray
  }
}
function employments(rawData) {
  var resultArray=[]
  for (var i = 0; i < rawData.people.length; i++) {
    if (rawData.people[i].employments.length !== 0) {
      var personObj = {id: rawData.people[i].id, person_first_name: rawData.people[i].first_name, person_last_name: rawData.people[i].last_name}
      for (var j = 0; j < rawData.people[i].employments.length; j++) {
        personObj.company_id = rawData.people[i].employments[j].company_id
        personObj.title = rawData.people[i].employments[j].title
        personObj.company_name = rawData.companies.filter(function(item){return item.id === rawData.people[i].employments[j].company_id})[0].name
        resultArray.push(personObj)
      }
    }
  }
  return resultArray
}
console.log(employments(rawData))
//
// function peopleWithoutEmployments(rawData) {
//   var resultArray=  []
//   for (var i = 0; i < rawData.people.length; i++) {
//     if (rawData.people[i].employments.length === 0) {
//       resultArray.push({id:rawData.people[i].id, first_name: rawData.people[i].first_name, last_name: rawData.people[i].last_name})
//     }
//   }
//   return resultArray
// }
// console.log(peopleWithoutEmployments(rawData))

function peopleWithoutEmployments(rawData){
  return rawData.people.filter(function(person) {return person.employments.length === 0}).map(function(person) {return {id: person.id, first_name: person.first_name, last_name: person.last_name}})
}
console.log(peopleWithoutEmployments(rawData))
