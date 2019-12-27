class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  before_action :current_user

  def current_user
    if request.headers["Authorization"]
      jwt_string = request.headers["Authorization"].gsub('Bearer ', '')
      CognitoUser.new(jwt_string) rescue nil
    end
  end
end
