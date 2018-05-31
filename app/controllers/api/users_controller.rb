class Api::UsersController < ApplicationController

	def index
		@users = User.all
		render :index
	end

	def create
		@user = User.new(user_params)

		if @user
			login(@user)
			render :show
		else
			render json: @user.errors.full_messages
		end
	end

	def show
		@user = User.find_by(id: params[:id])
		render :show
	end

	private

	def user_params
		params.require(:user).permit(:username, :email, :password)
	end
end
