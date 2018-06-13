class Api::AddressesController < ApplicationController

	def index
		@addresses = Address.
	end

	def create
		@address = Address.new(address_params)
		@address.user_id = current_user.id

		if @address.save!
			render :show
		else
			render json: @address.errors.full_messages
		end
	end

	def update
	end

	def destroy
		@address = Address.find(params[:id])
		@address.destroy!
		render :index
	end

	def show
		@address = Address.find(params[:id])
	end

	def edit
	end

	def address_params
		params.require(:address).permit(:state,:city,:state, :zip_code, :user_id)
	end
end
