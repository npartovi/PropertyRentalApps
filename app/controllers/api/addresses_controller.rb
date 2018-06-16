class Api::AddressesController < ApplicationController

	def index
		@addresses = Address.all
	end

	def show
		@address = Address.find(params[:id])
		render :show
	end

	def create
		debugger
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

	def address_params
		params.require(:address).permit(:street ,:city,:state, :zip_code)
	end

end
