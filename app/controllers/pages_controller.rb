class PagesController < ApplicationController
  load_and_authorize_resource class: false

  def index
  end

  def episodes
    @episodes = Course.first.episodes
    render json: @episodes
  end

  def users
    render json: {roles: current_user.roles}
  end
end
