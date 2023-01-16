require 'faker'

10.times do
    title = Faker::Name.name,
    description = Faker::Markdown.emphasis,
    created_date = Faker::Date.between(from: '2020-09-23', to: '2021-09-25'),
    updated_date = Faker::Date.between(from: '2022-09-23', to: '2023-09-25')
    Recipe.create(title: title, description:description)
end
