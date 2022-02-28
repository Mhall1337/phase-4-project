class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create
        #POST/signup
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end
    def show
        #GET/me
        if @current_user
            render json: @current_user
        else
            render json: {errors: "not authorized"}, status: :unauthorized
        end
    end
    def destroy
        user = @current_user
        user.destroy
        head :no_content
    end 
    def update
        @current_user.update(:username => params[:username])
        render json: @current_user
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
