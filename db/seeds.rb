# course = Course.create(title: 'Hello World', description: 'Create a react app with ruby on rails')

# section = Section.create(title: 'Chapter 1', course: course)

# Episode.create([
#   {title: '1. Setting up a new Ruby on Rails App with React', description: 'Alias architecto ven', section: section, url: 'https://www.youtube.com/embed/B0SxxHAImhc'},
#   {title: '2. Adding React to an Existing Rails App', description: 'Alias architecto ven', section: section, url: 'https://www.youtube.com/embed/B0SxxHAImhc'},
#   {title: '3. Building a Hellow World App', description: 'Alias architecto ven', section: section, url: 'https://www.youtube.com/embed/B0SxxHAImhc'},
#   {title: '4. Adding React Router Don to you App', description: 'Alias architecto ven', section: section, url: 'https://www.youtube.com/embed/B0SxxHAImhc'}
# ])

10.times { Item.create!(name: "Item", description: "I am a description.") }