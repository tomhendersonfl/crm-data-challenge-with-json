module.exports = {
  companies,
  employments,
  peopleWithoutEmployments,
}

function companies(data) {
  return data.companies.map(company => {
    let employees = data.people
      .filter(person => person.employments.map(e => e.company_id).includes(company.id))
      .map(person => {
        const employment = person.employments.find(e => e.company_id === company.id)
        return formatPersonWithEmploymentAt(person, company, employment)
      })

    return {
      name: company.name,
      employees
    }
  })
}

function employments(data) {
  const companies = data.companies.reduce((result, company) => {
    result[company.id] = company
    return result
  }, {})

  return data.people.reduce((result, person) => {
    let personEmployents = person.employments.map(employment => {
      return formatEmployment(person, employment, companies)
    })
    return result.concat(personEmployents)
  }, [])
}

function peopleWithoutEmployments(data) {
  return data.people
    .filter(person => !person.employments.length)
    .map(formatPerson)
}

function formatPerson(person) {
  return {
    id: person.id,
    first_name: person.first_name,
    last_name: person.last_name
  }
}

function formatPersonWithEmploymentAt(person, company, employment) {
  return {
    id: person.id,
    first_name: person.first_name,
    last_name: person.last_name,
    title: employment.title
  }
}

function formatEmployment(person, employment, companies) {
  return {
    company_id: employment.company_id,
    company_name: companies[employment.company_id].name,
    person_id: person.id,
    person_first_name: person.first_name,
    person_last_name: person.last_name,
    title: employment.title
  }
}
