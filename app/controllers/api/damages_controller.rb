class Api::DamagesController < ApplicationController

    def index
        @damages = Damage.all
    end
    
    def show
        @damage = Damage.find(params[:id])
        render :show
    end

    def create
        @damage = Damage.new(damage_params)

        if @damage.save!
            render :show
        else
            render json: @damage.errors.full_messages
        end
    end

    private

    def damage_params
        params.require(:damage).permit(:description, :address_id)
    end
end
