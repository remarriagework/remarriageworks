class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :header

  def header
    	@breadcrumbs = "Home"
  end
  
  def require_admin
  	   unless current_user && current_user.admin
  			redirect_to "/"
  		end
  	end
end
