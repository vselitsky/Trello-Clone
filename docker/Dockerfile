FROM ruby:2.5.1
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client git
RUN mkdir /trello-app
WORKDIR /trello-app
ADD backend/Gemfile /trello-app/
RUN gem install bundler -v 2.0.2
RUN gem update --system
RUN bundle install
RUN bundler update --bundler
COPY backend /trello-app/

EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]
