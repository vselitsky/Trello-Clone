# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  User.destroy_all
  Board.destroy_all
  List.destroy_all
  Card.destroy_all

u1 = User.create!(username: "trello", email: "trello@trello.com", password: '12344556778899')
u2 = User.create!(username: "brello", email: "brello@brello.com", password: '01234456677')
u3 = User.create!(username: "crello", email: "crello@crello.com", password: '01234456677')
u4 = User.create!(username: "canttrrello", email: "asfostrlo@crello.com", password: '1234567890')
u5 = User.create!(username: "prascertge", email: "aserdgw@crello.com", password: '01234456677902834')
u6 = User.create!(username: "vlad", email: "vlad@vlad.com", password: '0123456789')
u7 = User.create!(username: "random", email: "random@random.com", password: '0123456789')
u8 = User.create!(username: "vlad27", email: "vlad27@mail.com", password: '01234456677902834')
u9 = User.create!(username: "abc", email: "abc@com", password: '01234566789')
u10 = User.create!(username: "ostrrello", email: "ostrlo@crello.com", password: '01234456677902834')


b2 = Board.create!(title: 'Project Management', owner: u7 )
b3 = Board.create!(title: 'Marketing', owner: u7)
b4 = Board.create!(title: 'App Redesign', owner: u7)
b5 = Board.create!(title: 'Bugs', owner: u7)
b6 = Board.create!(title: 'New Website', owner: u7)
b7 = Board.create!(title: 'Vacation Planning', owner: u7)
b8 = Board.create!(title: 'Hiring Board', owner: u7)
b9 = Board.create!(title: 'Customer Success Initiatives', owner: u7)
b10 = Board.create!(title: 'New Feature Roadmap', owner: u7)
b11 = Board.create!(title: 'New Feature Roadmap2', owner: u7)
b12 = Board.create!(title: 'New Feature Roadmap3', owner: u7)
b14 = Board.create!(title: 'New Feature Roadmap4', owner: u7)
b14 = Board.create!(title: 'New Feature Roadmap5', owner: u7)
b14 = Board.create!(title: 'New Feature Roadmap6', owner: u7)
b14 = Board.create!(title: 'New Feature Roadmap7', owner: u7)
b14 = Board.create!(title: 'New Feature Roadmap8', owner: u7)
b14 = Board.create!(title: 'New Feature Roadmap9', owner: u7)
b14 = Board.create!(title: 'New Feature Roadmap10', owner: u7)
b14 = Board.create!(title: 'New Feature Roadmap11', owner: u7)
b14 = Board.create!(title: 'New Feature Roadmap12', owner: u7)
b14 = Board.create!(title: 'New Feature Roadmap13', owner: u7)
b14 = Board.create!(title: 'New Feature Roadmap14', owner: u7)
b14 = Board.create!(title: 'New Feature Roadmap15', owner: u7)
b14 = Board.create!(title: 'New Feature Roadmap16', owner: u7)



l1 = List.create!(title: 'To-dos', board: b2)
l2 = List.create!(title: 'In-progress', board: b2)
l3 = List.create!(title: 'Need Attention', board: b2)
l4 = List.create!(title: 'Finished', board: b2)
l5 = List.create!(title: 'Content to create', board: b3)
l6 = List.create!(title: 'Articles in progress', board: b3)
l7 = List.create!(title: 'Finished content', board: b3)
l8 = List.create!(title: 'New Bugs', board: b5)
l9 = List.create!(title: 'Bugs in progress', board: b5)
l10 = List.create!(title: 'Finished bugs', board: b5)


c1 = Card.create!(title: "Set up deadlines", list: l1)
c2 = Card.create!(title: "Brainstorm new ideas", list: l1)
c3 = Card.create!(title: "Set up goals", list: l1)
c4 = Card.create!(title: "Growth marketing implementation", list: l2)
c5 = Card.create!(title: "Android app redesign", list: l2)
c6 = Card.create!(title: "Product documentation", list: l2)
c7 = Card.create!(title: "New hires", list: l3)
c8 = Card.create!(title: "Technical debt", list: l3)
c9 = Card.create!(title: "Customer data analytics", list: l4)
c10 = Card.create!(title: "Why big data is so important", list: l4)
c11 = Card.create!(title: "Advantages of agigle development", list: l4)

end