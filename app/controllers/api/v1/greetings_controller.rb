class Api::V1::GreetingsController < ApplicationController
  def index
    render json: Greeting.all
  end

  private

  def greet_params
    params.require(:greet).permit(:id, :greet)
  end
end
