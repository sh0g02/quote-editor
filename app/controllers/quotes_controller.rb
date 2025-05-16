# app/controllers/quotes_controller.rb

class QuotesController < ApplicationController
  before_action :set_quote, only: [ :show, :edit, :update, :destroy ]

  def index
    @quotes = Quote.all
  end

  def show
  end

  def new
    @quote = Quote.new
  end

  def create
    @quote = Quote.new(quote_params)

    if @quote.save
      redirect_to quotes_path, notice: "Quote was successfully created."
    else
      # 無効なフォーム送信は、Turbo Driveが<body>ページの を置き換えてフォームエラーを表示するために、422ステータスコードを返す必要があります。Railsにおける422ステータスコードのエイリアスは です。そのため、Ruby on Rails 7以降、無効なフォーム送信によってリソースを保存できなかった場合、:unprocessable_entityscaffoldジェネレーターはとアクションを追加status: :unprocessable_entityします。
      render :new, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @quote.update(quote_params)
      redirect_to quotes_path, notice: "Quote was successfully updated."
    else
      render :edit
    end
  end

  def destroy
    @quote.destroy
    redirect_to quotes_path, notice: "Quote was successfully destroyed."
  end

  private

  def set_quote
    @quote = Quote.find(params[:id])
  end

  def quote_params
    params.require(:quote).permit(:name)
  end
end
