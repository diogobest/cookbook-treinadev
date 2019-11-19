FROM ruby:2.6.3


RUN apt-get install curl
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update -qq
RUN apt-get install -y --no-install-recommends vim nodejs postgresql-client \
      locales yarn

RUN mkdir /cookbook
WORKDIR /cookbook
COPY Gemfile* /cookbook/

RUN bundle install

COPY . /cookbook

# RUN export TZ=America/Sao_Paulo
#rubycritic vars
# RUN export LC_ALL=C.UTF-8
# RUN export LANG=en_US.UTF-8
# RUN export LANGUAGE=en_US.UTF-8
