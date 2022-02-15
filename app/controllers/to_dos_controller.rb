class ToDosController < ApplicationController
    def index
        user = User.find_by(id: session[:user_id])
        todos = user.to_dos
        render json: todos
    end
    def show
        todo = Todo.find_by(id: params[:id])
        render json: todo
    end
    def create
        user = User.find_by(id: session[:user_id])
        todo = user.to_dos.create(to_do_params)
        todo.save
        render json: todo, status: :created
    end
    def destroy
        todo = ToDo.find_by(id: params[:id])
        todo.destroy
        head :no_content
    end
    private
    def to_do_params
        params.permit(:to_do, :date_due, :id)
    end
end
