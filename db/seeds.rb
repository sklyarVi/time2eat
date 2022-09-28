require 'faker'

10.times do
  Recipe.create(
    title: Faker::Lorem.sentence,
    description: Faker::Lorem.paragraph,
    published: Faker::Date.between( from: '2020-01-01T00:00:00.000Z', to: '2022-01-01T00:00:00.000Z'))
end
