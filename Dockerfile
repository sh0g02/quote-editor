# 開発環境用のDockerfile
ARG RUBY_VERSION=3.4.3
FROM docker.io/library/ruby:$RUBY_VERSION AS base

# Rails app lives here
WORKDIR /rails

# 開発に必要なパッケージをインストール（ビルドツールを含む）
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential git node-gyp pkg-config \
    python-is-python3 curl libjemalloc2 libvips sqlite3 libyaml-dev \
    libsqlite3-dev shared-mime-info && \
    rm -rf /var/lib/apt/lists /var/cache/apt/archives

# JavaScript dependencies のインストール
ARG NODE_VERSION=23.11.0
ARG YARN_VERSION=1.22.17
ENV PATH=/usr/local/node/bin:$PATH
RUN curl -sL https://github.com/nodenv/node-build/archive/master.tar.gz | tar xz -C /tmp/ && \
    /tmp/node-build-master/bin/node-build "${NODE_VERSION}" /usr/local/node && \
    npm install -g yarn@$YARN_VERSION && \
    rm -rf /tmp/node-build-master

# 開発環境の設定
ENV RAILS_ENV="development" \
    BUNDLE_PATH="/usr/local/bundle" \
    BUNDLE_DEPLOYMENT="0" \
    BUNDLE_WITHOUT=""

# バンドルディレクトリの権限を設定
RUN mkdir -p /usr/local/bundle && \
    chmod -R 777 /usr/local/bundle

EXPOSE 3000