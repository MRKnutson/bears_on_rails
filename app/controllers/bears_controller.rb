class BearsController < ApplicationController
  before_action :set_bear, only: [:show, :update, :destroy]

  def app
    render component: "App"
  end

  def index
    render json: Bear.all
  end

  def create
    @bear=Bear.new(bear_params)
    if(@bear.save)
      # this will be status 204: 2xx - successful
      render json: @bear
    else
      # status 4xx - client error: 422 is unprocessable entity (bad data)
      render json: {errors: @bear.errors.full_messages}, status: 422
    end
  end

  def update
    if(@bear.update(bear_params))
      # this will be status 204: 2xx - successful
      render json: @bear
    else
      # status 4xx - client error: 422 is unprocessable entity (bad data)
      render json: {errors: @bear.errors.full_messages}, status: 422
    end
  end

  def destroy
    render json: @bear.destroy
  end


private

def set_bear
  @bear = Bear.find(params[:id])
end

def bear_params
  params.require(:bear).permit(:species, :environment)
end

end
