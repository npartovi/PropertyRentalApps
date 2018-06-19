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
		@address = Address.find(params[:id])

		if @address.update(address_params)
			render :show
		else
			render json: @address.errors.full_messages, status: 422
		end
	end

	def destroy
		@address = Address.find(params[:id])
		@address.destroy!
		render :index
	end

	def address_params
		params.require(:address).permit(:street ,:city,:state, :zip_code, :suite, :tenant_first_name, :tenant_last_name)
	end

end
