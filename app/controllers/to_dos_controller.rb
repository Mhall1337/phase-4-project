class ToDosController < ApplicationController
    def index
        todos = ToDo.find_by(user_id: session[:user_id]) 
        render json: todos, status: :created
    end
    def show
        todo = Todo.find_by(id: params[:id])
        render json: todo
    end
end
