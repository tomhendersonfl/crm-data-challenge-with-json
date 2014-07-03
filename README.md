# CRM Data Challenge

You just started a new job.  Your boss comes over and says that
their CRM (customer-relationship-management) app is too hard to work with,
and that you need to do some data transformation.  They tell you that you
will get a big hash of all the data, and you need
to write some code that will take that data and convert it to
other data structures more useful to the business.

The original data set has data about people and companies,
and about which person works for which companies as well as
what their job titles are.  The original data looks like this:

```ruby
CRM = {
  :people => [
    {
      :id => 20,
      :first_name => "Savannah",
      :last_name => "Clementina",
      :employments => []
    },
    {
      :id => 32,
      :first_name => "Elyse",
      :last_name => "Jensen",
      :employments =>
        [
          {
            :company_id => 4,
            :title => "Chief Communications Consultant"
          }
        ]
    }
  ],
  :companies => [
    {
      :id => 0,
      :name => "Nicolas and Sons"
    },
    {
      :id => 1,
      :name => "Mueller LLC"
    },
    {
      :id => 2,
      :name => "Mohr, King and Gleason"
    }
  ]
}
```

## Challenge #1 - employees of companies

Write some code that will return an array of companies,
and the people who work for them.  For example:

```ruby
[
  {
    name: "Nicolas and Sons",
    employees: [
      {
        :id => 20,
        :first_name => "Savannah",
        :last_name => "Clementina",
        :title => "Chief Communications Consultant"
      },
      {
        :id => 46,
        :first_name => "Elyse",
        :last_name => "Jensen",
        :title => "Human Directives Engineer"
      },
    ]
  }
]
```

## Challenge #2 - all employments

Write some code that will return an array of all the employments,
including the person name, company name, person id, company id
and title.

```ruby
[
  {
    :company_id => 4,
    :company_name => "Nicolas and Sons",
    :person_id => 20,
    :person_first_name => "Savannah",
    :person_last_name => "Clementina",
    :title => "Chief Communications Consultant"
  },
  {
    :company_id => 6,
    :company_name => "Mueller LLC",
    :person_id => 20,
    :person_first_name => "Elyse",
    :person_last_name => "Jensen",
    :title => "Human Directives Engineer"
  },
]
```

## Challenge #3 - people without employments

Write some code that will return an array of all the people
who have no employments.  The resulting hashes in the array should
_not_ include the `:employments` key.

```ruby
[
  {
    :id => 20,
    :first_name => "Savannah",
    :last_name => "Clementina"
  },
  {
    :id => 32,
    :first_name => "Elyse",
    :last_name => "Jensen",
  }
]
```

## Test Data

Test data has been provided in the `data.rb` file.

## Process

Write all of this test-first.  In your specs, don't use the
test data from `data.rb` - instead, write your own data
structures that are similar to the `CRM` data.

Then, in IRB, run your code against the test data to
see it in action.

## Bonus

Write a command line tool that will print this data in a
pretty way to the terminal.

# Setup

* Fork
* Clone
* Turn on TravisCI for the fork by
  visiting https://travis-ci.org/profile/<github user name>, clicking the "Sync now" button
  and scrolling down to find the repository to build.
* Create a new branch for your work using `git checkout -b v1`
* Implement specs and code
* Push using `git push -u origin v1`

## Further Practice

This warmup can be completed multiple times to increase your comfort level with the material.
To work on this from scratch, you can:

1. Add an upstream remote that points to the original repo `git remote add upstream git@github.com:gSchool/data-challenge.git`
1. Fetch the latest from the upstream remote using `git fetch upstream`
1. Create a new branch from the master branch of the upstream remote `git checkout -b v2 upstream/master`
1. Implement specs and code
1. Push using `git push -u origin v2`

Each time you do the exercise, create a new branch. For example the 3rd time you do the exercise the branch
name will be v3 instead of v2.
